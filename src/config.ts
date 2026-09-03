// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "zh-CN",
  brandName: "ZHANG SHIXIN",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "关于我", href: "#about" },
    { label: "实战落地", href: "#curriculum" },
    { label: "Skill 与作品", href: "#alumni" },
    { label: "智能体", href: "#avatar" },
    { label: "联系我", href: "#footer" },
  ],
  ctaText: "合作咨询",
};

// ============================================================
// Hero
// ============================================================

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroConfig {
  eyebrow: string;
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  motto: string;
  portrait: string;
  portraitAlt: string;
  stats: HeroStat[];
}

export const heroConfig: HeroConfig = {
  eyebrow: "HOTEL AI · IN ACTION",
  title: "张世鑫",
  subtitleLine1: "酒旅 AI 全域运营实战专家 · 订单来了 AI 酒店培训特聘讲师",
  subtitleLine2: "Smart Order AI Work Platform · Certified Trainer",
  motto: "把 AI 变成店里最得力的员工",
  portrait: "images/portrait.jpg",
  portraitAlt: "张世鑫",
  stats: [
    { value: "7年", label: "酒旅行业深耕" },
    { value: "5000+万", label: "酒旅板块抖音 GMV" },
    { value: "60+", label: "自营+代运营落地项目" },
    { value: "2023→", label: "创业至今" },
  ],
};

// ============================================================
// About (关于我)
// ============================================================

export interface AboutMilestone {
  period: string;
  title: string;
  detail: string;
}

export interface AboutConfig {
  sectionLabel: string;
  title: string;
  identities: string[];
  paragraphs: string[];
  stackLabel: string;
  stack: string[];
  milestones: AboutMilestone[];
  topicsLabel: string;
  topics: string[];
}

export const aboutConfig: AboutConfig = {
  sectionLabel: "关于我 / ABOUT",
  title: "从携程区域经理，到酒店 AI 实战派",
  identities: [
    "订单来了 AI 酒店培训特聘讲师",
    "酒店投资人",
    "OPC（One-Person Center）一人酒店中台实践者",
    "福建 · 原携程程长营讲师",
  ],
  paragraphs: [
    "7 年酒旅行业深耕。2019 年毕业即加入携程，从运营助理晋升区域经理，主导泉州、莆田 0-5 星级酒店对接，同时担任福建 · 携程程长营讲师——携程的规则、流量与转化逻辑，是我在平台一线练出来的基本功。",
    "2023 年创业至今，做的是酒店民宿的全域运营：线上 OTA 覆盖携程系、美团系、飞猪系，新媒体打通抖音、小红书，私域搭建与微信公众号沉淀复购，百度地图、高德地图的本地流量也在做；配套百位抖音、小红书达人矩阵资源和线上线下培训赋能。累计酒旅板块抖音 GMV 5000+ 万，自营 + 代运营落地 60+ 酒店民宿项目。",
    "现在专注用 AI 重新设计门店的运营体系：流程自动化、岗位提效、成本优化、知识库建设与 GEO 优化，打造 OPC 一人酒店中台，打通 OTA、短视频、大模型 GEO 的全新流量，帮门店在 AI 时代被更多客人看见。",
  ],
  stackLabel: "AI 工具栈",
  stack: ["订单来了 AI 操作系统", "腾讯 WorkBuddy", "豆包工作", "Codex", "知识库"],
  milestones: [
    {
      period: "2019 — 2023",
      title: "携程 · 运营助理 → 区域经理",
      detail: "主导泉州、莆田 0-5 星级酒店对接，福建 · 原携程程长营讲师。",
    },
    {
      period: "2023 →",
      title: "创业 · 全域运营实战",
      detail: "自营 + 代运营落地 60+ 项目，抖音 GMV 5000+ 万，OTA + 新媒体 + 私域全渠道。",
    },
    {
      period: "现在",
      title: "酒店民宿 AI 实战赋能",
      detail: "订单来了 AI 酒店培训特聘讲师 · OPC（One-Person Center，一人酒店中台）实践者。",
    },
  ],
  topicsLabel: "可交流",
  topics: [
    "酒店民宿运营",
    "OTA 与内容营销",
    "酒店民宿 AI 转型",
    "AI 工作流",
    "1 人公司 + AI",
  ],
};

// ============================================================
// Capabilities (实战落地)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  english: string;
  description: string;
  points: string[];
  hue: string; // 每张卡的主色渐变
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  title: string;
  subtitle: string;
  detailHint: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "实战落地 / IN ACTION",
  title: "AI 如何真正进入门店经营",
  subtitle:
    "不聊概念，只交付已经在门店里跑通的七件事——每一件都配套 Skill、工作流和培训方案，看完就能拿去用。",
  detailHint: "点击查看完整拆解",
  items: [
    {
      title: "AI 知识库搭建",
      slug: "knowledge-base",
      english: "Knowledge Base",
      description:
        "用 Obsidian、IMA、得到大脑，为个人与企业搭建可检索、可复用的知识库：SOP、话术、政策、案例统一沉淀，让 AI 和团队随取随用。",
      points: ["Obsidian / IMA / 得到大脑", "个人与企业双场景", "AI 随时调用取料"],
      hue: "linear-gradient(135deg,#334155 0%,#64748b 100%)",
    },
    {
      title: "AI 智能定价",
      slug: "ai-pricing",
      english: "Dynamic Pricing",
      description:
        "基于订单来了 PMS 真实经营数据的动态定价：实时捕捉市场需求、竞品价格与季节因素，自动给出调价建议。",
      points: ["解放人工盯盘", "提升整体收益率", "快速响应市场"],
      hue: "linear-gradient(135deg,#2563eb 0%,#60a5fa 100%)",
    },
    {
      title: "AI 智能客服",
      slug: "ai-reply",
      english: "AI Concierge",
      description:
        "门店知识库问答 24 小时秒回：私域咨询直接应答，OTA 询单自动生成回复草稿，人工确认后发出。",
      points: ["24h 知识库问答", "回复草稿自动生成", "口径统一不跑偏"],
      hue: "linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%)",
    },
    {
      title: "AI 智能点评",
      slug: "ai-review",
      english: "Review Autopilot",
      description:
        "差评实时预警、回复自动生成、点评数据分析——让每一条客人反馈都反哺运营决策。",
      points: ["差评实时预警", "回复自动生成", "点评反哺运营"],
      hue: "linear-gradient(135deg,#ea580c 0%,#fb923c 100%)",
    },
    {
      title: "AI 营销视频",
      slug: "ai-video",
      english: "AI Marketing Video",
      description:
        "AI 写脚本、数字分身出镜、门店实景做画面：客房、餐饮、二销产品，人人都能快速产出带货视频。",
      points: ["数字分身出镜", "脚本一键生成", "客房餐饮二销带货"],
      hue: "linear-gradient(135deg,#0891b2 0%,#22d3ee 100%)",
    },
    {
      title: "AI 智能投放",
      slug: "ai-ads",
      english: "Smart Ads",
      description:
        "携程、美团、抖音的投放由 AI 辅助优化：关键词、出价与素材持续迭代，让每一分推广预算都花在刀刃上。",
      points: ["投放自动优化", "素材迭代建议", "ROI 持续跟踪"],
      hue: "linear-gradient(135deg,#be185d 0%,#f472b6 100%)",
    },
    {
      title: "GEO · AI 搜索占位",
      slug: "geo",
      english: "GEO",
      description:
        "GEO（生成式引擎优化）：让豆包、千问、元宝、DeepSeek、Kimi 在回答「住哪家好」时，优先推荐你的店。",
      points: ["AI 问答可见度", "品牌内容资产", "抢占新流量入口"],
      hue: "linear-gradient(135deg,#059669 0%,#34d399 100%)",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  video?: string; // 演示视频（/videos/xxx.mp4）
  videoCaption?: string;
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "赋能方向",
  backLinkText: "返回首页",
  prevLabel: "上一个",
  nextLabel: "下一个",
  notFoundText: "没有找到对应的赋能方向。",
  capabilities: {
    "knowledge-base": {
      title: "AI 知识库搭建",
      subtitle: "把经验变成资产，让 AI 和团队随取随用。",
      paragraphs: [
        "【专业解释】以 Obsidian、IMA、得到大脑为核心工具的组合式知识管理体系。Obsidian 负责本地结构化沉淀，把 SOP、话术、房价政策、培训资料、经营案例串成双向链接的知识网络；IMA 和得到大脑负责 AI 检索与问答，让知识在微信里也能随问随取。整套知识库同时作为检索增强（RAG）语料接入 AI 工作流——智能回复、新人培训、内容生产全部从同一知识库取料，保证口径一致、持续迭代。",
        "【大白话】门店最值钱的东西往往只在老员工脑子里：怎么处理投诉、旺季怎么排房、差评怎么回。知识库就是把这些经验一条条写下来、存进 Obsidian，AI 随时读、新人随时学——人走了，经验带不走。",
        "很多门店和团队的隐性知识都散落在微信聊天记录、纸质笔记本和老员工的记忆里：新人来了靠口口相传，培训一遍忘一半；同样的客人问题，不同前台给出不同答案；做内容、写回复时，好用的素材永远找不到。经验没有沉淀，就永远是成本而不是资产。",
        "我会按团队规模选工具组合：个人和小团队用 Obsidian 把 SOP、服务话术、房价与退改政策、培训资料、经营案例沉淀成结构化的知识网络；需要多人协作、随时问答的，接入 IMA 或得到大脑，手机微信上就能随问随取。搭好之后再接入 AI 工作流——智能回复从这里调取标准口径，培训从这里生成教材，内容创作从这里取素材。个人用它管理方法论，企业用它让整个团队站在同一套知识上工作。",
        "知识库是整个 AI 赋能体系的地基：定价、回复、点评、内容，每个方向做得好不好，都取决于底层的知识沉淀得扎不扎实。搭好一次，持续复利——这是我在自己的一人公司实践里最先做、也最推荐同行先做的一件事。",
      ],
    },
    "ai-pricing": {
      title: "AI 智能定价",
      subtitle: "让每一间房，都卖出它该卖的价格。",
      paragraphs: [
        "【专业解释】基于收益管理（Revenue Management）理论的动态定价体系。以 PMS 真实经营数据为基础，结合市场需求预测、竞品价格监测与季节性因子建模，由 AI 自动生成并执行调价策略，使房价在需求曲线上始终处于收益最优位置。",
        "【大白话】以前定价靠店长每天盯盘、凭感觉调。现在 AI 帮你盯着市场和竞品：该涨的时候不手软，该降的时候不含糊——每间房都卖出它该卖的价格，人只管看结果。",
        "酒店民宿的定价，过去靠的是店长的经验和每天几轮的人工盯盘：看竞品、看日历、看剩余房量，再凭感觉调价。旺季反应慢半拍，订单就被隔壁抢走；淡季降价不及时，空房就是纯损失。这套依赖人肉经验的模式，在 OTA 流量波动越来越快的今天，已经越来越难跑通。",
        "基于订单来了 PMS 的真实经营数据，AI 动态定价把这件事变成了一套可复制的系统：实时捕捉市场需求、竞品价格变化与季节性因素，自动给出调价建议并执行。它不替代经营者的判断，而是把重复、高频、易出错的盯盘工作接过去，让人专注于策略本身。",
        "这套方案的三个核心价值：解放人工盯盘，把每天数小时的重复劳动压缩到几分钟；提升整体收益率，让价格在需求曲线上始终处于更优位置；快速响应市场变化，展会、节假日、天气突变等信号出现时，第一时间完成价格调整。我在自营与代运营门店里已经把这套流程跑通，现在把它整理成可落地的方法教给同行。",
      ],
    },
    "ai-reply": {
      title: "AI 智能客服",
      subtitle: "24 小时在线的知识库问答助手。",
      paragraphs: [
        "【专业解释】基于大语言模型与门店知识库的问答体系。将房价、房态、退改政策、入住须知等结构化入库，AI 按标准口径生成回答：私域场景（微信、企业微信）可直接自动应答；OTA 渠道受平台规则限制无法由第三方自动接管，采用「AI 起草回复 + 人工确认发出」的辅助模式，兼顾响应速度与合规。",
        "【大白话】客人问「能不能带宠物」「几点能入住」，AI 几秒钟就给出标准答案，口径跟你店里最熟练的前台一模一样。微信里的咨询它直接接住；携程、美团上来的询单，它先把回复草稿写好，你扫一眼、点个头就能发——半夜的咨询再也不用硬撑着爬起来回了。",
        "客人咨询的响应速度，直接决定转化率。携程、美团上来的询单，晚回五分钟，客人可能已经在别家下单；深夜和清晨的咨询，更是大量流失在无人值守的时间段里。而养着一支能三班倒的客服团队，对绝大多数酒店民宿来说并不现实。",
        "AI 智能客服解决这个矛盾的方式很务实：先把门店知识库搭好——房价、房态、退改政策、周边交通、入住须知，这些占咨询量八成以上的标准问题，AI 都能秒级给出准确、口径一致的答案。微信私域里它直接应答；OTA 渠道的询单，它生成回复草稿、人工确认后发出——平台规则不允许第三方全自动接管，「AI 起草 + 人确认」反而又快又稳。",
        "落地后的价值非常直接：响应速度从「看人在不在」变成「秒级出草稿」，不再漏掉任何一个时间段的咨询；标准化服务输出，新员工也能立刻拥有老员工的话术水平；把人力释放到真正需要温度服务的环节。响应更快，转化自然更高。",
      ],
    },
    "ai-review": {
      title: "AI 智能点评",
      subtitle: "每一条客人反馈，都是运营的养料。",
      paragraphs: [
        "【专业解释】点评管理的自动化流水线。覆盖差评实时监测预警、基于情绪识别与问题分类的回复自动生成、多维度点评数据聚类分析三个环节，把非结构化的客人反馈转化为可执行的运营改进清单。",
        "【大白话】差评一出现，负责人手机马上收到提醒；回复 AI 已经写好了，人确认一遍就能发；每月还自动告诉你：客人吐槽最多的是卫生还是隔音。点评从「门面工程」变成「改进指南」。",
        "在 OTA 体系里，点评分就是流量分配的命门。但多数门店的点评管理停留在两个极端：要么忙得顾不上回，要么用万能模板敷衍。差评出现后才发现，错过了黄金处理期；点评里藏着的运营问题，也从来没人系统分析过。",
        "AI 智能点评把点评管理变成一条自动化流水线：差评实时预警，第一时间推送给负责人；回复自动生成，针对不同星级、不同问题类型生成有针对性、有温度的回复文案，人工确认后即可发出；点评数据定期分析，把零散 feedback 聚合成卫生、服务、设施等维度的改进清单。",
        "这套体系带来的改变是结构性的：点评回复效率数倍提升，差评处理从「事后补救」变成「即时响应」，更重要的是——客人的每一条反馈都开始反哺运营决策。点评不再只是门面工程，而是门店持续优化的数据来源。",
      ],
    },
    "ai-video": {
      title: "AI 营销视频",
      subtitle: "让数字分身替你出镜，客房、餐饮、二销都能拍成带货视频。",
      video: "/videos/ai-avatar-demo.mp4",
      videoCaption: "AI 生成示例：数字分身 + 民宿实景，零拍摄出片",
      paragraphs: [
        "【专业解释】数字分身（Digital Avatar）+ AIGC 内容工作流。预设门店的脚本模板、视觉风格与卖点库：AI 生成口播脚本，数字分身出镜演绎，叠加门店实景图片与素材自动成片，覆盖客房售卖、餐饮套餐、二销产品等带货场景，把单条视频的生产成本压缩到接近零。",
        "【大白话】不用请主播、不用背台词：AI 写好脚本，数字分身出镜讲解，配上你店里的照片和视频素材，一条带货视频就出来了。今天推客房套餐、明天推餐厅新菜、后天推伴手礼——换个脚本就能批量出片。",
        "抖音、小红书已经是酒店民宿获客的重要入口，但内容生产对大多数门店来说门槛太高：不会写脚本、不懂拍摄剪辑、请团队太贵，真人出镜更是很难坚持。很多位置极好、体验极佳的门店，就因为「不会表达」而淹没在信息流里。",
        "我的做法是把视频生产拆成可复用的模块：提前预设好脚本模板、画面风格和卖点库，AI 负责写脚本，数字分身负责出镜，门店实景素材负责真实感。只要你有想法、有创意，每个人都能做出自己门店的专属视频——客房售卖、餐厅推广、二销产品讲解，一个人就能撑起一个账号的更新。相关的文旅宣传片 Skill 我也在打磨中，完成后会第一时间开源出来。",
        "这一方向的核心价值：大幅降低内容生产成本，让「周更甚至日更」从奢侈品变成日常；带货场景全覆盖，客房、餐饮、二销都能用视频讲清楚卖点；增强品牌曝光，让好门店被更多人看见。内容能力，正在成为酒店民宿的第二种房源竞争力。",
      ],
    },
    "ai-ads": {
      title: "AI 智能投放",
      subtitle: "让每一分推广预算，都花在刀刃上。",
      paragraphs: [
        "【专业解释】数据驱动的广告投放优化系统。基于历史投放数据与实时转化归因，对关键词组合、出价策略与素材方向持续迭代，覆盖携程推广通、美团推广位、抖音本地推等渠道，让 ROI 可追踪、可优化。",
        "【大白话】以前投广告是「凭感觉烧钱」。现在哪个词在浪费钱、哪条素材跑得好、哪个时段转化高，AI 都给你算得清清楚楚——同样的预算，带回更多订单。",
        "携程的推广通、美团的推广位、抖音的本地推——投放已经是门店获客绕不开的动作。但多数门店的投放处在「凭感觉烧钱」的状态：关键词凭经验选、出价跟着感觉走、素材一套用到老，ROI 是好是坏全凭运气。钱花出去了，连问题出在哪一环都说不清楚。",
        "AI 智能投放把这件事变成可优化的系统：基于历史投放数据与实时转化表现，AI 持续给出关键词取舍、出价调整和素材迭代建议；哪条素材跑得好、哪个时段转化高、哪个词在浪费预算，都有清晰的归因。投放从「一次性动作」变成「持续迭代的闭环」。",
        "落地价值非常直接：投放效率显著提升，同样的预算带来更多订单；素材迭代有方向，不再靠拍脑袋；ROI 持续可追踪，每一分钱花在哪里、带回什么，一目了然。这套方法在我的自营和陪跑门店里已经验证过，现在整理成课程和 Skill 教给同行。",
      ],
    },
    "geo": {
      title: "GEO · AI 搜索占位",
      subtitle: "当客人问 AI「住哪家好」，先看到你的店。",
      paragraphs: [
        "【专业解释】GEO（Generative Engine Optimization，生成式引擎优化）：针对生成式 AI 问答场景的内容优化体系。通过系统性完善门店在全网的结构化内容资产——OTA 页面的图文质量与信息一致性、点评语义关键词、新媒体内容、地图平台 POI 数据——提升品牌在豆包、千问、元宝、DeepSeek、Kimi 等 AI 助手的生成答案中的可见度与被推荐概率。",
        "【大白话】现在越来越多客人订房前不看攻略了，直接问 AI：「厦门带娃住哪家民宿好？」AI 会像一个懂行的朋友一样给出几个推荐。GEO 做的事，就是让你的店挤进这个推荐名单——而且 AI 不吃竞价排名那一套，它只推荐自己「读懂了、信得过」的店，所以先布局的人几乎是在无人竞争地占位。",
        "客人的决策入口正在悄悄变化。过去订房前搜携程、刷小红书，现在 AI 问答正在分走这部分流量。这和过去的 SEO 逻辑完全不同：AI 不看谁出价高，它读的是全网关于你门店的内容质量与一致性。我做的就是把门店在各个渠道的内容资产系统地「喂」给 AI：完善平台信息、生产 AI 友好型的图文与问答内容，让门店在 AI 的知识库里成为「值得推荐的答案」。",
        "我现在把 GEO 作为全域运营的核心模块之一，和 OTA、新媒体、私域一起纳入门店的获客体系——因为未来两年，AI 推荐会成为继 OTA 榜单之后最重要的流量入口，而绝大多数酒店民宿还没意识到这件事正在发生。",
      ],
    },
  },
};

// ============================================================
// Skills & Works (Skill 与作品)
// ============================================================

export interface SkillItem {
  title: string;
  tag: string;
  desc: string;
  hue: string; // 卡片封面渐变色
  download?: string; // 可下载的 Skill 包地址（/skills/xxx.zip）
  doc?: string; // 使用说明页路由（/skill/xxx）
  author?: string; // 开源收录时署名原作者
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

export interface SkillGroup {
  name: string;
  note: string;
  categories: SkillCategory[];
}

export interface SkillsConfig {
  sectionLabel: string;
  title: string;
  subtitle: string;
  groups: SkillGroup[];
}

export const skillsConfig: SkillsConfig = {
  sectionLabel: "SKILL 与作品 / OPEN SOURCE",
  title: "世鑫 Skill 社区",
  subtitle:
    "两组内容：上架在订单来了 AI 工作台技能社区的「世鑫来了」门店经营系列，以及我日常运营在用的实战工具（含署名收录的开源作品）。全部免费——带「下载」按钮的可以直接打包带走，其余领取方式见页尾。",
  groups: [
    {
      name: "订单来了 AI 工作台技能社区",
      note: "世鑫来了系列 · 门店经营",
      categories: [
        {
          name: "OTA 运营",
          items: [
            {
              title: "携程竞争圈流失分析",
              tag: "流量分析",
              desc: "抓取竞争圈流失 TOP 数据，算出该截流谁、该防谁。",
              hue: "linear-gradient(135deg,#2563eb,#93c5fd)",
            },
            {
              title: "美团推广通监控",
              tag: "投放监控",
              desc: "消耗、余额、ROI 异常自动巡检，每天一份投放报告。",
              hue: "linear-gradient(135deg,#ea580c,#fdba74)",
            },
            {
              title: "携程金字塔流量监控",
              tag: "投放监控",
              desc: "采集金字塔投流数据，分时段判断投放节奏是否健康。",
              hue: "linear-gradient(135deg,#1d4ed8,#60a5fa)",
            },
            {
              title: "OTA 接盘体检诊断",
              tag: "渠道诊断",
              desc: "渠道优化前全项检查：图片、标签、旅拍、信息完整度。",
              hue: "linear-gradient(135deg,#4338ca,#818cf8)",
            },
          ],
        },
        {
          name: "新媒体内容",
          items: [
            {
              title: "酒店图片优化",
              tag: "视觉优化",
              desc: "手机随手拍一键变 OTA 级精修图，全平台直接上架。",
              hue: "linear-gradient(135deg,#7c3aed,#c4b5fd)",
            },
            {
              title: "酒店图片转视频",
              tag: "内容生产",
              desc: "静态房型图一键成片，零剪辑基础也能稳定更新视频。",
              hue: "linear-gradient(135deg,#0891b2,#67e8f9)",
            },
            {
              title: "影像艺术海报",
              tag: "视觉设计",
              desc: "一张照片生成 3:4 竖版艺术海报，真实质感 + 实验构图。",
              hue: "linear-gradient(135deg,#be185d,#f9a8d4)",
            },
            {
              title: "视觉素材经营",
              tag: "素材管理",
              desc: "图片库质检、各平台适配、图生视频，一套工作流管到底。",
              hue: "linear-gradient(135deg,#0f766e,#5eead4)",
            },
          ],
        },
        {
          name: "日常管理",
          items: [
            {
              title: "酒店周度经营报表",
              tag: "经营报表",
              desc: "一键生成周报：PMS 数据、渠道拆分、KPI，直接出看板。",
              hue: "linear-gradient(135deg,#334155,#94a3b8)",
            },
            {
              title: "酒店月度经营报表",
              tag: "经营报表",
              desc: "月度环比、渠道拆分、门店表现，Excel + 看板一次出齐。",
              hue: "linear-gradient(135deg,#1e40af,#93c5fd)",
            },
            {
              title: "PMS 上线诊断体检",
              tag: "上线诊断",
              desc: "给门店 PMS 配置做全项体检，输出可视化诊断报告。",
              hue: "linear-gradient(135deg,#b45309,#fcd34d)",
            },
            {
              title: "连锁门店日报巡检",
              tag: "连锁管理",
              desc: "集团多店经营数据一键汇总，分店渠道拆分看得清。",
              hue: "linear-gradient(135deg,#065f46,#6ee7b7)",
            },
          ],
        },
      ],
    },
    {
      name: "世鑫运营实战 Skill",
      note: "一线运营实战工具 · 可直接下载",
      categories: [
        {
          name: "图文与视觉",
          items: [
            {
              title: "小红书视觉总监",
              tag: "视觉设计",
              desc: "小红书图文的封面、排版、视觉方案，总监级把关。",
              hue: "linear-gradient(135deg,#be185d,#f9a8d4)",
              download: "/skills/xhs-visual-director.zip",
              doc: "/skill/xhs-visual-director",
            },
            {
              title: "民宿图片风格迁移",
              tag: "视觉优化",
              desc: "给一个参考民宿链接 + 自己的原图，把高级风格迁到自己图上。",
              hue: "linear-gradient(135deg,#0f766e,#5eead4)",
              download: "/skills/bnb-image-style-transfer.zip",
              doc: "/skill/bnb-image-style-transfer",
            },
            {
              title: "小红书笔记采集",
              tag: "素材采集",
              desc: "丢个小红书链接，笔记原文自动采集归档进知识库。",
              hue: "linear-gradient(135deg,#b45309,#fcd34d)",
              download: "/skills/xhs-collector.zip",
              doc: "/skill/xhs-collector",
            },
            {
              title: "GPT-image2 图像生成",
              tag: "图像生成",
              desc: "输入文字即可批量生成高质量图像，做图不求人。",
              hue: "linear-gradient(135deg,#7c3aed,#c4b5fd)",
              download: "/skills/gpt-image-2.zip",
              doc: "/skill/gpt-image-2",
              author: "ConardLi 创作",
            },
            {
              title: "社交卡片图文生成",
              tag: "图文排版",
              desc: "文章一键变成小红书图文组卡 + 公众号封面对。",
              hue: "linear-gradient(135deg,#be185d,#f9a8d4)",
              download: "/skills/guizang-social-card.zip",
              doc: "/skill/guizang-social-card",
              author: "归藏（op7418）创作",
            },
            {
              title: "精美网页文章",
              tag: "网页排版",
              desc: "把文章、PDF、链接变成可分享的精美单页网页长文。",
              hue: "linear-gradient(135deg,#334155,#94a3b8)",
              download: "/skills/beautiful-article.zip",
              doc: "/skill/beautiful-article",
              author: "ConardLi 创作",
            },
          ],
        },
        {
          name: "视频与演示",
          items: [
            {
              title: "民宿抖音视频剪辑",
              tag: "内容生产",
              desc: "参考风格分析到自动出片，民宿短视频全流程编排。",
              hue: "linear-gradient(135deg,#0891b2,#67e8f9)",
              download: "/skills/bnb-douyin-video-pipeline.zip",
              doc: "/skill/bnb-douyin-video-pipeline",
            },
            {
              title: "文旅宣传片 Skill",
              tag: "视频生成",
              desc: "一条指令生成文旅宣传短片，民宿内容利器。",
              hue: "linear-gradient(135deg,#0891b2,#67e8f9)",
            },
            {
              title: "网页视频演示",
              tag: "视频演示",
              desc: "把口播稿变成有电影感的网页视频演示，录屏即大片。",
              hue: "linear-gradient(135deg,#065f46,#6ee7b7)",
              download: "/skills/web-video-presentation.zip",
              doc: "/skill/web-video-presentation",
              author: "ConardLi 创作",
            },
          ],
        },
        {
          name: "公众号运营",
          items: [
            {
              title: "公众号发布流水线",
              tag: "私域运营",
              desc: "选题、写稿、配图到定时发布，全流程一条线跑完。",
              hue: "linear-gradient(135deg,#2563eb,#93c5fd)",
              download: "/skills/wechat-publish-pipeline.zip",
              doc: "/skill/wechat-publish-pipeline",
            },
            {
              title: "公众号自动发布",
              tag: "私域运营",
              desc: "公众号图文撰写与发布，连编辑器操作都包了。",
              hue: "linear-gradient(135deg,#1d4ed8,#60a5fa)",
              download: "/skills/wechat-mp-auto.zip",
              doc: "/skill/wechat-mp-auto",
            },
            {
              title: "公众号精美排版",
              tag: "排版美化",
              desc: "排版组件库一键渲染，文章秒变公众号精美版式。",
              hue: "linear-gradient(135deg,#4338ca,#818cf8)",
              download: "/skills/wechat-typography.zip",
              doc: "/skill/wechat-typography",
            },
            {
              title: "公众号文章一键发布",
              tag: "私域运营",
              desc: "Markdown 文章直接进公众号草稿箱，排版不丢。",
              hue: "linear-gradient(135deg,#16a34a,#86efac)",
              download: "/skills/wechat-article-publisher.zip",
              doc: "/skill/wechat-article-publisher",
              author: "开源社区 · MIT 协议",
            },
            {
              title: "公众号标题 Skill",
              tag: "私域运营",
              desc: "蒸馏 645 篇爆款文章，批量生成高点击标题。",
              hue: "linear-gradient(135deg,#16a34a,#86efac)",
              download: "/skills/gzh-title-strategist.zip",
              doc: "/skill/gzh-title-strategist",
              author: "刘聪NLP 创作",
            },
          ],
        },
        {
          name: "知识与效率",
          items: [
            {
              title: "提示词提炼器",
              tag: "AI 入门",
              desc: "把大白话需求提炼成 AI 听得懂的提示词，业主也能用。",
              hue: "linear-gradient(135deg,#065f46,#6ee7b7)",
              download: "/skills/prompt-craft.zip",
              doc: "/skill/prompt-craft",
            },
            {
              title: "课程视频转录",
              tag: "知识沉淀",
              desc: "课程视频批量转文字，直接沉淀进知识库做培训素材。",
              hue: "linear-gradient(135deg,#7c3aed,#c4b5fd)",
              download: "/skills/course-video-transcribe.zip",
              doc: "/skill/course-video-transcribe",
            },
            {
              title: "知识库检索助手",
              tag: "知识库",
              desc: "对着本地知识库目录提问，检索问答一手包办。",
              hue: "linear-gradient(135deg,#1e40af,#93c5fd)",
              download: "/skills/kb-retriever.zip",
              doc: "/skill/kb-retriever",
              author: "ConardLi 创作",
            },
          ],
        },
      ],
    },
  ],
};

// ============================================================
// 蓝皮书与课程（知识付费拉新）
// ============================================================

export interface WorkItem {
  title: string;
  tag: string;
  desc: string;
  status: string;
}

export interface BlueprintConfig {
  sectionLabel: string;
  title: string;
  subtitle: string;
  works: WorkItem[];
  ctaText: string;
  ctaNote: string;
}

export const blueprintConfig: BlueprintConfig = {
  sectionLabel: "蓝皮书与课程 / FREE",
  title: "《订单来了酒店民宿 AI 实操入门蓝皮书》",
  subtitle:
    "这是一本写给酒店、民宿从业小白的 AI 入门实操手册：不讲概念、不堆术语，只讲能立刻上手的做法——从用 AI 写好评回复、做定价策略，到搭建门店专属的 AI 工作流，一步步带你从 0 跑通真实经营场景。配套视频课程也在同步筹备中，帮你把 AI 真正用进日常运营。",
  works: [
    {
      title: "订单来了酒店民宿 AI 实操入门蓝皮书",
      tag: "蓝皮书",
      desc: "小白入门教学，免费开放领取。",
      status: "撰写中",
    },
    {
      title: "AI 实战视频课程",
      tag: "课程",
      desc: "蓝皮书配套视频课，手把手带练。",
      status: "筹备中",
    },
    {
      title: "订单来了 AI 酒店培训特聘讲师",
      tag: "培训",
      desc: "面向酒店民宿团队的 AI 实战培训与落地带练。",
      status: "进行中",
    },
  ],
  ctaText: "加微信，第一时间免费领取",
  ctaNote: "蓝皮书完稿、课程上线，都会第一时间在微信通知。",
};

// ============================================================
// 世鑫运营智能体（AI 分身）
// ============================================================

export interface AvatarPoint {
  title: string;
  desc: string;
}

export interface AvatarConfig {
  sectionLabel: string;
  title: string;
  subtitle: string;
  bannerLabel: string;
  intro: string;
  points: AvatarPoint[];
  boundaryLabel: string;
  boundaryTitle: string;
  boundaryItems: string[];
  ctaText: string;
  ctaNote: string;
}

export const avatarConfig: AvatarConfig = {
  sectionLabel: "运营智能体 / AI AGENT",
  title: "世鑫运营智能体",
  subtitle: "把我这几年踩过的坑、攒下的打法，装进一个 24 小时在线的 AI 顾问。",
  bannerLabel: "BETA · 元宝派定向邀约内测",
  intro:
    "「世鑫运营智能体」是以我的实战经验为知识底座打造的 AI 运营顾问：它读的是我真实的门店陪跑案例、平台规则拆解和 AI 落地方法，回答的是酒店民宿老板每天真实遇到的问题——流量下滑怎么办、差评怎么处理、AI 到底能接管哪些活。目前它正在腾讯元宝派内测，采用定向邀约制：想第一批体验，加我微信获取邀约名额。",
  points: [
    {
      title: "实战经验打底",
      desc: "知识库来自我 7 年酒旅一线、60+ 自营与代运营落地项目沉淀的真实打法，不是网上抄的通用答案。",
    },
    {
      title: "24 小时在线答疑",
      desc: "流量、定价、评分、内容、AI 工具选型……随时提问，随时回答，老板不用等谁有空。",
    },
    {
      title: "大白话，能落地",
      desc: "先讲痛点再给方案，不堆术语——听完就知道下一步干什么。",
    },
    {
      title: "持续进化",
      desc: "背后的知识库每天更新：平台新规、最新案例、实战打法持续增补——它给你的，始终是我当下最新的答案。",
    },
  ],
  boundaryLabel: "先说清楚 / BOUNDARY",
  boundaryTitle: "它能做什么，不能做什么",
  boundaryItems: [
    "它是 AI 顾问，不是我本人；涉及合作报价、项目定制，我会亲自私信跟你聊。",
    "它不编造数据和案例：讲得清的讲出处，没核实过的直接说不清楚，绝不硬编。",
    "它不承诺效果：只给方法、依据和适用条件，不打包票。",
    "客户的经营数据与商业信息不在它的服务范围内——它只讲方法，不碰隐私。",
  ],
  ctaText: "加微信，申请内测邀约",
  ctaNote: "内测期定向邀约免费，正式版将在元宝派作为知识付费功能开放。",
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
  qrImage: string;
  qrTitle: string;
  qrCaption: string;
}

export const footerConfig: FooterConfig = {
  heading: "让 AI 真正进入门店经营",
  columns: [
    {
      title: "合作联系",
      links: [
        "电话 17750928291",
        "微信 zhang916148898 · 福建 厦门",
        "免费 Skill / 蓝皮书：加微信领取",
        "订单来了 AI 工作台技能社区可安装",
        "订单来了 AI 酒店培训特聘讲师",
      ],
    },
    {
      title: "可交流主题",
      links: [
        "酒店民宿运营",
        "OTA 与内容营销",
        "酒店民宿 AI 转型",
        "AI 工作流",
        "1 人公司 + AI",
      ],
    },
  ],
  copyright: "© 2026 张世鑫 · 酒店民宿 AI 实战赋能",
  bottomLinks: [{ label: "回到顶部", href: "#hero" }],
  qrImage: "images/wechat-qr.jpg",
  qrTitle: "扫码加微信",
  qrCaption: "免费领蓝皮书 · 自研 Skill",
};
