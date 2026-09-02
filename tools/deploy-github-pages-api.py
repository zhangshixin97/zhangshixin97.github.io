#!/usr/bin/env python3
"""当 github.com 主站被墙、git push 不通时，用 GitHub API（api.github.com）把 dist/ 发布到 gh-pages 分支。"""
import base64
import datetime
import os
import pathlib
import subprocess
import sys

import requests

REPO = "zhangshixin97/zhangshixin97.github.io"
BRANCH = "gh-pages"
DIST = pathlib.Path(__file__).resolve().parent.parent / "dist"

token = subprocess.check_output(["gh", "auth", "token"], text=True).strip()
H = {"Authorization": f"Bearer {token}", "Accept": "application/vnd.github+json"}
API = f"https://api.github.com/repos/{REPO}/git"

# 准备文件清单（含 SPA 回退 404.html）
files = {}
for p in DIST.rglob("*"):
    if p.is_file():
        files[p.relative_to(DIST).as_posix()] = p.read_bytes()
files["404.html"] = files["index.html"]
print(f"待发布文件: {len(files)} 个")

# 当前分支指向
r = requests.get(f"{API}/refs/heads/{BRANCH}", headers=H)
r.raise_for_status()
old_commit = r.json()["object"]["sha"]
print(f"当前 {BRANCH}: {old_commit[:8]}")

# 逐个创建 blob
tree_items = []
for i, (path, content) in enumerate(sorted(files.items()), 1):
    r = requests.post(
        f"{API}/blobs",
        headers=H,
        json={"content": base64.b64encode(content).decode(), "encoding": "base64"},
    )
    r.raise_for_status()
    tree_items.append({"path": path, "mode": "100644", "type": "blob", "sha": r.json()["sha"]})
    print(f"  [{i}/{len(files)}] {path} ({len(content)/1024:.0f} KB)")

# 创建 tree（不带 base_tree，全量替换）
r = requests.post(f"{API}/trees", headers=H, json={"tree": tree_items})
r.raise_for_status()
tree_sha = r.json()["sha"]

# 创建 commit 并移动分支指针
msg = "deploy: " + datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
r = requests.post(f"{API}/commits", headers=H, json={"message": msg, "tree": tree_sha, "parents": [old_commit]})
r.raise_for_status()
new_commit = r.json()["sha"]

r = requests.patch(f"{API}/refs/heads/{BRANCH}", headers=H, json={"sha": new_commit})
r.raise_for_status()
print(f"GitHub Pages 已更新 ✅ https://zhangshixin97.github.io  (commit {new_commit[:8]})")
