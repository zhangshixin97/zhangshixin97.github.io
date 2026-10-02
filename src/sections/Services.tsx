// 服务结构沿用 2026 年 9 月对外合作 V1；建议价格待商务确认，不在此公开。
const services = [
  {
    title: '酒店团队 AI 实战培训',
    audience: '适合酒店老板、店长、前厅与运营团队，以及组织商家培训的渠道伙伴。',
    problem: '团队知道 AI 有用，却不知道每天从哪件事开始。',
    outputs: ['围绕门店岗位的实操课程与演示', '可复用的提示词、模板和操作清单', '课后执行任务与复核要点'],
    format: '启蒙课、场景实操课、线下工作坊或企业专题培训；按对象与课题确定形式。',
    note: '涉及付费工具、账号或系统的练习，开课前确认使用条件。',
    action: '咨询团队培训',
  },
  {
    title: '企业 AI 诊断与经营顾问',
    audience: '适合已有门店的经营者、连锁运营团队和酒店代运营公司。',
    problem: '渠道、内容与日常运营问题很多，需要先找出值得优先解决的环节。',
    outputs: ['在约定范围内开展调研与访谈', '形成问题清单与 AI 落地路线图', '确认优先场景、责任分工与阶段验收指标'],
    format: '先确认问题、门店数与访谈范围；深度方案进入付费诊断，持续顾问支持另行约定。',
    note: '经营结果受门店产品、市场和执行影响，不承诺固定营收增长。',
    action: '咨询经营顾问',
  },
  {
    title: 'AI 工作流落地',
    audience: '适合希望把重复工作交给 AI、且能安排执行负责人配合的门店与企业。',
    problem: '工具装了不少，但任务仍靠人逐次操作，无法形成稳定流程。',
    outputs: ['梳理一个明确场景的输入、步骤与输出', '配置知识库、Skill 或工作流，并以样例验证', '交付使用说明、人工确认节点与异常处理办法'],
    format: '从一个场景试点；数据、账号权限和验收标准确认后按项目报价。',
    note: '可执行范围取决于系统能力与授权；价格、发布等关键动作保留人工确认。',
    action: '咨询工作流落地',
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" style={{ padding: 'clamp(64px, 8vw, 120px) 5vw', background: '#fff', scrollMarginTop: 88 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{ color: '#2563eb', fontSize: 12, letterSpacing: '0.15em' }}>合作服务 / SERVICES</p>
        <h2 id="services-title" style={{ fontSize: 'clamp(30px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.2, color: '#101418', margin: '20px 0' }}>从门店的问题，走到能执行的方案</h2>
        <p style={{ maxWidth: 760, lineHeight: 1.8, color: '#5a6472', marginBottom: 36 }}>先说清楚你要解决什么，再确定培训、顾问或工作流落地。每次合作都明确范围、交付物和双方需要配合的事项。</p>
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 24 }}>
          {services.map((service) => (
            <article key={service.title} style={{ display: 'flex', flexDirection: 'column', padding: 28, border: '1px solid #dce1e8', borderRadius: 20, background: '#f7f7f4' }}>
              <h3 style={{ fontSize: 23, fontWeight: 700, lineHeight: 1.4, marginBottom: 16 }}>{service.title}</h3>
              <p style={{ lineHeight: 1.8, color: '#5a6472' }}>{service.audience}</p>
              <p style={{ lineHeight: 1.8, margin: '16px 0' }}>{service.problem}</p>
              <h4 style={{ fontWeight: 700, marginBottom: 10 }}>合作交付</h4>
              <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 1.9 }}>
                {service.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
              <p style={{ lineHeight: 1.8, margin: '20px 0 12px' }}>{service.format}</p>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: '#5a6472', marginBottom: 24 }}>{service.note}</p>
              <a href="#footer" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 48, padding: '12px 16px', borderRadius: 12, background: '#2563eb', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>{service.action}</a>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 40, padding: 28, border: '1px solid #dce1e8', borderRadius: 16 }}>
          <h3 style={{ fontSize: 21, fontWeight: 700, marginBottom: 12 }}>渠道与企业合作</h3>
          <p style={{ lineHeight: 1.8 }}>支持联合售课、渠道包场和项目合作。先确定客户、首个课题或项目机会，再约定邀约、交付、线索归属与结算责任。</p>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginTop: 12, color: '#5a6472' }}>系统销售沿用原有政策，课程与项目单独确认范围和费用。企业实施与陪跑先做需求判断，再正式报价。</p>
        </div>
        <div style={{ marginTop: 40, padding: 28, background: '#eef3ff', borderRadius: 16 }}>
          <h3 style={{ fontSize: 21, fontWeight: 700, marginBottom: 12 }}>怎么开始合作</h3>
          <ol style={{ listStyle: 'decimal', paddingLeft: 22, lineHeight: 1.9 }}>
            <li>加微信，说明门店或团队情况，以及当前最想解决的一个问题。</li>
            <li>确认服务范围、所需资料与账号条件、交付物、周期和报价。</li>
            <li>按约定执行，并在约定节点复核交付结果。</li>
          </ol>
          <p style={{ fontSize: 14, lineHeight: 1.8, marginTop: 16 }}>报价按课时与人数、顾问服务范围或工作流复杂度确认。工具费用、差旅和后续维护是否包含，合作前逐项说清。</p>
        </div>
      </div>
    </section>
  );
}
