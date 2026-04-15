import { SessionMode } from '../types/surface'

export function resolveSessionMode(ctx: any): SessionMode {
  if (ctx?.isFirstSession) return 'onboarding'
  if (ctx?.upcomingEventSoon) return 'prep'
  if (ctx?.hasActiveWork) return 'briefing'
  if (ctx?.hasPausedWork) return 'resume'
  return 'quiet'
}
