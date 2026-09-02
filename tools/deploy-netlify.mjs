// 通过 Netlify REST API 直接部署 dist（绕过 CLI 的扩展拉取环节）
// 用法: node tools/deploy-netlify.mjs
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import os from 'node:os';

const SITE_ID = 'a904f44e-6c69-4ace-ba71-993ccbdbb8ce';
const DIST = path.resolve(process.cwd(), 'dist');
const cfgPath = path.join(os.homedir(), 'Library/Preferences/netlify/config.json');
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const userId = cfg.userId || Object.keys(cfg.users || {})[0];
const token = cfg.users?.[userId]?.auth?.token;
if (!token) { console.error('未找到 Netlify token'); process.exit(1); }

const headers = { Authorization: `Bearer ${token}` };

// 收集 dist 下所有文件
function walk(dir, base = '') {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = path.posix.join(base, name);
    if (fs.statSync(full).isDirectory()) out.push(...walk(full, rel));
    else out.push({ rel, full });
  }
  return out;
}
const files = walk(DIST);
const fileSha = {};
for (const f of files) {
  fileSha['/' + f.rel] = crypto.createHash('sha1').update(fs.readFileSync(f.full)).digest('hex');
}
console.log(`待部署文件: ${files.length} 个`);

// 1. 创建 deploy（提交文件摘要清单）
const create = await fetch(`https://api.netlify.com/api/v1/sites/${SITE_ID}/deploys`, {
  method: 'POST',
  headers: { ...headers, 'Content-Type': 'application/json' },
  body: JSON.stringify({ files: fileSha }),
});
const deploy = await create.json();
if (!create.ok) { console.error('创建 deploy 失败:', deploy); process.exit(1); }
console.log('deploy id:', deploy.id);

// 2. 上传服务端要求的文件
const required = deploy.required || [];
console.log(`需要上传: ${required.length} 个（其余服务端已有缓存）`);
for (const sha of required) {
  const rel = Object.keys(fileSha).find((k) => fileSha[k] === sha);
  const body = fs.readFileSync(path.join(DIST, rel));
  const up = await fetch(`https://api.netlify.com/api/v1/deploys/${deploy.id}/files${rel}`, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/octet-stream' },
    body,
  });
  if (!up.ok) { console.error(`上传失败 ${rel}:`, up.status, await up.text()); process.exit(1); }
  console.log('已上传', rel);
}

// 3. 等待就绪
for (let i = 0; i < 20; i++) {
  await new Promise((r) => setTimeout(r, 3000));
  const st = await (await fetch(`https://api.netlify.com/api/v1/deploys/${deploy.id}`, { headers })).json();
  if (st.state === 'ready' || st.state === 'current') { console.log('部署完成 ✅', st.ssl_url || st.url); process.exit(0); }
  if (st.state === 'error') { console.error('部署出错'); process.exit(1); }
  process.stdout.write('.');
}
console.log('仍在处理中，稍后到 Netlify 后台确认');
