# dl-starter

Lightweight, LLM-friendly Next.js starter.

## Quickstart

1. **Use as template** (GitHub → Use this template) or via CLI:
   ```bash
   gh repo create <new-repo-name> --template Shredvardson/dl-starter --public --clone
   cd <new-repo-name>
   pnpm i
   pnpm dev
   ```
2. **Docs for LLMs**
   - `CLAUDE.md` (index + rules)
   - `docs/llm/context-map.json` (src/ routing map)
   - `docs/llm/STARTER_MANIFEST.json` (what to customize per app)
3. **Customize**
   - `src/app/(marketing)/page.tsx` (copy)
   - `src/styles/tokens.css` (brand hue / tokens)
   - `app.config.ts` (feature toggles: billing/orgs/ai)

## Scripts

`pnpm dev` / `pnpm build` / `pnpm typecheck` / `pnpm test -- --run`

## Spec-Lite Workflow (60-second version)

1. Create a feature spec: `/specify "Add Practice Blocks"` → writes `/specs/NNN-slug/spec.md` (≤900 words).
2. Plan & tasks in the same file: `/plan NNN`, `/tasks NNN`.
3. Branch: `git switch -c feat/NNN-slug`.
4. Implement + tests. Commit message prefix: `feat(NNN): …`.
5. PR body includes `Spec-ID: NNN`. CI blocks merge if missing or if tests didn't change when code changed.

## Node & pnpm

Node 22 (see `.nvmrc` / `.node-version`). pnpm version is managed by `packageManager` in `package.json`.
