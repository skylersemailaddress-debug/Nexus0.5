export type SurfaceBlockType =
  | 'welcome'
  | 'example'
  | 'briefing'
  | 'resume'
  | 'prep'
  | 'plan'
  | 'execution'
  | 'result'
  | 'decision'
  | 'watch'
  | 'risk'
  | 'confidence'

export type SurfaceBlockTone =
  | 'blue'
  | 'purple'
  | 'green'
  | 'amber'
  | 'red'
  | 'teal'
  | 'glass'

export interface SurfaceAction {
  id: string
  label: string
  intent: string
}

export interface WatchSurface {
  id: string
  type: 'code' | 'decision' | 'system' | 'preview' | 'data'
  title: string
  body?: string
  expanded?: boolean
}

export interface SurfaceBlock {
  id: string
  type: SurfaceBlockType
  title: string
  body?: string
  tone: SurfaceBlockTone
  priority: number
  state: 'collapsed' | 'expanded' | 'inline'
  confidence?: number
  risk?: 'low' | 'medium' | 'high'
  actions?: SurfaceAction[]
  watchSurfaces?: WatchSurface[]
  children?: SurfaceBlock[]
}

export type SessionMode = 'onboarding' | 'briefing' | 'resume' | 'prep' | 'quiet'
