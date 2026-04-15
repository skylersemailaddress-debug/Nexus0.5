import BlockRenderer from '../components/BlockRenderer'
import { getMockBlocks } from '../lib/mock'

export default function Home() {
  const blocks = getMockBlocks()

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Nexus0.5</h1>
      <p>Adaptive operational intelligence OS</p>

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
