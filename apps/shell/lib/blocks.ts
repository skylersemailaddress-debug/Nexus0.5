import { SurfaceBlock, SessionMode } from '../types/surface'

export function getBlocksForMode(mode: SessionMode): SurfaceBlock[] {
  switch (mode) {
    case 'onboarding':
      return [
        {
          id: 'welcome',
          type: 'welcome',
          title: 'Welcome to Nexus0.5',
          body: 'I help you plan, execute, brief, and follow through across ongoing work.',
          tone: 'blue',
          priority: 1,
          state: 'expanded',
          confidence: 100,
          actions: [
            { id: 'start', label: 'Start new work', intent: 'start_new' },
            { id: 'examples', label: 'See examples', intent: 'see_examples' }
          ]
        },
        {
          id: 'examples',
          type: 'example',
          title: 'Example blocks',
          body: 'Plan a launch, draft a briefing, review code, prep for a meeting, compare options, or build a tool.',
          tone: 'purple',
          priority: 2,
          state: 'expanded',
          confidence: 100,
        }
      ]
    case 'prep':
      return [
        {
          id: 'prep',
          type: 'prep',
          title: 'Upcoming event',
          body: 'You have something coming up soon. I can prepare the summary, materials, and talk track.',
          tone: 'amber',
          priority: 1,
          state: 'expanded',
          confidence: 82,
          risk: 'medium',
          actions: [
            { id: 'prepare', label: 'Prepare me', intent: 'prepare' },
            { id: 'materials', label: 'Show materials', intent: 'show_materials' }
          ]
        }
      ]
    case 'resume':
      return [
        {
          id: 'resume',
          type: 'resume',
          title: 'Resume previous work',
          body: 'You have paused work ready to continue.',
          tone: 'teal',
          priority: 1,
          state: 'expanded',
          confidence: 88,
          risk: 'low',
          actions: [
            { id: 'continue', label: 'Pick up where we left off', intent: 'resume' }
          ]
        }
      ]
    case 'briefing':
      return [
        {
          id: 'briefing',
          type: 'briefing',
          title: 'Briefing',
          body: 'Here is what matters right now: active work, pending items, and suggested next actions.',
          tone: 'teal',
          priority: 1,
          state: 'expanded',
          confidence: 86,
          risk: 'low',
          actions: [
            { id: 'resume', label: 'Pick up where we left off', intent: 'resume' },
            { id: 'new', label: 'Start something new', intent: 'start_new' }
          ],
          watchSurfaces: [
            { id: 'decision-watch', type: 'decision', title: 'Decision Watch', body: 'Pending decisions and tradeoffs will appear here.' }
          ]
        }
      ]
    case 'quiet':
    default:
      return [
        {
          id: 'quiet',
          type: 'briefing',
          title: 'Ready',
          body: 'No urgent items detected. Start new work or ask for a briefing.',
          tone: 'glass',
          priority: 1,
          state: 'expanded',
          confidence: 75,
          risk: 'low',
          actions: [
            { id: 'new', label: 'Start new work', intent: 'start_new' },
            { id: 'brief', label: 'Brief me', intent: 'brief_me' }
          ]
        }
      ]
  }
}
