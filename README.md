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

## Node & pnpm
Node 22 (see `.nvmrc` / `.node-version`). pnpm version is managed by `packageManager` in `package.json`.