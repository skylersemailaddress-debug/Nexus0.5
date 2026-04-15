import { AppState } from '../types/state'

export type RiskLevel = 'low' | 'medium' | 'high'

export interface Posture {
  confidence: number
  risk: RiskLevel
  reasons: string[]
}

export function computePosture(state: AppState): Posture {
  const activeCount = state.workItems.filter(w => w.status === 'active').length
  const pausedCount = state.workItems.filter(w => w.status === 'paused').length
  const completedCount = state.workItems.filter(w => w.status === 'completed').length

  let confidence = 70
  const reasons: string[] = []

  if (activeCount > 0) {
    confidence += 10
    reasons.push('Active work is in progress')
  }

  if (completedCount > 0) {
    confidence += 10
    reasons.push('Completed work increases certainty')
  }

  if (pausedCount > 0) {
    confidence -= 5
    reasons.push('Paused work introduces follow-up risk')
  }

  if (state.upcomingEventSoon) {
    confidence -= 10
    reasons.push('Upcoming event raises urgency and coordination pressure')
  }

  confidence = Math.max(35, Math.min(95, confidence))

  let risk: RiskLevel = 'low'
  if (state.upcomingEventSoon || pausedCount >= 2) {
    risk = 'medium'
  }
  if ((state.upcomingEventSoon && pausedCount > 0) || pausedCount >= 3) {
    risk = 'high'
  }

  return { confidence, risk, reasons }
}
