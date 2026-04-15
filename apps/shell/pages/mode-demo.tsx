import BlockRenderer from '../components/BlockRenderer'
import { resolveSessionMode } from '../lib/session'
import { getBlocksForMode } from '../lib/blocks'

function getContextFromQuery() {
  return {
    isFirstSession: false,
    upcomingEventSoon: false,
    hasActiveWork: true,
    hasPausedWork: false,
  }
}

export default function ModeDemo() {
  const ctx = getContextFromQuery()
  const mode = resolveSessionMode(ctx)
  const blocks = getBlocksForMode(mode)

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Nexus0.5</h1>
      <p>Adaptive operational intelligence OS</p>
      <p><strong>Active mode:</strong> {mode}</p>

      <section style={{ marginTop: 24 }}>
        <h2>Chat</h2>
        <div style={{ border: '1px solid #ccc', padding: 12 }}>
          Chat surface (persistent anchor)
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Context Surface</h2>
        <BlockRenderer blocks={blocks} />
      </section>
    </main>
  )
}
