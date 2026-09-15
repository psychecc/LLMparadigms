// 范式元数据。category: 'toC' | 'toB'。id 映射路由 + demo 页。
export const PARADIGMS = [
  // ===================== toC =====================
  {
    id: 'chat', category: 'toC', n: 'C1', icon: '💬', title: 'AI 聊天助手', en: 'Chat Assistant', tag: '对话者',
    blurb: '用户直接和 AI 对话，AI 是唯一的交互对象；价值来自通用能力、响应质量、上下文记忆和工具调用。',
    role: '对话者',
    examples: ['ChatGPT', 'Claude', 'Kimi', '豆包'],
    method: '核心不是“做一个聊天框”，而是围绕任务入口、上下文管理、记忆、工具调用和安全边界建立可持续体验。',
    demoHint: '多轮问答、历史上下文、快捷问题、工具调用状态。',
    accent: '#16845a',
  },
  {
    id: 'copilot', category: 'toC', n: 'C2', icon: '✍️', title: 'AI 副驾驶', en: 'Copilot', tag: '协作者',
    blurb: 'AI 嵌入用户已有工作流，理解当前上下文，辅助完成写作、搜索、编辑、决策等具体任务。',
    role: '协作者',
    examples: ['GitHub Copilot', 'Notion AI', '浏览器 AI 侧栏'],
    method: '副驾驶必须“贴着原流程走”：触发点、上下文采集、一键应用、撤销/对比和降级策略比模型本身更关键。',
    demoHint: '选区改写、上下文建议、一键应用、撤销与对比。',
    accent: '#2aa66b',
  },
  {
    id: 'agent', category: 'toC', n: 'C3', icon: '🤖', title: 'AI 代理', en: 'Agent', tag: '执行者',
    blurb: '用户只给目标，AI 自主拆解计划、调用工具、分步执行，最终交付结果，人退到验收位。',
    role: '执行者',
    examples: ['Manus', 'Deep Research', 'Devin'],
    method: 'Agent 的产品重点是计划可见、工具权限、确认门、失败重试、成本预算与过程可观测，而不是单次回答质量。',
    demoHint: '目标输入、计划拆解、逐步执行、人工确认门。',
    accent: '#6941c6',
  },
  {
    id: 'companion', category: 'toC', n: 'C4', icon: '❤️', title: 'AI 陪伴', en: 'Companion', tag: '陪伴者',
    blurb: 'AI 提供情感支持、社交互动、角色扮演和长期关系维护，用户购买的是关系感而非效率。',
    role: '陪伴者',
    examples: ['Character.AI', 'Replika', '星野'],
    method: '陪伴型产品的命根是人设一致性、长期记忆、主动触达、关系阶段和安全边界，付费点通常围绕情感关系设计。',
    demoHint: '角色卡、长期记忆、主动消息、关系状态。',
    accent: '#e31b54',
  },
  {
    id: 'answer', category: 'toC', n: 'C5', icon: '🔍', title: 'AI 推荐引擎', en: 'Recommendation Engine', tag: '决策者',
    blurb: 'AI 基于用户画像、行为、偏好和场景约束，做个性化推荐、解释理由，并持续学习反馈。',
    role: '决策者',
    examples: ['抖音推荐', '小红书 AI 助手', 'Perplexity 购物/研究推荐'],
    method: '推荐引擎不是“猜你喜欢”的文案包装，而是偏好采集、候选召回、排序解释、反馈闭环和冷启动策略。',
    demoHint: '偏好输入、推荐列表、理由解释、反馈学习。',
    accent: '#58b982',
  },
  {
    id: 'create', category: 'toC', n: 'C6', icon: '🎨', title: 'AI 创作工坊', en: 'Creation Studio', tag: '创作者',
    blurb: 'AI 生成图片、视频、音乐、文案、PPT、3D 等内容，用户通过模板、参数和迭代动作打磨产出。',
    role: '创作者',
    examples: ['Midjourney', 'Suno', 'Pika', 'Gamma'],
    method: '创作工坊要定义产出物结构、可编辑粒度、版本历史、风格模板、批量生成和导出协作链路。',
    demoHint: '模板选择、风格控制、多版本生成、局部重写。',
    accent: '#b54708',
  },
  {
    id: 'router', category: 'toC', n: 'C7', icon: '🎓', title: 'AI 教练/导师', en: 'Coach / Mentor', tag: '指导者',
    blurb: 'AI 为用户提供个性化学习路径、行为反馈、阶段目标和练习任务，把一次性问答变成持续成长系统。',
    role: '指导者',
    examples: ['Duolingo Max', '可汗学院 AI 助教', '编程/健身 AI 教练'],
    method: '教练型产品要围绕诊断、路径、练习、反馈、复盘和成就体系设计，核心指标是持续进步而非单次回答。',
    demoHint: '能力诊断、学习路径、练习任务、即时反馈。',
    accent: '#039855',
  },

  // ===================== toB =====================
  {
    id: 'rag', category: 'toB', n: 'B1', icon: '🗄️', title: '企业知识库问答', en: 'Enterprise RAG', tag: '让企业文档可问答',
    blurb: '把散落的企业文档变成可问答、可溯源的知识中枢。代表：Glean、各类知识中台。', accent: '#5dd6c4',
  },
  {
    id: 'bizcopilot', category: 'toB', n: 'B2', icon: '🧑‍💼', title: '行业 SaaS 副驾', en: 'Vertical Copilot', tag: '嵌入业务系统',
    blurb: '深度嵌入 CRM/HR/法务等业务系统的垂直副驾，读写业务对象。代表：销售/客服 Copilot。', accent: '#6fcf9f',
  },
  {
    id: 'support', category: 'toB', n: 'B3', icon: '🎧', title: '智能客服', en: 'AI Support', tag: '自动应答+坐席辅助',
    blurb: '知识驱动的自动应答 + 坐席实时辅助，可溯源、可转人工。代表：各家 AI 客服。', accent: '#82e0aa',
  },
  {
    id: 'bizagent', category: 'toB', n: 'B4', icon: '⚙️', title: '流程自动化 Agent', en: 'Process Agent', tag: '跨系统执行业务流程',
    blurb: '给目标，Agent 跨系统拆解执行业务流程，不可逆动作人工审批。代表：AI 运营/RPA。', accent: '#c39bd3',
  },
  {
    id: 'bi', category: 'toB', n: 'B5', icon: '📈', title: '对话式数据分析', en: 'Conversational BI', tag: '自然语言查数出报表',
    blurb: '自然语言转 SQL、自助查数出报表，降低看数门槛。代表：各家 NL2SQL / AI BI。', accent: '#ffc777',
  },
  {
    id: 'docintel', category: 'toB', n: 'B6', icon: '📑', title: '文档智能', en: 'Document Intelligence', tag: '抽取·审阅·比对',
    blurb: '对合同/发票/报告做要素抽取、风险审阅、版本比对，人审复核闭环。代表：合同智审。', accent: '#ff8fab',
  },
  {
    id: 'platform', category: 'toB', n: 'B7', icon: '🏗️', title: '企业 AI 平台', en: 'LLMOps Platform', tag: '模型与 Agent 治理',
    blurb: '统一模型接入、Agent 编排、评测监控与护栏治理的企业 AI 中台。代表：各家 LLMOps。', accent: '#f1948a',
  },
]

export const byId = (id) => PARADIGMS.find((p) => p.id === id)
export const byCategory = (cat) => PARADIGMS.filter((p) => p.category === cat)
