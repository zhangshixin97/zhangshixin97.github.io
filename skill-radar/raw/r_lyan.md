<div align="center">

# SHR Skills Lab

**面向中文内容创作、视觉生产与 Agent 工作流的生产级 Skill 集合。**

把反复踩坑的经验，沉淀成可触发、可验证、可移植的工作流资产；不做零散提示词堆放，也不交付无法复用的临时代码。

[![Skills](https://img.shields.io/badge/skills-8-1f6feb?style=flat-square)](./skills)
[![Standard](https://img.shields.io/badge/standard-Agent%20Skills-1a7f37?style=flat-square)](https://agentskills.io/specification)
[![License](https://img.shields.io/github/license/lyanshi795-commits/ai-skills-lab?style=flat-square)](./LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/lyanshi795-commits/ai-skills-lab?style=flat-square)](https://github.com/lyanshi795-commits/ai-skills-lab/commits/main)
[![Repository size](https://img.shields.io/github/repo-size/lyanshi795-commits/ai-skills-lab?style=flat-square)](https://github.com/lyanshi795-commits/ai-skills-lab)

[技能目录](#技能目录) · [快速安装](#快速安装) · [质量标准](./docs/QUALITY_STANDARD.md) · [贡献指南](./CONTRIBUTING.md)

</div>

---

## 项目定位

**SHR Skills Lab** 是一套围绕真实生产任务构建的 Agent Skills。每个 Skill 都应将“输入是什么、如何判断、按什么步骤执行、怎样验收、哪些情况不能做”写清楚，帮助 Agent 在复杂任务里稳定复用经验，而不是临场拼凑。

仓库当前聚焦三个高频工作面：**内容生产**、**视觉表达**与**可执行工作流**。技能设计遵循渐进式披露原则：运行时优先读取轻量元数据；仅在任务匹配时加载主指令；脚本、示例与参考资料按需调用。相关结构参考 [Agent Skills Specification][1]。

> **适合谁使用？** 适合希望把内容创作、图像生成、公众号视觉、小程序开发、资料研究与选题决策沉淀为可复用 Agent 工作流的个人创作者、内容团队与 AI 产品实践者。

## 技能目录

| 分类 | Skill | 解决的问题 | 典型触发 |
|---|---|---|---|
| 视觉理解 | [`long-screenshot-ocr`](./skills/long-screenshot-ocr) | 对超长截图执行切片、放大、OCR、阅读顺序重建与噪声清理 | “OCR 这张长图”“把聊天截图转成文字” |
| 视觉生成 | [`chinese-xianxia-image-prompter`](./skills/chinese-xianxia-image-prompter) | 将中国仙侠创意变为电影级、可复用的生图提示词与连续世界观变体 | “写仙侠生图提示词”“做一组天宫场景” |
| 视觉生成 | [`gzh-cover-maker`](./skills/gzh-cover-maker) | 生成公众号方图与横幅首图，突出标题钩子与信息层级 | “做公众号封面”“文章首图” |
| 视觉生成 | [`gzh-infographic-maker`](./skills/gzh-infographic-maker) | 生成双栏对比型公众号信息图 | “做对比图”“做公众号配图” |
| 内容流水线 | [`character-story-daigou`](./skills/character-story-daigou) | 把人物故事转为短视频文案、字幕、分镜、生图提示词与剪辑清单 | “人物故事脚本”“视频号带货文案” |
| 研究与选题 | [`repo-topic-pipeline`](./skills/repo-topic-pipeline) | 将仓库或资料库转为可检索素材库和选题决策表 | “把仓库变成选题库”“选题打分” |
| 应用构建 | [`miniprogram-builder`](./skills/miniprogram-builder) | 从想法、主体与类目判断到小程序骨架与上线准备 | “做一个微信小程序” |
| 元能力 | [`skill-building-playbook`](./skills/skill-building-playbook) | 设计、审阅和升级可稳定触发的 Agent Skill | “帮我做个 Skill”“优化 SKILL.md” |

### 重点 Skill：`chinese-xianxia-image-prompter`

这是一个面向**中国仙侠、玄幻与国风史诗场景**的提示词设计 Skill。它不只堆叠“8K、史诗、唯美”等形容词，而是先建立空间叙事，再安排人物与镜头，最后配置材质、光线与避免项。内置天宫山门、白玉天梯、云端宫阙、望月仙台、悬浮仙城、秘境与天劫战场等模块，适合做系列主视觉、分镜气氛图、视频封面与小说场景设定。

| 能力 | 交付方式 |
|---|---|
| 单张场景设计 | 正向提示词、负向提示词、构图与比例建议 |
| 同世界观多图 | 固定建筑、人物、材质与色彩锚点，只改变时间、镜头或叙事状态 |
| 画面修正 | 针对天梯过短、人物过大、透视错误、古风不足、风格漂移等问题给出定向改写 |
| 平台适配 | 默认 21:9 电影宽幅；可重排为 16:9、9:16 或 1:1 |

## 快速安装

### 方式一：克隆整个仓库

```bash
git clone https://github.com/lyanshi795-commits/ai-skills-lab.git
cd ai-skills-lab
```

将需要的单个目录复制到 Agent 的 Skills 路径即可。常见路径如下；不同运行时的项目级目录可能略有差异，请以该运行时文档为准。

| 运行时 | 用户级示例路径 |
|---|---|
| Claude Code | `~/.claude/skills/<skill-name>` |
| Codex | `~/.codex/skills/<skill-name>` |
| Cursor | `~/.cursor/skills/<skill-name>` |
| Gemini CLI | `~/.gemini/skills/<skill-name>` |
| GitHub Copilot | `~/.copilot/skills/<skill-name>` |
| WorkBuddy | `~/.workbuddy/skills/<skill-name>` |

例如安装仙侠生图 Skill：

```bash
cp -R skills/chinese-xianxia-image-prompter ~/.claude/skills/
```

### 方式二：只获取一个 Skill

进入 `skills/<skill-name>/`，下载整个目录并放入对应 Skills 路径。每个 Skill 都以 `SKILL.md` 为入口；需要脚本或参考资料时，将同级目录一并保留。

## 使用方式

Skill 安装后，直接用自然语言描述任务即可。高质量输入应尽量提供“目标、受众、素材、限制、完成标准”。例如：

```text
我要为一条仙侠短视频做 6 张统一世界观的 21:9 场景图。
固定白玉天宫、盘龙石雕、云海和白衣少年；分别生成登天梯、云端宫廊、月下仙台、雷劫天门、悬浮仙城和雨后秘境。
要求国风写实、人物小比例、无文字无水印。
```

对于有脚本的 Skill，请先阅读其 `SKILL.md` 中的输入、依赖与验证要求，再运行脚本。不要把 API 密钥提交到仓库、终端历史或示例文件中。

## 质量架构

仓库采用“**统一入口 + 独立 Skill + 自动检查**”的非破坏式结构：既让读者能快速浏览，也避免移动已有目录导致用户安装路径失效。

```text
ai-skills-lab/
├── README.md                    # 项目定位、目录与安装入口
├── CONTRIBUTING.md               # 提交与维护流程
├── docs/
│   └── QUALITY_STANDARD.md       # 元数据、结构、测试与文档质量基线
├── scripts/
│   └── validate_skills.py        # 本地结构与元数据检查器
├── .github/workflows/
│   └── skill-quality.yml         # Pull Request 与推送时自动检查
└── skills/
    └── <skill-name>/
        ├── SKILL.md              # 任务入口与主工作流
        ├── references/           # 按需加载的长资料
        ├── scripts/              # 可测试的确定性工具
        └── templates/            # 可复用资产（可选）
```

详细质量基线、命名规范、前置检查和发布流程见 [`docs/QUALITY_STANDARD.md`](./docs/QUALITY_STANDARD.md)。贡献新 Skill 请先阅读 [`CONTRIBUTING.md`](./CONTRIBUTING.md)。

## 本地验证

仓库提供一个零第三方依赖的基础检查器，用于验证目录、YAML frontmatter、命名、描述长度和 `SKILL.md` 行数等结构约束：

```bash
python3 scripts/validate_skills.py
```

这不是对内容价值的替代。发布前仍应做任务触发测试、至少一个真实用例测试，以及一次无关任务的负面测试。具体检查表见 [质量标准](./docs/QUALITY_STANDARD.md)。

## 维护原则

**保留可用路径。** 优先通过分类目录、索引与文档改善可读性，除非明确发布迁移说明，否则不随意移动成熟 Skill。

**让每个 Skill 有边界。** 说明“适用于什么”和“不适用于什么”，避免一个 Skill 吞掉所有模糊需求。

**把经验写成决策。** 好的 Skill 不是教程复述，而是在关键分叉处告诉 Agent 如何选择、为何选择、如何检查失败。

**把质量自动化。** 所有新增或修改的 Skill 至少要通过本地校验；带脚本的 Skill 需要提供无密钥或 mock 验证路径；合并前检查是否包含密钥、无效链接和未经声明的外部依赖。

## 联系与许可

由 **SHR（lyanshi795）** 创建与维护。仓库内容以 [MIT License](./LICENSE) 发布；欢迎在保留许可证的前提下复用、改造和贡献。

如需交流，可通过 GitHub Issues 或仓库主页联系方式联系维护者。

<details>
<summary>维护者联系入口</summary>

<br>

<div align="center">
  <img src="./assets/wechat-qr.jpg" alt="SHR WeChat QR Code" width="220">
  <br>
  <sub>WeChat：<b>SLEO</b> · 用于协作与交流</sub>
</div>

</details>

---

[1]: https://agentskills.io/specification "Agent Skills Specification"
