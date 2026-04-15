import { useEffect, useState } from 'react'
import { dispatchAction, listJobs } from '../lib/execution'

export default function ExecutionDemo() {
  const [jobs, setJobs] = useState<any[]>([])

  function refresh() {
    setJobs(listJobs())
  }

  useEffect(() => {
    refresh()
    const i = setInterval(refresh, 500)
    return () => clearInterval(i)
  }, [])

  function handleRun() {
    dispatchAction('demo_action')
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Execution Layer</h1>
      <button onClick={handleRun}>Run Action</button>

      <ul style={{ marginTop: 16 }}>
        {jobs.map(j => (
          <li key={j.id}>
            <strong>{j.action}</strong> — {j.status}
          </li>
        ))}
      </ul>
    </main>
  )
}
