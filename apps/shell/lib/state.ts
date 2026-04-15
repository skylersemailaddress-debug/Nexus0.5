import { AppState, SessionSnapshot } from '../types/state'

export function getMockAppState(): AppState {
  return {
    sessionsStarted: 3,
    upcomingEventSoon: false,
    workItems: [
      {
        id: '1',
        title: 'Launch plan draft',
        status: 'active',
        updatedAt: new Date().toISOString(),
        summary: 'Drafting initial launch plan'
      },
      {
        id: '2',
        title: 'Investor briefing',
        status: 'paused',
        updatedAt: new Date().toISOString(),
        summary: 'Paused before final slides'
      }
    ]
  }
}

export function getCurrentSessionSnapshot(state: AppState): SessionSnapshot {
  return {
    isFirstSession: state.sessionsStarted === 0,
    upcomingEventSoon: !!state.upcomingEventSoon,
    hasActiveWork: state.workItems.some(w => w.status === 'active'),
    hasPausedWork: state.workItems.some(w => w.status === 'paused')
  }
}
