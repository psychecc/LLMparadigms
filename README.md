# LLM 范式工作台

面向产品经理的 AI 原生产品方法论工作台。核心目标是把一句产品 idea 推进为可演示 Demo、PRD、商业化/ROI、汇报与 PPT 大纲。

## 核心模块

- 范式地图：按「LLM 在产品里扮演什么角色」组织 toC 7 种 + toB 7 种范式。
- 产品主线：背景目标 → 范式与竞品 → Demo → PRD → 商业化/ROI → 汇报 → PPT。
- 产品工作台：每个产品沉淀契合度、诊断、商业模式、PRD、提案、Demo 与导出产物。
- AI 产品顾问：输入产品信息后，推荐范式、落地方向与注意事项。
- 竞品分析：分析单个竞品或多竞品横向对比，并支持导出 Markdown / Word / 图片。
- 模型设置：顶部右侧独立入口，支持 Claude、DeepSeek 等模型配置。

## toC 7 种范式

| # | 范式 | LLM 角色 | Demo 方向 |
|---|---|---|---|
| C1 | AI 聊天助手 | 对话者 | 多轮对话、上下文记忆、工具调用 |
| C2 | AI 副驾驶 | 协作者 | 嵌入工作流、选区改写、一键应用 |
| C3 | AI 代理 | 执行者 | 目标拆解、计划执行、人工确认 |
| C4 | AI 陪伴 | 陪伴者 | 角色卡、长期记忆、主动触达 |
| C5 | AI 推荐引擎 | 决策者 | 用户画像、候选召回、推荐解释、反馈闭环 |
| C6 | AI 创作工坊 | 创作者 | 模板、风格控制、多版本生成、局部重写 |
| C7 | AI 教练/导师 | 指导者 | 能力诊断、学习路径、练习任务、即时反馈 |

## toB 7 种范式

| # | 范式 | 说明 |
|---|---|---|
| B1 | 企业知识库问答 | 企业私域知识检索 + 可溯源回答 |
| B2 | 行业 SaaS 副驾 | 嵌入 CRM/HR/法务/客服等业务系统 |
| B3 | 智能客服 | 自动应答 + 坐席辅助 + 工单联动 |
| B4 | 流程自动化 Agent | 跨系统执行业务流程，关键动作人工审批 |
| B5 | 对话式数据分析 | 自然语言查数、生成图表与洞察 |
| B6 | 文档智能 | 抽取、审阅、比对、复核 |
| B7 | 企业 AI 平台 | 模型接入、Agent 编排、评测、监控与治理 |

## 模型配置

点击顶部右侧「模型设置」可配置：

- Provider：Claude / DeepSeek
- Model：Opus、Sonnet、Haiku、DeepSeek V4 Flash、DeepSeek V4 Pro 等
- API Key / Base URL
- 测试连接

前端不会直接请求模型厂商 API，而是通过 Express 代理访问 `/api`。如果浏览器本地未配置 key，会尝试使用服务端环境变量。

## 运行

```bash
npm install
npm run dev
```

默认端口：

- 前端 Vite：http://localhost:5173
- 后端 Express：http://localhost:8787

可选环境变量：

```bash
ANTHROPIC_API_KEY=sk-ant-...
DEEPSEEK_API_KEY=sk-...
```

## 构建

```bash
npm run build
```

## 文件结构

```text
server/
  index.js             # Express API 代理
  providers.js         # 模型供应商封装
src/
  paradigms.js         # 14 种范式元数据
  knowledge.js         # 范式方法论
  prdSeeds.js          # PRD 种子产品
  pages/               # 范式 Demo、顾问、竞品、工作台、主线
  components/          # ROI、BMC、红队评审、导出等组件
  styles.css           # 白底蓝色商务风视觉样式
```

## 当前视觉方向

白底、深灰文字、克莱因蓝/品牌蓝强调，整体偏 SaaS 后台和产品方法论工作台。卡片与模块以浅边框和留白建立层级，不使用明显投影。
