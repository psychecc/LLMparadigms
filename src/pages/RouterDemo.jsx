import { useState } from 'react'
import { DemoShell, Rich, Spinner } from '../components.jsx'
import { streamChat } from '../api.js'

const SAMPLES = [
  '我想 30 天入门 AI 产品经理',
  '我英语口语很弱，想三个月能开英文会议',
  '我想从 0 到 1 做一个 SaaS MVP，但不知道每天练什么',
]

export default function RouterDemo() {
  const [goal, setGoal] = useState('')
  const [level, setLevel] = useState('新手，有一点产品经验，但没有系统做过 AI 产品')
  const [plan, setPlan] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')

  const run = async (preset) => {
    const text = (preset ?? goal).trim()
    if (!text || busy) return
    setGoal(text)
    setPlan('')
    setErr('')
    setBusy(true)
    try {
      await streamChat({
        system:
          '你是一个 AI 教练/导师产品 demo。根据用户目标和当前水平，输出个性化训练路径。' +
          '必须包含：阶段目标、每日/每周练习、即时反馈机制、复盘指标、下一步追问。' +
          '不要写鸡汤，要像一个可执行的学习/训练产品。',
        messages: [{ role: 'user', content: `目标：${text}\n当前水平：${level}` }],
        onText: setPlan,
      })
    } catch (e) {
      setErr(e.message || String(e))
    } finally {
      setBusy(false)
    }
  }

  return (
    <DemoShell
      id="router"
      intro="教练/导师型产品把一次性问答变成持续成长系统：诊断水平、拆路径、布置练习、即时反馈、复盘进步。"
    >
      <div className="mentor-demo">
        <div className="recommend-grid">
          <label>
            <span>当前水平</span>
            <textarea value={level} onChange={(e) => setLevel(e.target.value)} />
          </label>
          <label>
            <span>成长目标</span>
            <textarea value={goal} placeholder="输入一个你想达成的目标..." onChange={(e) => setGoal(e.target.value)} />
          </label>
        </div>
        <div className="answer-bar">
          <button className="primary" disabled={busy || !goal.trim()} onClick={() => run()}>
            {busy ? '规划中…' : '生成训练路径'}
          </button>
        </div>
        {!plan && !busy && (
          <div className="chips">
            {SAMPLES.map((s) => <button key={s} onClick={() => run(s)}>{s}</button>)}
          </div>
        )}
        {busy && <Spinner label="诊断水平并生成路径" />}
        {err && <div className="error-box">⚠️ {err}</div>}
        {plan && (
          <div className="answer-card">
            <Rich text={plan} />
            <div className="answer-note">产品提示：真实教练产品要记录练习完成率、反馈质量、阶段测评和复盘结论，持续调整路径。</div>
          </div>
        )}
      </div>
    </DemoShell>
  )
}
