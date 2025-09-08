# CLAUDE.md — Starter Template Index (Monorepo)

**This repository is a reusable _starter template_.** When beginning a new app, do **not** freehand changes.
Follow the New-App Kickoff flow and only customize parts listed there.

## New App from Template (choose mode):

**Monorepo (portfolio)** – new app inside this repo
1) `pnpm i`
2) `pnpm tsx scripts/new-app.ts`
3) Fill `docs/product/PRD.md` MVP scope (acceptance + anti-goals)
4) `pnpm tsx scripts/starter-doctor.ts`
5) `pnpm turbo run dev --filter=<APP_SLUG>`
6) Plan → Scaffold Tests → Implement → Prepare PR (see `/prompts/tasks`)

**Export (new product repo)**
1) `pnpm i`  
2) `pnpm tsx scripts/new-repo-from-template.ts`
3) `cd ../<APP_SLUG> && pnpm i`
4) Fill `docs/product/PRD.md` MVP scope
5) `pnpm tsx scripts/starter-doctor.ts`
6) `pnpm dev`

Read in this order:
@docs/llm/STARTER_MANIFEST.json
@docs/llm/NEW_APP_KICKOFF.md
@docs/llm/CONTRIBUTING_LLMS.md
@docs/llm/QUALITY_PIPELINE.md

Architecture & routing:
@docs/llm/DESIGN_CONSTITUTION.md
@docs/llm/context-map.json

Hard rules:
- Use adapters in `apps/web/src/lib/adapters/*` for vendors (auth/db/ai/analytics/payments/storage/logger).
- Use shared packages: `@ui/components`, `@shared/types`, `@shared/ai`, `@shared/config`.
- Use tokenized Tailwind via `hsl(var(--...))` (no hex colors in components).
- Keep diffs small and reversible. Plan → Implement → Refactor Secure → PR.

## Git push rules
- Never ask for or store secrets (SSH keys, tokens) in files or .env.
- If `git push` fails with `Permission denied (publickey)`:
  1) Assume non-interactive shell. Ask the user to run one of:
     - `ssh-add --apple-use-keychain ~/.ssh/id_ed25519`
     - or switch to HTTPS push: `git remote set-url --push origin https://github.com/<user>/<repo>.git && gh auth setup-git`
  2) After they confirm, retry `git push -u origin <branch>`.
- If push still fails, run `git remote -v` and `ssh -T git@github.com` and show the outputs.

## Environment rules
- Never read `process.env` directly. Always import from `@/lib/env`.
- Public values must start with `NEXT_PUBLIC_` and live under `client` in `apps/web/src/lib/env.ts`.
- Server secrets live under `server`. Do not import server-only envs in client components.
- If env validation fails, fix `.env.local` or Vercel Project Settings → Environment Variables.