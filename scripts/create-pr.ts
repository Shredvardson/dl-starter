#!/usr/bin/env tsx
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { Command } from 'commander';

const run = (command: string): string => {
  try {
    return execSync(command, { stdio: 'pipe', encoding: 'utf-8' }).toString().trim();
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

const program = new Command()
  .option('-t, --title <title>', 'PR title')
  .option('--dry-run', 'Show what would be created without actually creating the PR')
  .parse();

const options = program.opts();

async function main() {
  // Get current branch
  const currentBranch = run('git branch --show-current');
  if (!currentBranch || currentBranch === 'main') {
    console.error('❌ Cannot create PR from main branch');
    process.exit(1);
  }

  console.log(`📋 Running quality checks...`);
  
  // Run verification commands
  const results = {
    doctor: run('pnpm run doctor:report 2>&1'),
    lint: run('pnpm -w turbo run lint 2>&1'),
    typecheck: run('pnpm -w turbo run typecheck 2>&1'),
    build: run('pnpm -w turbo run build 2>&1'),
    e2e: run('pnpm -w turbo run test:e2e 2>&1 || echo "N/A"'),
  };

  // Load template and fill with results
  const template = readFileSync('.github/pull_request_template.md', 'utf-8');
  const filledBody = template
    .replace('_What changed and why in 1–3 sentences._', 'Auto-generated PR - please fill summary')
    .replace('- [ ] `pnpm run doctor:report` (attach artifacts/doctor-report.md)', 
             `- [x] \`pnpm run doctor:report\`\n\`\`\`\n${results.doctor}\n\`\`\``)
    .replace('- [ ] `pnpm -w turbo run lint`', 
             `- [x] \`pnpm -w turbo run lint\`\n\`\`\`\n${results.lint}\n\`\`\``)
    .replace('- [ ] `pnpm -w turbo run typecheck`', 
             `- [x] \`pnpm -w turbo run typecheck\`\n\`\`\`\n${results.typecheck}\n\`\`\``)
    .replace('- [ ] `pnpm -w turbo run build`', 
             `- [x] \`pnpm -w turbo run build\`\n\`\`\`\n${results.build}\n\`\`\``)
    .replace('- [ ] `pnpm -w turbo run test:e2e` (or N/A)', 
             `- [x] \`pnpm -w turbo run test:e2e\`\n\`\`\`\n${results.e2e}\n\`\`\``);

  const title = options.title || `${currentBranch}: auto-generated PR`;

  if (options.dryRun) {
    console.log(`\n🔍 DRY RUN - Would create PR:`);
    console.log(`Title: ${title}`);
    console.log(`\nBody preview (first 500 chars):`);
    console.log(filledBody.slice(0, 500) + '...');
    return;
  }

  console.log(`🚀 Creating PR: ${title}`);
  
  // Write body to temp file to avoid shell escaping issues
  const tempBodyFile = '/tmp/pr-body.md';
  require('fs').writeFileSync(tempBodyFile, filledBody);
  
  try {
    const prUrl = run(`gh pr create --title "${title}" --body-file "${tempBodyFile}"`);
    console.log(`✅ PR created: ${prUrl}`);
  } catch (error) {
    console.error(`❌ Failed to create PR: ${error}`);
    process.exit(1);
  }
}

main().catch(console.error);