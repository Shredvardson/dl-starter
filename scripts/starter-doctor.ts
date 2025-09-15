import { readFileSync, existsSync, statSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { execSync } from 'child_process';

interface CheckResult {
  name: string;
  status: 'pass' | 'fail' | 'warn';
  message: string;
  fix?: string;
}

function checkPlaceholders(): CheckResult {
  // Build pattern from parts to avoid triggering self-detection
  const placeholderPattern = new RegExp(['{{', '[A-Z_]+', '}}'].join(''), 'g');
  const filesToCheck: string[] = [];

  function scanDirectory(dir: string) {
    try {
      const entries = require('fs').readdirSync(dir);
      for (const entry of entries) {
        const fullPath = join(dir, entry);
        const stat = statSync(fullPath);

        // Skip excluded directories and this file
        if (
          ['node_modules', '.git', '.next', '.turbo', 'coverage', 'dist'].includes(entry) ||
          fullPath.endsWith('scripts/starter-doctor.ts')
        ) {
          continue;
        }

        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (
          stat.isFile() &&
          ['.md', '.json', '.ts', '.tsx', '.js', '.jsx'].some((ext) => entry.endsWith(ext))
        ) {
          filesToCheck.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }

  scanDirectory(process.cwd());

  const filesWithPlaceholders: string[] = [];
  for (const file of filesToCheck) {
    try {
      const content = readFileSync(file, 'utf8');
      if (placeholderPattern.test(content)) {
        filesWithPlaceholders.push(file);
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }

  if (filesWithPlaceholders.length > 0) {
    return {
      name: 'Placeholder Check',
      status: 'fail',
      message: `Found ${filesWithPlaceholders.length} files with unreplaced placeholders: ${filesWithPlaceholders.slice(0, 3).join(', ')}${filesWithPlaceholders.length > 3 ? '...' : ''}`,
      fix: `Run the new-app bootstrap script or manually replace ${'{' + '{PLACEHOLDER}' + '}'} values`,
    };
  }

  return {
    name: 'Placeholder Check',
    status: 'pass',
    message: 'No unreplaced placeholders found',
  };
}

function checkPRD(): CheckResult {
  const prdPath = resolve('docs/product/PRD.md');

  if (!existsSync(prdPath)) {
    return {
      name: 'PRD Check',
      status: 'warn',
      message: 'No PRD found at docs/product/PRD.md',
      fix: 'Create docs/product/PRD.md with your MVP scope and acceptance criteria',
    };
  }

  const content = readFileSync(prdPath, 'utf8');
  const templateHashes = [
    // Add template hash here if we create a PRD template
  ];

  // Basic content check - ensure it's not just a placeholder
  if (content.length < 200 || content.includes('TODO') || content.includes('{{')) {
    return {
      name: 'PRD Check',
      status: 'warn',
      message: 'PRD appears to be incomplete or contains template placeholders',
      fix: 'Fill out docs/product/PRD.md with your MVP scope, acceptance criteria, and anti-goals',
    };
  }

  return {
    name: 'PRD Check',
    status: 'pass',
    message: 'PRD exists and appears complete',
  };
}

function checkEnvironment(): CheckResult {
  // First validate environment schema
  try {
    require('../apps/web/src/lib/env').env;
  } catch (error: any) {
    return {
      name: 'Environment Check',
      status: 'fail',
      message: `Environment validation failed: ${error.message}`,
      fix: 'Check .env.local values against schema in apps/web/src/lib/env.ts',
    };
  }

  const examplePath = resolve('.env.example');
  const envPath = resolve('.env.local');

  if (!existsSync(examplePath)) {
    return {
      name: 'Environment Check',
      status: 'pass',
      message: 'No .env.example found (optional check)',
    };
  }

  if (!existsSync(envPath)) {
    return {
      name: 'Environment Check',
      status: 'warn',
      message: 'Found .env.example but no .env.local file',
      fix: 'Copy .env.example to .env.local and fill in your values',
    };
  }

  try {
    const exampleContent = readFileSync(examplePath, 'utf8');
    const envContent = readFileSync(envPath, 'utf8');

    const exampleKeys =
      exampleContent.match(/^[A-Z_]+=.*/gm)?.map((line) => line.split('=')[0]) || [];
    const envKeys = envContent.match(/^[A-Z_]+=.*/gm)?.map((line) => line.split('=')[0]) || [];

    const missingKeys = exampleKeys.filter((key) => !envKeys.includes(key));

    if (missingKeys.length > 0) {
      return {
        name: 'Environment Check',
        status: 'warn',
        message: `Missing environment variables: ${missingKeys.join(', ')}`,
        fix: 'Add missing keys to .env.local or update Vercel Environment Variables',
      };
    }
  } catch (error) {
    return {
      name: 'Environment Check',
      status: 'warn',
      message: 'Could not parse environment files',
      fix: 'Check .env.example and .env.local syntax',
    };
  }

  return {
    name: 'Environment Check',
    status: 'pass',
    message: 'Environment configuration looks good',
  };
}

function checkConstitutionIntegrity(): CheckResult {
  const checksumPath = resolve('docs/llm/CONSTITUTION.CHECKSUM');
  const contextMapPath = resolve('docs/llm/context-map.json');
  
  // Check if this is an infrastructure change (workflows, scripts)
  const isInfraChange = process.env.GITHUB_HEAD_REF && (
    process.env.GITHUB_HEAD_REF.includes('workflow') ||
    process.env.GITHUB_HEAD_REF.includes('ci') ||
    process.env.GITHUB_HEAD_REF.includes('infra')
  );

  if (!existsSync(checksumPath)) {
    return {
      name: 'Constitution Integrity',
      status: isInfraChange ? 'warn' : 'fail',
      message: 'Constitution checksum file missing' + (isInfraChange ? ' (advisory for infra changes)' : ''),
      fix: 'Run: pnpm tsx scripts/update-constitution-checksum.ts',
    };
  }

  if (!existsSync(contextMapPath)) {
    return {
      name: 'Constitution Integrity',
      status: isInfraChange ? 'warn' : 'fail',
      message: 'Context map file missing' + (isInfraChange ? ' (advisory for infra changes)' : ''),
      fix: 'Restore docs/llm/context-map.json from template',
    };
  }

  try {
    // Run checksum update and see if it changes (ignoring timestamp)
    const originalContent = readFileSync(checksumPath, 'utf8');
    const originalChecksums = JSON.parse(originalContent);

    execSync('npx tsx scripts/update-constitution-checksum.ts', { stdio: 'pipe' });

    const newContent = readFileSync(checksumPath, 'utf8');
    const newChecksums = JSON.parse(newContent);

    // Compare only the checksums, not the timestamp
    if (JSON.stringify(originalChecksums.checksums) !== JSON.stringify(newChecksums.checksums)) {
      return {
        name: 'Constitution Integrity',
        status: 'fail',
        message: 'Constitution checksum is stale - binding sources have changed',
        fix: 'Checksum has been updated. Review changes and commit the updated CONSTITUTION.CHECKSUM',
      };
    }
  } catch (error) {
    return {
      name: 'Constitution Integrity',
      status: 'fail',
      message: 'Failed to verify constitution checksum',
      fix: 'Check that scripts/update-constitution-checksum.ts exists and runs correctly',
    };
  }

  return {
    name: 'Constitution Integrity',
    status: 'pass',
    message: 'Constitution checksum is current',
  };
}

function checkDependencies(): CheckResult {
  const packageJsonPath = resolve('package.json');

  if (!existsSync(packageJsonPath)) {
    return {
      name: 'Dependencies Check',
      status: 'fail',
      message: 'No package.json found',
      fix: 'Ensure you are in the project root directory',
    };
  }

  if (!existsSync(resolve('node_modules'))) {
    return {
      name: 'Dependencies Check',
      status: 'fail',
      message: 'Dependencies not installed',
      fix: 'Run: pnpm i',
    };
  }

  return {
    name: 'Dependencies Check',
    status: 'pass',
    message: 'Dependencies are installed',
  };
}

function printResults(results: CheckResult[]) {
  console.log('🏥 Starter Doctor Results\n');

  const failed = results.filter((r) => r.status === 'fail');
  const warnings = results.filter((r) => r.status === 'warn');
  const passed = results.filter((r) => r.status === 'pass');

  // Print all results
  results.forEach((result) => {
    const icon = result.status === 'pass' ? '✅' : result.status === 'warn' ? '⚠️ ' : '❌';
    console.log(`${icon} ${result.name}: ${result.message}`);
    if (result.fix) {
      console.log(`   💡 Fix: ${result.fix}`);
    }
    console.log();
  });

  // Summary
  console.log('📊 Summary:');
  console.log(`   ✅ Passed: ${passed.length}`);
  console.log(`   ⚠️  Warnings: ${warnings.length}`);
  console.log(`   ❌ Failed: ${failed.length}`);
  console.log();

  if (failed.length > 0) {
    console.log('🚨 Fix all failures before continuing development.');
    process.exit(1);
  } else if (warnings.length > 0) {
    console.log('⚠️  Address warnings for best experience.');
    process.exit(0);
  } else {
    console.log('🎉 All checks passed! Ready for development.');
    process.exit(0);
  }
}

function checkNewAppImports(): CheckResult[] {
  const results: CheckResult[] = [];
  const appsDir = resolve('apps');

  if (!existsSync(appsDir)) {
    return results;
  }

  const apps = require('fs')
    .readdirSync(appsDir)
    .filter((entry: string) => {
      const appPath = join(appsDir, entry);
      return statSync(appPath).isDirectory() && entry !== 'web';
    });

  for (const appName of apps) {
    const globalsCssPath = join(appsDir, appName, 'src/app/globals.css');
    const nextConfigPath = join(appsDir, appName, 'next.config.ts');
    const packageJsonPath = join(appsDir, appName, 'package.json');

    // Check for relative tokens import
    if (existsSync(globalsCssPath)) {
      try {
        const content = readFileSync(globalsCssPath, 'utf8');
        if (content.includes('../../styles/tokens.css')) {
          results.push({
            name: `${appName} Globals Import`,
            status: 'fail',
            message: 'Uses relative path to tokens.css instead of package import',
            fix: `Update ${globalsCssPath} to use: @import '@ui/components/styles/tokens.css';`,
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    // Check for turbopack in next.config.ts
    if (existsSync(nextConfigPath)) {
      try {
        const content = readFileSync(nextConfigPath, 'utf8');
        if (content.includes('turbopack: true')) {
          results.push({
            name: `${appName} Next Config`,
            status: 'fail',
            message: 'Contains experimental.turbopack which should be removed',
            fix: `Remove experimental.turbopack from ${nextConfigPath}`,
          });
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    // Check if app is in lockfile
    try {
      const lockfilePath = resolve('pnpm-lock.yaml');
      if (existsSync(lockfilePath)) {
        const lockfileContent = readFileSync(lockfilePath, 'utf8');
        if (!lockfileContent.includes(`apps/${appName}`)) {
          results.push({
            name: `${appName} Lockfile`,
            status: 'fail',
            message: 'App not found in pnpm-lock.yaml',
            fix: 'Run: pnpm i',
          });
        }
      }
    } catch (error) {
      // Skip if lockfile can't be read
    }

    // Check dependency versions vs apps/web
    if (existsSync(packageJsonPath)) {
      try {
        const appPackageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
        const webPackageJsonPath = resolve('apps/web/package.json');

        if (existsSync(webPackageJsonPath)) {
          const webPackageJson = JSON.parse(readFileSync(webPackageJsonPath, 'utf8'));
          const coreKeys = ['next', 'react', 'react-dom', 'tailwindcss', 'typescript'];
          const mismatches: string[] = [];

          for (const key of coreKeys) {
            const appVersion =
              appPackageJson.dependencies?.[key] || appPackageJson.devDependencies?.[key];
            const webVersion =
              webPackageJson.dependencies?.[key] || webPackageJson.devDependencies?.[key];

            if (appVersion && webVersion && appVersion !== webVersion) {
              mismatches.push(`${key}: ${appVersion} vs ${webVersion}`);
            }
          }

          if (mismatches.length > 0) {
            results.push({
              name: `${appName} Dependencies`,
              status: 'warn',
              message: `Core dependency mismatches: ${mismatches.join(', ')}`,
              fix: `Consider updating ${packageJsonPath} to match apps/web versions`,
            });
          }
        }
      } catch (error) {
        // Skip if package.json can't be parsed
      }
    }
  }

  return results;
}

function generateReportMarkdown(results: CheckResult[]): string {
  const failed = results.filter((r) => r.status === 'fail');
  const warnings = results.filter((r) => r.status === 'warn');
  const passed = results.filter((r) => r.status === 'pass');
  
  const categories = new Map<string, { fails: CheckResult[], warns: CheckResult[] }>();
  
  // Categorize results
  results.forEach(result => {
    if (!categories.has(result.name)) {
      categories.set(result.name, { fails: [], warns: [] });
    }
    const cat = categories.get(result.name)!;
    if (result.status === 'fail') cat.fails.push(result);
    if (result.status === 'warn') cat.warns.push(result);
  });

  // Load allowlist for transparency
  const allowlist = loadDoctorAllowlist();

  let report = '';
  
  report += '# 🏥 Starter Doctor Report\n\n';
  report += `**Generated:** ${new Date().toISOString()}\n`;
  report += `**Status:** ${failed.length > 0 ? '❌ FAILED' : warnings.length > 0 ? '⚠️ WARNINGS' : '✅ PASSED'}\n\n`;
  
  // Executive Summary
  report += '## 📊 Summary\n\n';
  report += `- ✅ **Passed:** ${passed.length}\n`;
  report += `- ⚠️ **Warnings:** ${warnings.length}\n`;
  report += `- ❌ **Failed:** ${failed.length}\n\n`;
  
  if (failed.length === 0 && warnings.length === 0) {
    report += '🎉 **All checks passed! Repository is ready for development.**\n\n';
  }
  
  // Category Breakdown
  if (categories.size > 0) {
    report += '## 📋 Issues by Category\n\n';
    
    for (const [category, issues] of categories) {
      const totalIssues = issues.fails.length + issues.warns.length;
      if (totalIssues === 0) continue;
      
      const icon = issues.fails.length > 0 ? '❌' : '⚠️';
      report += `### ${icon} ${category}\n\n`;
      report += `- Failures: ${issues.fails.length}\n`;
      report += `- Warnings: ${issues.warns.length}\n\n`;
      
      // Show top issues with quick fixes
      const allIssues = [...issues.fails, ...issues.warns].slice(0, 5);
      for (const issue of allIssues) {
        const statusIcon = issue.status === 'fail' ? '❌' : '⚠️';
        report += `${statusIcon} **${issue.message}**\n`;
        if (issue.fix) {
          report += `   💡 *Fix: ${issue.fix}*\n`;
        }
        report += '\n';
      }
      
      if (issues.fails.length + issues.warns.length > 5) {
        report += `*... and ${issues.fails.length + issues.warns.length - 5} more issues*\n\n`;
      }
    }
  }
  
  // Allowlist Transparency
  if (Object.keys(allowlist).length > 0) {
    report += '## 🔇 Allowlisted Items\n\n';
    report += '*The following items are intentionally ignored:*\n\n';
    
    if (allowlist.missingScripts?.length) {
      report += '**Scripts:**\n';
      allowlist.missingScripts.forEach(script => {
        report += `- \`${script}\`\n`;
      });
      report += '\n';
    }
    
    if (allowlist.missingPaths?.length) {
      report += '**Paths:**\n';
      allowlist.missingPaths.forEach(path => {
        report += `- \`${path}\`\n`;
      });
      report += '\n';
    }
    
    if (allowlist.missingAnchors?.length) {
      report += '**Anchors:**\n';
      allowlist.missingAnchors.forEach(anchor => {
        report += `- \`${anchor}\`\n`;
      });
      report += '\n';
    }
  }
  
  // How to Reproduce
  report += '## 🔧 How to Reproduce Locally\n\n';
  report += '```bash\n';
  report += 'pnpm install\n';
  report += 'pnpm run doctor\n';
  report += '```\n\n';
  
  if (failed.length > 0) {
    report += '## 🛠️ Remediation Steps\n\n';
    report += '1. Address each ❌ failure listed above\n';
    report += '2. Run `pnpm run doctor` locally to verify fixes\n';
    report += '3. Commit fixes and push to re-trigger CI\n';
    report += '4. Add items to `.doctor-allowlist.json` only if they are intentional\n\n';
  }
  
  // Footer
  report += '---\n\n';
  report += '*Generated by [Starter Doctor](../scripts/starter-doctor.ts)*\n';
  
  return report;
}

function generateCommandInventory(): any {
  const inventory = {
    generated: new Date().toISOString(),
    packages: {} as Record<string, { scripts: Record<string, string>, dir: string }>,
    commandDocs: {} as Record<string, { scripts: string[], paths: string[], anchors: string[] }>,
    orphanedDocs: [] as string[],
    turboTasks: {} as Record<string, any>
  };
  
  // Package scripts inventory
  const workspacePackages = loadWorkspacePackages();
  for (const pkg of workspacePackages) {
    const key = pkg.name || pkg.dir;
    inventory.packages[key] = {
      scripts: pkg.scripts,
      dir: pkg.dir
    };
  }
  
  // Turbo pipeline
  inventory.turboTasks = loadTurboPipeline();
  
  // Command docs analysis
  const commandsDir = resolve('.claude/commands');
  if (existsSync(commandsDir)) {
    function analyzeCommandFile(filePath: string) {
      try {
        const content = readFileSync(filePath, 'utf8');
        const relativePath = filePath.replace(process.cwd() + '/', '');
        
        const scripts: string[] = [];
        const paths: string[] = [];
        const anchors: string[] = [];
        
        // Extract scripts (simplified)
        const scriptMatches = content.match(/`(?:pnpm|npm|turbo)[^`]+`/g) || [];
        scripts.push(...scriptMatches);
        
        // Extract paths
        const pathMatches = content.match(/`[^`]*(?:apps|packages|scripts|docs)[^`]*`/g) || [];
        paths.push(...pathMatches);
        
        // Extract links with anchors
        const anchorMatches = content.match(/\[[^\]]+\]\([^)]+#[^)]+\)/g) || [];
        anchors.push(...anchorMatches);
        
        inventory.commandDocs[relativePath] = { scripts, paths, anchors };
      } catch {
        // Skip files that can't be read
      }
    }
    
    function scanDir(dir: string) {
      try {
        const entries = require('fs').readdirSync(dir);
        for (const entry of entries) {
          const fullPath = join(dir, entry);
          if (statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
          } else if (entry.endsWith('.md')) {
            analyzeCommandFile(fullPath);
          }
        }
      } catch {
        // Skip directories that can't be read
      }
    }
    
    scanDir(commandsDir);
  }
  
  return inventory;
}

function loadDoctorAllowlist(): any {
  const allowlistPath = resolve('.doctor-allowlist.json');
  if (!existsSync(allowlistPath)) return {};
  
  try {
    return JSON.parse(readFileSync(allowlistPath, 'utf8'));
  } catch {
    return {};
  }
}

function loadWorkspacePackages(): any[] {
  // Simplified version for inventory - reuse the logic from checkCommandDocs
  const candidates = [
    ...safeListDirs('apps').map(d => `apps/${d}`),
    ...safeListDirs('packages').map(d => `packages/${d}`),
  ];
  const out: any[] = [];
  
  for (const dir of candidates) {
    const pj = join(dir, 'package.json');
    if (existsSync(pj)) {
      try {
        const json = JSON.parse(readFileSync(pj, 'utf8'));
        out.push({ name: json.name, dir, scripts: json.scripts ?? {} });
      } catch {
        // Skip malformed package.json files
      }
    }
  }
  
  // Include root
  if (existsSync('package.json')) {
    try {
      const root = JSON.parse(readFileSync('package.json', 'utf8'));
      out.push({ name: root.name, dir: '.', scripts: root.scripts ?? {} });
    } catch {
      // Skip malformed root package.json
    }
  }
  
  return out;
}

function loadTurboPipeline(): Record<string, any> {
  try {
    const turboPath = resolve('turbo.json');
    if (!existsSync(turboPath)) return {};
    
    const turbo = JSON.parse(readFileSync(turboPath, 'utf8'));
    return turbo.pipeline ?? {};
  } catch {
    return {};
  }
}

function safeListDirs(dir: string): string[] {
  try {
    return require('fs').readdirSync(dir).filter((entry: string) => {
      return statSync(join(dir, entry)).isDirectory();
    });
  } catch {
    return [];
  }
}

function checkCommandDocs(): CheckResult[] {
  const commandsDir = '.claude/commands';
  
  if (!existsSync(commandsDir)) {
    return [{
      name: 'Command Documentation',
      status: 'warn',
      message: 'No .claude/commands directory found'
    }];
  }

  const results: CheckResult[] = [];
  
  try {
    function scanCommandDir(dir: string): string[] {
      const entries = require('fs').readdirSync(dir);
      const commands: string[] = [];
      
      for (const entry of entries) {
        const fullPath = join(dir, entry);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
          commands.push(...scanCommandDir(fullPath));
        } else if (entry.endsWith('.md')) {
          commands.push(fullPath);
        }
      }
      
      return commands;
    }

    const commandFiles = scanCommandDir(commandsDir);
    
    results.push({
      name: 'Slash Commands',
      status: commandFiles.length > 0 ? 'pass' : 'warn',
      message: `Found ${commandFiles.length} slash command(s): ${commandFiles.map(f => f.replace(commandsDir + '/', '')).join(', ')}`
    });

    // Check if commands are referenced in CLAUDE.md
    if (existsSync('CLAUDE.md')) {
      const claudeContent = readFileSync('CLAUDE.md', 'utf8');
      const referencedCommands = commandFiles.filter(cmd => 
        claudeContent.includes(cmd) || claudeContent.includes(cmd.replace('.claude/commands/', ''))
      );
      
      results.push({
        name: 'Commands in CLAUDE.md',
        status: referencedCommands.length === commandFiles.length ? 'pass' : 'warn',
        message: `${referencedCommands.length}/${commandFiles.length} commands referenced in CLAUDE.md`,
        fix: commandFiles.length > referencedCommands.length ? 'Add missing command references to CLAUDE.md' : undefined
      });
    }

  } catch (error) {
    results.push({
      name: 'Command Documentation Scan',
      status: 'fail',
      message: `Error scanning commands: ${error}`
    });
  }
  
  return results;
}

function checkEnvExampleSafety(): CheckResult {
  const examplePath = resolve('.env.example');
  if (!existsSync(examplePath)) {
    return {
      name: 'Env Example Safety',
      status: 'pass',
      message: 'No .env.example to check',
    };
  }

  try {
    const content = readFileSync(examplePath, 'utf8');
    const suspiciousKeys: string[] = [];
    for (const line of content.split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z][A-Z0-9_]+)\s*=\s*(.*)$/);
      if (!m) continue;
      const key = m[1];
      const rawVal = m[2].trim().replace(/^"(.*)"$/, '$1');
      if (!rawVal || rawVal.startsWith('#')) continue;
      if (/\bsk_live_[A-Za-z0-9]{24,}\b/.test(rawVal)) suspiciousKeys.push(key);
      if (/\bpk_live_[A-Za-z0-9]{24,}\b/.test(rawVal)) suspiciousKeys.push(key);
      if (/^[A-Za-z0-9+/]{40,}={0,2}$/.test(rawVal)) suspiciousKeys.push(key); // base64-like
    }
    if (suspiciousKeys.length) {
      return {
        name: 'Env Example Safety',
        status: 'fail',
        message: `Found potential real secrets for keys: ${suspiciousKeys.slice(0, 5).join(', ')}`,
        fix: 'Remove real secrets from .env.example - use empty values or placeholders only',
      };
    }
  } catch (error) {
    return {
      name: 'Env Example Safety',
      status: 'warn',
      message: 'Could not read .env.example for safety check',
    };
  }

  return {
    name: 'Env Example Safety',
    status: 'pass',
    message: '.env.example contains no real secrets',
  };
}

function checkRestrictedPaths(): CheckResult {
  // Only run this check in CI or if explicitly requested
  const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
  const isBotBranch = process.env.GITHUB_HEAD_REF?.startsWith('bots/claude/');
  
  if (!isCI || !isBotBranch) {
    return {
      name: 'Restricted Paths',
      status: 'pass',
      message: 'Check skipped (not a bot branch in CI)',
    };
  }

  try {
    // Run the restricted paths check script
    execSync('bash scripts/check-restricted-paths.sh', { 
      stdio: 'pipe',
      env: { ...process.env }
    });
    
    return {
      name: 'Restricted Paths',
      status: 'pass',
      message: '🤖 Bot branch respects path restrictions',
    };
  } catch (error: any) {
    const details =
      (error?.stderr?.toString?.() || error?.stdout?.toString?.() || '')
        .split('\n')
        .slice(-5)
        .join(' ')
        .trim();
    return {
      name: 'Restricted Paths',
      status: 'fail',
      message: details
        ? `Bot branch violated restricted path policy: ${details}`
        : 'Bot branch violated restricted path policy',
      fix: 'Bots cannot modify .github/workflows/**, scripts/release/**, or .env* files',
    };
  }
}

function checkAILabelHygiene(): CheckResult {
  // Only run in CI with artifacts directory
  const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
  const isBotBranch = process.env.GITHUB_HEAD_REF?.startsWith('bots/claude/');
  
  if (!isCI || !existsSync('artifacts')) {
    return {
      name: 'AI Label Hygiene',
      status: 'pass',
      message: 'Check skipped (no artifacts directory)',
    };
  }

  // For non-bot branches, this is always advisory
  if (!isBotBranch) {
    return {
      name: 'AI Label Hygiene',
      status: 'pass',
      message: 'Non-bot branch - AI label hygiene is advisory only',
    };
  }

  try {
    // Check if AI artifacts exist
    const hasAIReview = existsSync('artifacts/doctor-report.md') && 
                       readFileSync('artifacts/doctor-report.md', 'utf8').includes('🤖 AI Review');
    const hasSecurityReview = existsSync('artifacts/doctor-report.md') && 
                             readFileSync('artifacts/doctor-report.md', 'utf8').includes('🛡️ AI Security Review');
    
    if (!hasAIReview && !hasSecurityReview) {
      return {
        name: 'AI Label Hygiene',
        status: 'pass',
        message: 'No AI artifacts found, label check not applicable',
      };
    }

    // For bot branches, require proper labels
    const missingLabels = [];
    if (hasAIReview) missingLabels.push('ai-review:advisory');
    if (hasSecurityReview) missingLabels.push('ai-security:advisory');

    return {
      name: 'AI Label Hygiene',
      status: 'warn',
      message: `🤖 Bot branch AI artifacts detected - verify PR has labels: ${missingLabels.join(', ')}`,
      fix: 'Ensure workflows apply correct labels when AI reviews complete',
    };
  } catch (error: any) {
    return {
      name: 'AI Label Hygiene',
      status: 'warn',
      message: 'Could not verify AI label hygiene',
      fix: 'Check that AI review workflows apply proper labels',
    };
  }
}

function checkReferences(): CheckResult[] {
  const results: CheckResult[] = [];
  
  // Check recipe files referenced in CLAUDE.md
  const recipeFiles = [
    'docs/recipes/auth.md',
    'docs/recipes/db.md', 
    'docs/recipes/env-setup.md',
    'docs/recipes/stripe.md',
    'docs/recipes/shadcn.md'
  ];
  
  const missingRecipes = recipeFiles.filter(file => !existsSync(file));
  
  results.push({
    name: 'Recipe Documentation',
    status: missingRecipes.length === 0 ? 'pass' : 'fail',
    message: missingRecipes.length === 0 
      ? 'All recipe files exist'
      : `Missing recipe files: ${missingRecipes.join(', ')}`,
    fix: missingRecipes.length > 0 ? 'Create missing recipe files' : undefined
  });
  
  // Check other referenced files
  const otherFiles = ['CONTRIBUTING.md', 'RELEASING.md', 'SECURITY.md'];
  const missingOther = otherFiles.filter(file => !existsSync(file));
  
  results.push({
    name: 'Reference Documentation', 
    status: missingOther.length === 0 ? 'pass' : 'fail',
    message: missingOther.length === 0
      ? 'All reference files exist'
      : `Missing reference files: ${missingOther.join(', ')}`,
    fix: missingOther.length > 0 ? 'Create missing reference files' : undefined
  });
  
  return results;
}

function main() {
  const args = process.argv.slice(2);
  const isReportMode = args.includes('--report');
  const reportPath = args[args.indexOf('--report') + 1];
  
  const checks: CheckResult[] = [
    checkDependencies(),
    checkPlaceholders(),
    checkPRD(),
    checkEnvironment(),
    checkConstitutionIntegrity(),
    ...checkNewAppImports(),
    ...checkCommandDocs(),
    ...checkReferences(),
    checkEnvExampleSafety(),
    checkRestrictedPaths(),
    checkAILabelHygiene(),
  ];

  if (isReportMode && reportPath) {
    // Generate markdown report
    const reportMarkdown = generateReportMarkdown(checks);
    mkdirSync(dirname(reportPath), { recursive: true });
    writeFileSync(reportPath, reportMarkdown, 'utf8');
    console.log(`📄 Report written to: ${reportPath}`);
    
    // Generate command inventory JSON
    const inventoryPath = reportPath.replace('.md', '.json').replace('doctor-report', 'command-inventory');
    const inventory = generateCommandInventory();
    mkdirSync(dirname(inventoryPath), { recursive: true });
    writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2), 'utf8');
    console.log(`📋 Command inventory written to: ${inventoryPath}`);
    
    // Print first 10 failures inline for CI
    const failed = checks.filter((r) => r.status === 'fail');
    if (failed.length > 0) {
      console.log(`\n❌ ${failed.length} failures detected:`);
      failed.slice(0, 10).forEach((result, i) => {
        console.log(`${i + 1}. ${result.name}: ${result.message}`);
        if (result.fix) {
          console.log(`   💡 ${result.fix}`);
        }
      });
      
      if (failed.length > 10) {
        console.log(`   ... and ${failed.length - 10} more (see full report)`);
      }
      
      process.exit(1);
    }
    
    const warnings = checks.filter((r) => r.status === 'warn');
    if (warnings.length > 0) {
      console.log(`\n⚠️ ${warnings.length} warnings detected (see report for details)`);
    }
    
    console.log('✅ Doctor check completed');
    process.exit(0);
  } else {
    printResults(checks);
  }
}

main();
