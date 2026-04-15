export type WatchEventType = 'code' | 'reasoning' | 'system' | 'preview'

export interface WatchEvent {
  id: string
  type: WatchEventType
  title: string
  body: string
  createdAt: string
}

const WATCH_EVENTS_KEY = 'nexus.watch-events.v1'

function now() {
  return new Date().toISOString()
}

function loadEvents(): WatchEvent[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(WATCH_EVENTS_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function saveEvents(events: WatchEvent[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(WATCH_EVENTS_KEY, JSON.stringify(events))
}

export function emitWatchEvent(type: WatchEventType, title: string, body: string) {
  const events = loadEvents()
  events.unshift({
    id: crypto.randomUUID(),
    type,
    title,
    body,
    createdAt: now(),
  })
  saveEvents(events.slice(0, 100))
}

export function listWatchEvents(): WatchEvent[] {
  return loadEvents()
}

export function clearWatchEvents() {
  saveEvents([])
}
