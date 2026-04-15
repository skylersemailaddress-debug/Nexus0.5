import { PersistentStateEnvelope, MemoryRecord, SessionRecord } from '../types/memory'

const STORAGE_KEY = 'nexus.memory.v1'

function now() {
  return new Date().toISOString()
}

export function loadMemory(): PersistentStateEnvelope {
  if (typeof window === 'undefined') {
    return { version: 1, sessions: [], memories: [] }
  }

  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return { version: 1, sessions: [], memories: [] }

  try {
    return JSON.parse(raw)
  } catch {
    return { version: 1, sessions: [], memories: [] }
  }
}

export function saveMemory(state: PersistentStateEnvelope) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function createMemory(partial: Omit<MemoryRecord, 'id' | 'createdAt' | 'updatedAt'>): MemoryRecord {
  return {
    ...partial,
    id: crypto.randomUUID(),
    createdAt: now(),
    updatedAt: now(),
  }
}

export function addMemory(record: MemoryRecord) {
  const state = loadMemory()
  state.memories.push(record)
  saveMemory(state)
}

export function listMemories(): MemoryRecord[] {
  return loadMemory().memories
}

export function createSession(title: string): SessionRecord {
  return {
    id: crypto.randomUUID(),
    title,
    createdAt: now(),
    updatedAt: now(),
    memoryIds: [],
  }
}

export function addSession(session: SessionRecord) {
  const state = loadMemory()
  state.sessions.push(session)
  saveMemory(state)
}

export function listSessions(): SessionRecord[] {
  return loadMemory().sessions
}
