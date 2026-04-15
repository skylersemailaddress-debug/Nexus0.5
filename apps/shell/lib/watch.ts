import { WatchSurface } from '../types/surface'

export function getWatchSurfaces(): WatchSurface[] {
  return [
    {
      id: 'code-watch',
      type: 'code',
      title: 'Code Watch',
      body: 'Live code generation, edits, and file changes appear here.',
      expanded: true,
    },
    {
      id: 'reasoning-watch',
      type: 'decision',
      title: 'Reasoning Watch',
      body: 'Tradeoffs, comparisons, and decisions appear here.',
      expanded: true,
    },
    {
      id: 'system-watch',
      type: 'system',
      title: 'System Watch',
      body: 'Runtime state, active mode, and execution signals appear here.',
      expanded: true,
    },
    {
      id: 'preview-watch',
      type: 'preview',
      title: 'Preview Watch',
      body: 'Rendered previews and result snapshots appear here.',
      expanded: true,
    },
  ]
}
