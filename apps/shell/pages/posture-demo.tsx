import BlockRenderer from '../components/BlockRenderer'
import { getMockAppState } from '../lib/state'
import { computePosture } from '../lib/posture'
import { SurfaceBlock } from '../types/surface'

export default function PostureDemo() {
  const state = getMockAppState()
  const posture = computePosture(state)

  const blocks: SurfaceBlock[] = [
    {
      id: 'posture-block',
      type: 'briefing',
      title: 'System Posture',
      body: posture.reasons.join(' • '),
      tone: posture.risk === 'high' ? 'red' : posture.risk === 'medium' ? 'yellow' : 'teal',
      priority: 1,
      state: 'expanded',
      confidence: posture.confidence,
      risk: posture.risk,
      actions: [
        { id: 'review-risk', label: 'Review risk drivers', intent: 'review_risk' },
        { id: 'continue-work', label: 'Continue execution', intent: 'continue_execution' }
      ]
    }
  ]

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Nexus0.5</h1>
      <p>Computed confidence and risk posture</p>

      <section style={{ marginTop: 24 }}>
        <h2>Context Surface</h2>
        <BlockRenderer blocks={blocks} />
      </section>
    </main>
  )
}
