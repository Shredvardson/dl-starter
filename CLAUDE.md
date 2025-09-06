# CLAUDE.md — Starter Template Index

**This repository is a reusable _starter template_.** When beginning a new app, do **not** freehand changes.
Follow the New-App Kickoff flow and only customize parts listed there.

Read in this order:
@docs/llm/STARTER_MANIFEST.json
@docs/llm/NEW_APP_KICKOFF.md
@docs/llm/CONTRIBUTING_LLMS.md
@docs/llm/QUALITY_PIPELINE.md

Routing map for code edits (src-based):
@docs/llm/context-map.json

Hard rules:
- Use adapters in `/lib/adapters/*` for vendors (auth/db/ai/analytics/payments/storage/logger).
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
- Public values must start with `NEXT_PUBLIC_` and live under `client` in `src/lib/env.ts`.
- Server secrets live under `server`. Do not import server-only envs in client components.
- If env validation fails, fix `.env.local` or Vercel Project Settings → Environment Variables.