import { readFileSync, existsSync, statSync } from 'fs';
import { resolve, join } from 'path';
import { execSync } from 'child_process';

interface CheckResult {
  name: string;
  status: 'pass' | 'fail' | 'warn';
  message: string;
  fix?: string;
}

function checkPlaceholders(): CheckResult {
  const placeholderPattern = /\{\{[A-Z_]+\}\}/g;
  const filesToCheck: string[] = [];
  
  function scanDirectory(dir: string) {
    try {
      const entries = require('fs').readdirSync(dir);
      for (const entry of entries) {
        const fullPath = join(dir, entry);
        const stat = statSync(fullPath);
        
        // Skip excluded directories
        if (['node_modules', '.git', '.next', '.turbo', 'coverage', 'dist'].includes(entry)) {
          continue;
        }
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile() && ['.md', '.json', '.ts', '.tsx', '.js', '.jsx'].some(ext => entry.endsWith(ext))) {
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
      fix: 'Run the new-app bootstrap script or manually replace {{PLACEHOLDER}} values'
    };
  }
  
  return {
    name: 'Placeholder Check',
    status: 'pass',
    message: 'No unreplaced placeholders found'
  };
}

function checkPRD(): CheckResult {
  const prdPath = resolve('docs/product/PRD.md');
  
  if (!existsSync(prdPath)) {
    return {
      name: 'PRD Check',
      status: 'warn',
      message: 'No PRD found at docs/product/PRD.md',
      fix: 'Create docs/product/PRD.md with your MVP scope and acceptance criteria'
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
      fix: 'Fill out docs/product/PRD.md with your MVP scope, acceptance criteria, and anti-goals'
    };
  }
  
  return {
    name: 'PRD Check',
    status: 'pass',
    message: 'PRD exists and appears complete'
  };
}

function checkEnvironment(): CheckResult {
  const examplePath = resolve('.env.example');
  const envPath = resolve('.env.local');
  
  if (!existsSync(examplePath)) {
    return {
      name: 'Environment Check',
      status: 'pass',
      message: 'No .env.example found (optional check)'
    };
  }
  
  if (!existsSync(envPath)) {
    return {
      name: 'Environment Check',
      status: 'warn',
      message: 'Found .env.example but no .env.local file',
      fix: 'Copy .env.example to .env.local and fill in your values'
    };
  }
  
  try {
    const exampleContent = readFileSync(examplePath, 'utf8');
    const envContent = readFileSync(envPath, 'utf8');
    
    const exampleKeys = exampleContent.match(/^[A-Z_]+=.*/gm)?.map(line => line.split('=')[0]) || [];
    const envKeys = envContent.match(/^[A-Z_]+=.*/gm)?.map(line => line.split('=')[0]) || [];
    
    const missingKeys = exampleKeys.filter(key => !envKeys.includes(key));
    
    if (missingKeys.length > 0) {
      return {
        name: 'Environment Check',
        status: 'warn',
        message: `Missing environment variables: ${missingKeys.join(', ')}`,
        fix: 'Add missing keys to .env.local or update Vercel Environment Variables'
      };
    }
  } catch (error) {
    return {
      name: 'Environment Check',
      status: 'warn',
      message: 'Could not parse environment files',
      fix: 'Check .env.example and .env.local syntax'
    };
  }
  
  return {
    name: 'Environment Check',
    status: 'pass',
    message: 'Environment configuration looks good'
  };
}

function checkConstitutionIntegrity(): CheckResult {
  const checksumPath = resolve('docs/llm/CONSTITUTION.CHECKSUM');
  const contextMapPath = resolve('docs/llm/context-map.json');
  
  if (!existsSync(checksumPath)) {
    return {
      name: 'Constitution Integrity',
      status: 'fail',
      message: 'Constitution checksum file missing',
      fix: 'Run: pnpm tsx scripts/update-constitution-checksum.ts'
    };
  }
  
  if (!existsSync(contextMapPath)) {
    return {
      name: 'Constitution Integrity',
      status: 'fail',
      message: 'Context map file missing',
      fix: 'Restore docs/llm/context-map.json from template'
    };
  }
  
  try {
    // Run checksum update and see if it changes
    const originalContent = readFileSync(checksumPath, 'utf8');
    
    execSync('npx tsx scripts/update-constitution-checksum.ts', { stdio: 'pipe' });
    
    const newContent = readFileSync(checksumPath, 'utf8');
    
    if (originalContent !== newContent) {
      return {
        name: 'Constitution Integrity',
        status: 'fail',
        message: 'Constitution checksum is stale - binding sources have changed',
        fix: 'Checksum has been updated. Review changes and commit the updated CONSTITUTION.CHECKSUM'
      };
    }
  } catch (error) {
    return {
      name: 'Constitution Integrity',
      status: 'fail',
      message: 'Failed to verify constitution checksum',
      fix: 'Check that scripts/update-constitution-checksum.ts exists and runs correctly'
    };
  }
  
  return {
    name: 'Constitution Integrity',
    status: 'pass',
    message: 'Constitution checksum is current'
  };
}

function checkDependencies(): CheckResult {
  const packageJsonPath = resolve('package.json');
  
  if (!existsSync(packageJsonPath)) {
    return {
      name: 'Dependencies Check',
      status: 'fail',
      message: 'No package.json found',
      fix: 'Ensure you are in the project root directory'
    };
  }
  
  if (!existsSync(resolve('node_modules'))) {
    return {
      name: 'Dependencies Check',
      status: 'fail',
      message: 'Dependencies not installed',
      fix: 'Run: pnpm i'
    };
  }
  
  return {
    name: 'Dependencies Check',
    status: 'pass',
    message: 'Dependencies are installed'
  };
}

function printResults(results: CheckResult[]) {
  console.log('🏥 Starter Doctor Results\n');
  
  const failed = results.filter(r => r.status === 'fail');
  const warnings = results.filter(r => r.status === 'warn');
  const passed = results.filter(r => r.status === 'pass');
  
  // Print all results
  results.forEach(result => {
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

function main() {
  const checks: CheckResult[] = [
    checkDependencies(),
    checkPlaceholders(),
    checkPRD(),
    checkEnvironment(),
    checkConstitutionIntegrity()
  ];
  
  printResults(checks);
}

main();