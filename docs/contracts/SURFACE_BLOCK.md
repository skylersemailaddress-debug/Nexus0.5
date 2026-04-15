# SurfaceBlock Contract

```ts
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
  children?: SurfaceBlock[]
}
```

## Rules
- Chat remains persistent
- One active context surface at a time
- Blocks replace or transform rather than accumulate
- Watch blocks are temporary and inline
