export type ExecutionStatus = 'queued' | 'running' | 'completed' | 'failed'

export interface ExecutionJob {
  id: string
  action: string
  status: ExecutionStatus
  createdAt: string
  updatedAt: string
  logs: string[]
}

const JOBS_KEY = 'nexus.jobs.v1'

function now() {
  return new Date().toISOString()
}

function loadJobs(): ExecutionJob[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(JOBS_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function saveJobs(jobs: ExecutionJob[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(JOBS_KEY, JSON.stringify(jobs))
}

export function dispatchAction(action: string): ExecutionJob {
  const job: ExecutionJob = {
    id: crypto.randomUUID(),
    action,
    status: 'queued',
    createdAt: now(),
    updatedAt: now(),
    logs: [`Action received: ${action}`],
  }

  const jobs = loadJobs()
  jobs.push(job)
  saveJobs(jobs)

  runJob(job.id)

  return job
}

function updateJob(id: string, updater: (job: ExecutionJob) => ExecutionJob) {
  const jobs = loadJobs()
  const updated = jobs.map(j => (j.id === id ? updater(j) : j))
  saveJobs(updated)
}

function runJob(id: string) {
  updateJob(id, j => ({ ...j, status: 'running', updatedAt: now(), logs: [...j.logs, 'Job started'] }))

  setTimeout(() => {
    updateJob(id, j => ({
      ...j,
      status: 'completed',
      updatedAt: now(),
      logs: [...j.logs, 'Job completed successfully'],
    }))
  }, 1500)
}

export function listJobs(): ExecutionJob[] {
  return loadJobs()
}
