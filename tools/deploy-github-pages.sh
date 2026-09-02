#!/bin/bash
# 把 dist/ 推送到 GitHub Pages（gh-pages 分支）
# 前提：已 gh auth login；dist/ 已构建（npm run build）
set -e
cd "$(dirname "$0")/.."

[ -d dist ] || { echo "dist/ 不存在，先跑 npm run build"; exit 1; }
cp dist/index.html dist/404.html   # SPA 路由回退

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
cp -R dist/* "$TMP/"
cd "$TMP"
git init -q
git add -A
git -c user.name="zhangshixin97" -c user.email="zhangshixin97@users.noreply.github.com" \
  commit -qm "deploy: $(date '+%Y-%m-%d %H:%M')"
git remote add origin https://github.com/zhangshixin97/zhangshixin97.github.io.git
git config http.version HTTP/1.1   # 国内网络推 GitHub 更稳
git push -f origin HEAD:gh-pages
echo "GitHub Pages 已更新 ✅ https://zhangshixin97.github.io"
