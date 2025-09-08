# /dev:init-new-app — Initialize a new app from this starter

**Inputs**: JSON as in docs/llm/NEW_APP_KICKOFF.md.

## Steps:

1. Read `docs/llm/STARTER_MANIFEST.json` and `docs/llm/NEW_APP_KICKOFF.md`.

2. Propose the Plan JSON (list of files + reasons) and wait for approval if required.

3. Apply minimal diffs only to the listed files.

4. Run `pnpm typecheck && pnpm build`; if failing, revert and propose a revised plan.

## Output:

- The Plan JSON
- Unified diffs for applied changes
- A short checklist the human can verify
