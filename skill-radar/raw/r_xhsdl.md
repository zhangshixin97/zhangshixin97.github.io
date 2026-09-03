# 小红书图片批量下载 Skill

这是一个供 Codex 使用的个人技能（Skill），可以根据你提供的小红书链接：

- 下载单篇图文作品里的全部图片；
- 同时处理多篇作品链接；
- 下载指定序号的图片；
- 读取小红书用户主页，批量下载该主页公开图文作品里的图片；
- 自动跳过视频作品，并为不同作品建立独立文件夹。

> 本项目仅用于下载你有权访问和保存的内容。请尊重作者版权、小红书用户协议及相关法律法规，不要用于未经授权的转载、商用或大规模采集。

## 一、安装前准备

你需要准备：

1. 已安装 [Git](https://git-scm.com/downloads)；
2. 已安装 Python 3.10 或更高版本；
3. 已安装 Codex；
4. 若要下载整个用户主页，电脑上建议安装 Google Chrome；
5. 一个可以正常登录小红书网页版的账号。

在 PowerShell 中运行以下命令，确认 Git 和 Python 可以使用：

```powershell
git --version
python --version
```

如果 `python` 命令不存在，可以尝试：

```powershell
py --version
```

后续命令中的 `python` 也可以相应替换为 `py`。

## 二、安装 Skill

### 1. 打开 PowerShell

在 Windows 开始菜单中搜索“PowerShell”并打开。

### 2. 创建 Codex 技能目录

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.codex\skills" | Out-Null
```

### 3. 下载本项目

```powershell
git clone https://github.com/mayJ1/All_Auto_Download_xiaohongshu_SKILL.git "$env:USERPROFILE\.codex\skills\download-xhs-images"
```

如果提示目标文件夹已经存在，说明该 Skill 可能已经安装。请不要重复克隆，可以直接查看后文的“更新 Skill”。

### 4. 安装 Python 依赖

```powershell
python -m pip install "httpx[http2]" lxml pyyaml playwright
```

如果电脑没有安装 Chrome，再安装 Playwright 自带的 Chromium：

```powershell
python -m playwright install chromium
```

### 5. 重启 Codex

关闭并重新打开 Codex，让它重新扫描个人技能目录。安装成功后，Codex 应能识别 `$download-xhs-images`。

## 三、最简单的使用方法

在 Codex 对话框中输入技能名称和小红书链接即可。你不需要自己运行 Python 脚本。

### 下载单篇作品的全部图片

```text
使用 $download-xhs-images 下载这个作品里的全部图片：
https://www.xiaohongshu.com/discovery/item/作品ID
```

也支持小红书分享口令中的完整文字，以及 `xhslink.com` 短链接。

### 下载多篇作品

```text
使用 $download-xhs-images 下载下面这些作品里的全部图片：
链接1
链接2
链接3
```

### 只下载指定图片

下面的例子只下载一篇作品中的第 1、3、5 张图片：

```text
使用 $download-xhs-images 下载这个作品的第1、3、5张图片：
作品链接
```

### 下载用户主页的全部图文图片

```text
使用 $download-xhs-images 下载这个小红书用户主页里所有公开图文作品的图片：
用户主页链接
```

主页链接通常包含 `/user/profile/`，例如：

```text
https://www.xiaohongshu.com/user/profile/用户ID
```

## 四、首次下载用户主页时如何登录

下载单篇公开作品通常不需要打开登录窗口。批量读取用户主页时，脚本会启动一个独立的 Chrome 窗口。

首次使用按以下步骤操作：

1. 等待 Chrome 窗口自动打开；
2. 在该窗口中登录小红书，或使用手机扫码登录；
3. 登录完成后保持窗口开启，等待脚本继续运行；
4. 如果 Codex 提示需要登录，完成登录后让它重新执行刚才的下载任务。

登录状态会保存在当前工作目录的 `.xhs-browser-profile` 文件夹中，后续通常不需要重复登录。

> `.xhs-browser-profile` 包含你的本地登录状态。不要发送给他人，也不要上传到 GitHub、网盘或公开目录。

## 五、图片保存在哪里

如果没有指定路径，Codex 默认会在当前工作目录下创建：

```text
xhs-images
```

每篇作品会拥有单独的文件夹。下载用户主页时，还会生成：

```text
profile-works.json
```

该文件用于记录采集到的作品清单和处理结果。

你也可以在请求中指定保存位置：

```text
使用 $download-xhs-images 下载这个用户主页的全部图片，保存到 D:\小红书图片
主页链接
```

## 六、可选：直接使用命令行

通常推荐直接在 Codex 中调用 Skill。以下命令主要用于调试或高级使用。

先进入一个用于保存下载结果的工作目录：

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\Downloads\xhs-downloads" | Out-Null
Set-Location "$env:USERPROFILE\Downloads\xhs-downloads"
```

### 下载单篇作品

```powershell
python "$env:USERPROFILE\.codex\skills\download-xhs-images\scripts\download_xhs_images.py" --output ".\xhs-images" "作品链接"
```

### 下载第 1、3、5 张图片

```powershell
python "$env:USERPROFILE\.codex\skills\download-xhs-images\scripts\download_xhs_images.py" --output ".\xhs-images" --index 1,3,5 "作品链接"
```

### 下载用户主页的全部图文图片

```powershell
python "$env:USERPROFILE\.codex\skills\download-xhs-images\scripts\download_xhs_profile.py" --output ".\xhs-images" "用户主页链接"
```

首次运行主页下载命令时，不要添加 `--headless`，否则你将看不到登录窗口。

## 七、更新 Skill

项目更新后，在 PowerShell 中运行：

```powershell
git -C "$env:USERPROFILE\.codex\skills\download-xhs-images" pull
python -m pip install --upgrade "httpx[http2]" lxml pyyaml playwright
```

更新完成后重启 Codex。

## 八、卸载 Skill

先关闭 Codex，然后删除技能目录：

```powershell
Remove-Item -LiteralPath "$env:USERPROFILE\.codex\skills\download-xhs-images" -Recurse
```

此操作会删除 Skill 文件，但不会自动删除你保存在其他目录中的图片。

## 九、常见问题

### Codex 找不到 `$download-xhs-images`

请确认文件存在：

```text
C:\Users\你的用户名\.codex\skills\download-xhs-images\SKILL.md
```

然后完全退出并重新打开 Codex。

### 提示缺少 Python 模块

重新安装依赖：

```powershell
python -m pip install "httpx[http2]" lxml pyyaml playwright
```

### 提示找不到浏览器

安装 Google Chrome，或者运行：

```powershell
python -m playwright install chromium
```

### 用户主页要求登录

不要使用无头模式。让脚本打开浏览器，在该浏览器中完成登录后重新运行。

系统 Chrome、Codex 内置浏览器和脚本启动的持久化浏览器可能使用不同的登录会话，因此你在其他浏览器中已经登录，并不代表脚本也已经登录。

### 页面能打开，但没有下载到作品

可能原因包括：

- 作品已删除、设为私密或仅自己可见；
- 分享链接中的访问令牌已经过期；
- 小红书要求重新登录或进行人工验证；
- 小红书页面结构发生变化；
- 网络连接暂时异常。

可以先在浏览器中确认链接是否仍能正常访问，再重新复制最新分享链接。

### 视频为什么没有下载

本 Skill 专门下载图文作品中的图片。识别到的视频作品会自动跳过，不会下载视频文件。

### 重复运行会不会重复下载

默认会跳过已经存在的同名图片。只有明确使用 `--overwrite` 参数时才会覆盖现有文件。

## 十、隐私与安全

- 不要把 Cookie、二维码、短信验证码或密码发给任何人；
- 不要提交 `.xhs-browser-profile`、`.xhs-profile-debug` 或 `.env`；
- 不要尝试绕过验证码、访问控制或平台限制；
- 只下载你本人拥有、已获授权或平台允许保存的内容；
- 公开发布图片前，应再次确认作者授权和版权要求。
