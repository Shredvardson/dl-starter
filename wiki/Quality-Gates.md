# Quality Gates & Pipeline

## Table of Contents
- [Overview](#overview)
- [Quality Pipeline](#quality-pipeline)
- [Individual Gates](#individual-gates)
- [What "Green Lights" Mean](#what-green-lights-mean)
- [Failure Handling](#failure-handling)
- [AI Integration](#ai-integration)

## Overview

Our quality pipeline ensures code reliability, security, and maintainability through automated checks. All changes must pass these gates before merge.

## Quality Pipeline

The complete pipeline runs on every PR and includes:

1. **Doctor Check** - Project health and compliance
2. **TypeScript Check** - Type safety and compilation  
3. **Linting** - Code style and best practices
4. **Unit Tests** - Component and function testing
5. **E2E Tests** - User journey validation
6. **Security Scan** - Vulnerability detection
7. **Build Verification** - Production build success

## Individual Gates

### Doctor (`npm run doctor`)
**Purpose**: Comprehensive project health check  
**Checks**:
- All referenced scripts/paths exist
- No broken internal links
- Command inventory is up-to-date
- Constitution checksum validation
- Environment configuration

**Green Light**: All project references valid, no broken links, configs current

### TypeScript (`npm run typecheck`)
**Purpose**: Type safety and compilation verification  
**Checks**:
- No TypeScript compilation errors
- Strict type checking compliance
- No `any` types in new code
- Import/export correctness

**Green Light**: Clean TypeScript compilation, full type safety

### Linting (`npm run lint`)
**Purpose**: Code style, best practices, and consistency  
**Checks**:
- ESLint rule compliance
- Import organization
- Unused variable detection
- Code formatting standards
- Security-related patterns

**Green Light**: No linting errors, consistent code style

### Unit Tests (`npm run test:unit`)
**Purpose**: Component and function-level testing  
**Checks**:
- All unit tests pass
- Minimum coverage thresholds met
- Test isolation maintained
- Mock dependencies working

**Green Light**: 100% test pass rate, coverage targets met

### E2E Tests (`npm run test:e2e`)
**Purpose**: User journey and integration testing  
**Checks**:
- Critical user flows work end-to-end
- Page rendering and navigation
- Form submissions and interactions
- Cross-browser compatibility

**Green Light**: All user journeys complete successfully

### Security Scan
**Purpose**: Vulnerability detection and security compliance  
**Checks**:
- Dependency vulnerabilities
- Code security patterns
- Input validation
- Authentication/authorization
- Secret exposure prevention

**Green Light**: No high/critical vulnerabilities, secure patterns used

### Build Verification (`npm run build`)
**Purpose**: Production build success and optimization  
**Checks**:
- Clean production build
- Bundle size limits
- Asset optimization
- Environment configuration
- Runtime error prevention

**Green Light**: Successful production build, optimized assets

## What "Green Lights" Mean

### ✅ All Checks Passing
- Code is ready for production deployment
- Meets all quality and security standards
- Safe to merge to main branch
- No breaking changes introduced

### ⚠️ Advisory Warnings
- Non-blocking issues identified
- Recommendations for improvement
- Style or performance suggestions
- Future maintenance considerations

### ❌ Blocking Failures
- Must be fixed before merge
- Breaks existing functionality
- Security vulnerabilities present
- Quality standards not met

## Failure Handling

### Common Failure Patterns

**TypeScript Errors**:
```bash
# Fix type issues
npm run typecheck
# Review and resolve all type errors
```

**Linting Issues**:
```bash
# Auto-fix where possible
npm run lint -- --fix
# Manually resolve remaining issues
```

**Test Failures**:
```bash
# Run tests with detailed output
npm run test:unit -- --verbose
# Fix failing tests or update snapshots
```

**Build Failures**:
```bash
# Check for build-specific issues
npm run build
# Review bundle analysis and fix imports
```

### Recovery Strategies

1. **Incremental Fixes**: Address one gate at a time
2. **Rollback Changes**: Revert to last working state if needed
3. **Isolation Testing**: Test components in isolation
4. **Dependency Updates**: Ensure all packages are current

## AI Integration

### AI-Powered Quality Checks
**Security Scan**: Automatic vulnerability detection with semantic analysis  
**PR Review**: Advisory feedback via `@claude /review` mention  
**Code Analysis**: Context-aware suggestions for improvements

### Human Oversight
- All AI feedback is **advisory only**
- Human review remains **authoritative**
- Manual approval required for **all merges**
- **Promote label** system ensures human oversight

### Quality Thresholds
- **Zero tolerance** for security vulnerabilities
- **High bar** for code quality and testing
- **Pragmatic approach** to advisory recommendations
- **Continuous improvement** through feedback loops

---
*Quality gates ensure reliable, secure, and maintainable code while supporting rapid development velocity*