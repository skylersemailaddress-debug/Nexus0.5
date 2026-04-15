import { useEffect, useState } from 'react'
import { listWatchEvents } from '../lib/watch-events'
import { dispatchAction } from '../lib/execution'

export default function WatchLiveDemo() {
  const [events, setEvents] = useState<any[]>([])

  function refresh() {
    setEvents(listWatchEvents())
  }

  useEffect(() => {
    refresh()
    const i = setInterval(refresh, 500)
    return () => clearInterval(i)
  }, [])

  function handleRun() {
    dispatchAction('live_watch_demo')
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Live Watch Surfaces</h1>
      <button onClick={handleRun}>Run Action</button>

      <ul style={{ marginTop: 16 }}>
        {events.map(e => (
          <li key={e.id}>
            <strong>[{e.type}] {e.title}</strong> — {e.body}
          </li>
        ))}
      </ul>
    </main>
  )
}
