import BlockRenderer from '../components/BlockRenderer'
import { getWatchSurfaces } from '../lib/watch'
import { SurfaceBlock } from '../types/surface'

export default function WatchDemo() {
  const watchSurfaces = getWatchSurfaces()

  const blocks: SurfaceBlock[] = [
    {
      id: 'watch-demo',
      type: 'briefing',
      title: 'Watch Surface Demo',
      body: 'This page demonstrates code, reasoning, system, and preview watch surfaces.',
      tone: 'teal',
      priority: 1,
      state: 'expanded',
      confidence: 90,
      risk: 'low',
      watchSurfaces,
      actions: [
        { id: 'inspect-code', label: 'Inspect code', intent: 'inspect_code' },
        { id: 'review-reasoning', label: 'Review reasoning', intent: 'review_reasoning' }
      ]
    }
  ]

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Nexus0.5</h1>
      <p>Watch surface visibility demo</p>

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
