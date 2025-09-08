---
id: '001'
slug: 'practice-blocks'
scope: ['apps/web']
owner: 'Jonte'
summary: 'Users can create, edit and run Practice Blocks with timers.'
non_goals: ['native app packaging', 'social features']
success_metrics:
  - 'Create-to-first-session < 90s (p50)'
  - '≥70% users complete setup'
risks: ['timer drift in background', 'schema creep']
entities: ['User', 'PracticeBlock', 'PracticeEvent']
touchpoints: ['tables: practice_blocks, practice_events']
---

## Intent

Add minimal Practice Blocks to My Practice: name, duration, goal; list + run with a simple timer.

## Plan

Data (inline):

```sql
CREATE TABLE IF NOT EXISTS practice_blocks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id),
  name text not null,
  minutes int not null check (minutes between 1 and 180),
  goal text,
  created_at timestamptz default now()
);
```

No external API; direct client→DB via Supabase. Timer uses requestAnimationFrame + monotonic start time.

## Dev Tasks

- Form scaffold (name, minutes, goal) with zod validation
- Insert via Supabase + optimistic UI
- Timer hook with rAF; drift check against Date.now()
- List + empty/error states
- Vitest: validation & timer drift; Playwright: happy path

## Acceptance Tests

- Create→appears in list
- Minutes validation (1–180) blocks submit
- Timer counts down within ±1s/min in active tab

## Notes / Links

Prior art: Linear's minimal create pattern.
