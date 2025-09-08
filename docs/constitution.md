# Spec-Lite Constitution

**Purpose:** Ship fast without repo bloat. One global guardrail + one file per feature.

## Rules

- **Single source of truth per feature:** `/specs/<id>-<slug>/spec.md` only.
- **Word cap:** spec body ≤ 900 words. Prefer bullets over prose.
- **Monotonic IDs:** `001`, `002`, …; branch as `feat/<id>-<slug>`.
- **Front-matter (YAML):**  
  `id, slug, scope, owner, summary, non_goals, success_metrics, risks, entities, touchpoints`.
- **PR gating:** PRs that touch `apps/` or `packages/` must include `Spec-ID: <id>` in the PR body and reference an existing `/specs/<id>-*/spec.md`.
- **Tests-touch rule:** If app or package code changes, at least one test/e2e/spec file must change too.
- **Graduation (optional):** If a feature truly grows, add **one** extra file referenced from the spec: `contracts/api.yaml` _or_ `data-model.sql`.
- **No parallel docs:** Don't maintain separate plan/research docs; put links under "Notes".

## Sections inside `spec.md`

1. **Intent (Analyst)** – problem, scope, non-goals.
2. **Plan (Architect/PM)** – tiny data/API sketch (inline).
3. **Dev Tasks (Dev/SM)** – atomic steps the agent will implement.
4. **Acceptance Tests (QA)** – checkable criteria.
5. **Notes / Links** – prior art, refs.
