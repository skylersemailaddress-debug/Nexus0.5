import BlockRenderer from '../components/BlockRenderer'
import { getWatchSurfaces } from '../lib/watch'
import { getMockAppState } from '../lib/state'
import { computePosture } from '../lib/posture'
import { SurfaceBlock } from '../types/surface'

export default function ShellPolishDemo() {
  const state = getMockAppState()
  const posture = computePosture(state)

  const blocks: SurfaceBlock[] = [
    {
      id: 'hq-briefing',
      type: 'briefing',
      title: 'HQ Briefing',
      body: 'A cleaner, more product-like shell surface with adaptive blocks, posture, and visible watch surfaces.',
      tone: 'teal',
      priority: 1,
      state: 'expanded',
      confidence: posture.confidence,
      risk: posture.risk,
      watchSurfaces: getWatchSurfaces(),
      actions: [
        { id: 'continue', label: 'Continue work', intent: 'continue_work' },
        { id: 'brief-me', label: 'Brief me', intent: 'brief_me' }
      ]
    }
  ]

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0b1020',
        color: '#e8ecf3',
        fontFamily: 'Inter, Arial, sans-serif',
        padding: 32,
      }}
    >
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1.2, textTransform: 'uppercase', opacity: 0.7 }}>
              Nexus0.5
            </div>
            <h1 style={{ margin: '6px 0 0', fontSize: 34 }}>Adaptive Command Surface</h1>
          </div>
          <div
            style={{
              padding: '10px 14px',
              border: '1px solid rgba(255,255,255,0.14)',
              borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            Confidence {posture.confidence}% • Risk {posture.risk}
          </div>
        </header>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 20,
            alignItems: 'start',
          }}
        >
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 18,
              background: 'rgba(255,255,255,0.04)',
              padding: 20,
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            }}
          >
            <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 10 }}>Persistent chat anchor</div>
            <div
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 14,
                minHeight: 220,
                padding: 16,
                background: 'rgba(8,12,24,0.55)',
              }}
            >
              Chat remains fixed while the rest of the system adapts around it.
            </div>
          </div>

          <div
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 18,
              background: 'rgba(255,255,255,0.04)',
              padding: 20,
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            }}
          >
            <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 10 }}>Live posture summary</div>
            <div style={{ fontSize: 14, lineHeight: 1.6 }}>{posture.reasons.join(' • ')}</div>
          </div>
        </section>

        <section style={{ marginTop: 22 }}>
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 18,
              background: 'rgba(255,255,255,0.04)',
              padding: 20,
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            }}
          >
            <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 12 }}>Adaptive context surface</div>
            <BlockRenderer blocks={blocks} />
          </div>
        </section>
      </div>
    </main>
  )
}
