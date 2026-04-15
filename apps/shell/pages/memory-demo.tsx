import { useEffect, useState } from 'react'
import { addMemory, createMemory, listMemories } from '../lib/memory-store'

export default function MemoryDemo() {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    setMemories(listMemories())
  }, [])

  function handleAdd() {
    const record = createMemory({
      kind: 'fact',
      title: 'User preference',
      content: 'User prefers adaptive UI with visible reasoning',
      tags: ['preference'],
      importance: 80,
    })

    addMemory(record)
    setMemories(listMemories())
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Memory System</h1>
      <button onClick={handleAdd}>Add Memory</button>

      <ul style={{ marginTop: 16 }}>
        {memories.map((m: any) => (
          <li key={m.id}>
            <strong>{m.title}</strong> — {m.content}
          </li>
        ))}
      </ul>
    </main>
  )
}
