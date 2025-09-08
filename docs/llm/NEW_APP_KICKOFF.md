# New-App Kickoff (for LLMs & humans)

**Goal:** Prepare this starter for a _new app_ using small, reversible diffs.

## New App from Template (choose mode):

**Monorepo (portfolio)** – new app inside this repo

1. `pnpm i`
2. `pnpm tsx scripts/new-app.ts`
3. Fill `docs/product/PRD.md` MVP scope (acceptance + anti-goals)
4. `pnpm tsx scripts/starter-doctor.ts`
5. `pnpm turbo run dev --filter=<APP_SLUG>`
6. Plan → Scaffold Tests → Implement → Prepare PR (see `/prompts/tasks`)

**Export (new product repo)**

1. `pnpm i`
2. `pnpm tsx scripts/new-repo-from-template.ts`
3. `cd ../<APP_SLUG> && pnpm i`
4. Fill `docs/product/PRD.md` MVP scope
5. `pnpm tsx scripts/starter-doctor.ts`
6. `pnpm dev`

---

## 0) Inputs (JSON example)

```json
{
  "app_name": "ADHD Storyteller",
  "app_slug": "adhd-story",
  "brand": { "hue": 160 },
  "features": { "billing": false, "orgs": false, "ai": true }
}
```

## 1) Plan (return this JSON before code changes)

```json
{
  "changes": [
    { "path": "app/layout.tsx", "reason": "metadata & theme import" },
    { "path": "styles/tokens.css", "reason": "brand hue override" },
    { "path": "README.md", "reason": "rename project" },
    { "path": "app.config.ts", "reason": "feature toggles" },
    { "path": "app/(marketing)/page.tsx", "reason": "update landing copy" }
  ],
  "skipped": [],
  "risks": ["do not remove adapters", "keep routing zones intact"]
}
```

## 2) Execute (then keep scope tight)

**Update** title/description in `app/layout.tsx` and `README.md`.

**Theme**: set brand hue in `packages/ui/styles/tokens.css` (centralized design tokens).

**Routes**: keep `(marketing)` and `(app)` folders; change copy only.

**Config**: toggle features in `app.config.ts`.

**Manifest**: update `docs/llm/STARTER_MANIFEST.json`.defaults.

## 3) Never do

- No direct vendor SDKs in UI/pages—always use `/lib/adapters/*`.
- No mass renames/framework swaps/moving zone folders.
- No secrets in prompts or committed files.

## 4) Done means

- `pnpm typecheck && pnpm build` succeed.
- Diffs limited to files listed in the Plan JSON.
- README shows the new app name & quickstart.
