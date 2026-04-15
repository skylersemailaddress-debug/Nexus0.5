import { SurfaceBlock } from '../types/surface'

export function getMockBlocks(): SurfaceBlock[] {
  return [
    {
      id: 'welcome',
      type: 'welcome',
      title: 'Welcome to Nexus0.5',
      body: 'This is your adaptive operational interface.',
      tone: 'blue',
      priority: 1,
      state: 'expanded',
      confidence: 100,
    },
    {
      id: 'brief',
      type: 'briefing',
      title: 'Briefing',
      body: 'You have active work and pending decisions.',
      tone: 'teal',
      priority: 2,
      state: 'expanded',
      confidence: 85,
      risk: 'low',
    },
  ]
}
