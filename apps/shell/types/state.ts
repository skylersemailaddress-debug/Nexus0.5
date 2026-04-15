export type WorkStatus = 'active' | 'paused' | 'completed'

export interface WorkItem {
  id: string
  title: string
  status: WorkStatus
  updatedAt: string
  summary?: string
}

export interface SessionSnapshot {
  isFirstSession: boolean
  upcomingEventSoon: boolean
  hasActiveWork: boolean
  hasPausedWork: boolean
}

export interface AppState {
  sessionsStarted: number
  workItems: WorkItem[]
  upcomingEventSoon?: boolean
}
