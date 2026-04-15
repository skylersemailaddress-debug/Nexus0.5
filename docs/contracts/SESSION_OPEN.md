# Session Open Intelligence

## Modes
- onboarding
- briefing
- resume
- prep
- quiet

## Resolver
```ts
function resolveSessionMode(ctx) {
  if (ctx.isFirstSession) return 'onboarding'
  if (ctx.upcomingEventSoon) return 'prep'
  if (ctx.hasActiveWork) return 'briefing'
  if (ctx.hasPausedWork) return 'resume'
  return 'quiet'
}
```

## Output
- Blocks generated based on mode
- Actions always include:
  - resume
  - start new
  - show active
