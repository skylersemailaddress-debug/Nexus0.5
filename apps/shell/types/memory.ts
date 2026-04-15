export type MemoryKind = 'fact' | 'decision' | 'task' | 'preference' | 'artifact'

export interface MemoryRecord {
  id: string
  kind: MemoryKind
  title: string
  content: string
  tags: string[]
  source?: string
  createdAt: string
  updatedAt: string
  importance: number
}

export interface SessionRecord {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  summary?: string
  activeWorkId?: string
  memoryIds: string[]
}

export interface PersistentStateEnvelope {
  version: number
  sessions: SessionRecord[]
  memories: MemoryRecord[]
}
