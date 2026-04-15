# Max Power Architecture Pack

This document defines the target architecture for turning Nexus0.5 from a strong adaptive shell prototype into a full-power operating system.

## Canonical UX shell

The current canonical user-facing route is:
- `/shell-polish-demo`

That route remains the UX target while the backend and execution layers are built underneath it.

## System goal

Nexus0.5 should function as an adaptive operating surface where:
- chat remains persistent
- state is durable and user-scoped
- memory compounds over time
- actions trigger real execution
- watch surfaces stream evidence of progress
- posture reflects real system state
- approvals, audit, and permissions exist for enterprise workflows

## Core architecture

```text
User Input
-> Session/Work Context
-> Durable State Store
-> Memory Store
-> Execution Orchestrator
-> Action Runners
-> Event Stream
-> Watch Surfaces
-> Posture Engine
-> Adaptive UI
```

## Main layers

### 1. Durable state layer
Purpose:
- persist current work
- persist session continuity
- track active, paused, completed work
- retain user-scoped application state across sessions and devices

Target backing:
- Postgres or equivalent durable store

Core entities:
- User
- Session
- WorkItem
- AppState
- Approval
- Event

### 2. Memory layer
Purpose:
- store facts, decisions, tasks, preferences, artifacts
- attach memory to sessions and work
- support search/retrieval
- feed continuity, briefing, and posture

Core entities:
- MemoryRecord
- MemoryLink
- SessionSummary
- WorkSummary

### 3. Execution layer
Purpose:
- turn UI actions into real work
- enqueue and run jobs
- emit progress events
- surface retries, success, and failure states

Core components:
- Action dispatcher
- Job queue
- Runner interface
- Execution state tracker
- Event publisher

### 4. Event stream layer
Purpose:
- provide live updates for watch surfaces
- show proof of work
- expose code, reasoning, system, and preview events

Event classes:
- code
- reasoning
- system
- preview
- risk
- approval
- error

### 5. Posture engine
Purpose:
- compute confidence and risk from real runtime conditions
- summarize why the system believes what it believes
- surface blockers, urgency, and readiness

Inputs:
- active work count
- paused work count
- recent failures
- pending approvals
- time pressure
- completion rate
- memory coverage

### 6. Enterprise layer
Purpose:
- support production release and operational trust

Requirements:
- authentication
- permissions and roles
- audit trail
- approval system
- observability
- retries and failure tracking
- test coverage
- deployment plan
- security hardening

## Phase plan

### Phase A — Durable system spine
Build:
- backend state schema
- backend memory schema
- server API contracts
- shell adapters

### Phase B — Execution system
Build:
- action dispatcher
- execution queue
- runner lifecycle states
- event emission model

### Phase C — Live UX integration
Build:
- watch surfaces fed by real events
- posture fed by real runtime state
- canonical route backed by actual data

### Phase D — Enterprise hardening
Build:
- auth
- permissions
- approvals
- audit logs
- observability
- tests
- deployment

## Current repo mapping

Already present:
- `apps/shell/types/state.ts`
- `apps/shell/lib/state.ts`
- `apps/shell/types/memory.ts`
- `apps/shell/lib/memory-store.ts`
- `apps/shell/lib/watch.ts`
- `apps/shell/lib/posture.ts`
- `apps/shell/pages/shell-polish-demo.tsx`

Still needed for max power:
- backend persistence service
- execution dispatcher
- runner interfaces
- event bus
- approval engine
- auth and permission model

## Execution layer contract (next build target)

Buttons and actions in the shell should resolve to this flow:

```text
UI Action
-> dispatchAction(action)
-> create ExecutionJob
-> runner starts
-> events emitted
-> watch surfaces update
-> posture recalculates
-> state persists
```

## Success criteria for full max power

Nexus0.5 can be called full-power only when:
- state persists durably across sessions and devices
- memory retrieval affects system behavior
- UI actions run real jobs
- watch surfaces stream real progress
- posture is runtime-driven
- approvals and audit exist
- auth and permissions exist
- tests and deployment are in place
