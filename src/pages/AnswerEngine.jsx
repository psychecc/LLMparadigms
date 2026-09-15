import { useState } from 'react'
import { DemoShell, Rich, Spinner } from '../components.jsx'
import { streamChat } from '../api.js'

const SAMPLES = [
  '我最近想提升睡眠质量，预算 1000 元以内，推荐一个可执行方案',
  '我是新手产品经理，想系统学习 AI 产品设计，应该怎么选课程和工具？',
  '周末在上海两天一夜，想轻松、有体验感、不要太赶，帮我推荐行程',
]

export default function AnswerEngine() {
  const [profile, setProfile] = useState('一线城市职场人，时间碎片化，愿意为省时间和高质量建议付费')
  const [goal, setGoal] = useState('')
  const [out, setOut] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')

  const run = async (preset) => {
    const text = (preset ?? goal).trim()
    if (!text || busy) return
    setGoal(text)
    setOut('')
    setErr('')
    setBusy(true)
    try {
      await streamChat({
        system:
          '你是一个 AI 推荐引擎产品 demo。根据用户画像、目标和约束，输出结构化推荐。' +
          '必须包含：1) 推荐列表 2) 每个推荐的匹配理由 3) 适用/不适用人群 4) 反馈按钮应该如何影响下一轮排序。' +
          '回答要像产品界面里的推荐结果，不要写成泛泛建议。',
        messages: [
          {
            role: 'user',
            content: `用户画像：${profile}\n\n用户目标/约束：${text}`,
          },
        ],
        onText: setOut,
      })
    } catch (e) {
      setErr(e.message || String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <DemoShell
      id="answer"
      intro="AI 不只是回答问题，而是在理解画像、偏好和约束后做个性化推荐。关键不在生成文本，而在召回、排序、解释和反馈闭环。"
    >
      <div className="answer">
        <div className="recommend-grid">
          <label>
            <span>用户画像</span>
            <textarea value={profile} onChange={(e) => setProfile(e.target.value)} />
          </label>
          <label>
            <span>推荐目标 / 场景约束</span>
            <textarea
              value={goal}
              placeholder="输入你想让 AI 推荐的场景..."
              onChange={(e) => setGoal(e.target.value)}
            />
          </label>
        </div>
        <div className="answer-bar">
          <button className="primary" disabled={busy || !goal.trim()} onClick={() => run()}>
            {busy ? '推荐中…' : '生成推荐'}
          </button>
        </div>
        {!out && !busy && (
          <div className="chips">
            {SAMPLES.map((s) => (
              <button key={s} onClick={() => run(s)}>{s}</button>
            ))}
          </div>
        )}
        {busy && <Spinner label="分析画像、约束与推荐候选" />}
        {err && <div className="error-box">⚠️ {err}</div>}
        {out && (
          <div className="answer-card">
            <Rich text={out} />
            <div className="answer-note">产品提示：真实推荐引擎应把“喜欢 / 不喜欢 / 已购买 / 太贵 / 不相关”等反馈写回排序模型。</div>
          </div>
        )}
      </div>
    </DemoShell>
  )
}
