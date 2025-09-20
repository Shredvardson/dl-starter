# Getting Started

## Table of Contents
- [Quick Setup](#quick-setup)
- [Prerequisites](#prerequisites)
- [Environment Configuration](#environment-configuration)
- [Development Workflow](#development-workflow)
- [First Contribution](#first-contribution)
- [Verification](#verification)

## Quick Setup

### 1. Clone and Install
```bash
git clone https://github.com/Shredvardson/dl-starter.git
cd dl-starter
pnpm install
```

### 2. Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

### 3. Database Setup
```bash
# If using Supabase
npx supabase start
npx supabase db push
```

### 4. Verify Installation
```bash
npm run doctor
npm run build
npm run dev
```

Visit `http://localhost:3000` to confirm everything works.

## Prerequisites

### Required Tools
- **Node.js**: 18.17+ or 20.4+
- **pnpm**: 9.12.0+ (package manager)
- **Git**: 2.30+ with conventional commits
- **VS Code**: Recommended with TypeScript extensions

### Optional Tools
- **Supabase CLI**: For database management
- **GitHub CLI**: For PR and issue management
- **Docker**: For local Supabase development

### System Requirements
- **Memory**: 8GB+ RAM recommended
- **Storage**: 2GB+ for dependencies and build cache
- **OS**: macOS, Linux, or Windows with WSL2

## Environment Configuration

### Required Variables
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional: Analytics (disabled by default)
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# Optional: Sentry monitoring
SENTRY_DSN=your_sentry_dsn
```

### Development vs Production
- **Development**: Uses `.env.local` for local overrides
- **Production**: Environment variables set in Vercel dashboard
- **Testing**: Uses test-specific configurations

## Development Workflow

### Choose Your Lane

#### For Simple Changes (Bug fixes, small features):
```bash
/dev:plan-feature
# Follow prompts to create branch and plan work
```

#### For Complex Features (New functionality, architecture):
```bash
/specify
# Create detailed specification

/plan  
# Convert to implementation plan

/tasks
# Break into actionable tasks
```

### Quality Workflow
```bash
# Before every commit
npm run lint
npm run typecheck
npm run test:unit

# Before creating PR
npm run build
npm run test:e2e
npm run doctor
```

### Git Workflow
```bash
# Start new work
npm run git:start
# Follow prompts for branch creation

# Check status
npm run git:status

# Clean up after merge
npm run git:finish
```

## First Contribution

### Step 1: Pick a Simple Task
- Fix a typo in documentation
- Add a small UI improvement
- Update a configuration file

### Step 2: Use Simple Workflow
```bash
/dev:plan-feature
# Describe what you want to change
# AI will create branch and plan
```

### Step 3: Implement Changes
```bash
# Make your changes
# Write/update tests
npm run test:unit
```

### Step 4: Quality Check
```bash
npm run lint
npm run typecheck
npm run build
```

### Step 5: Create PR
```bash
/git:prepare-pr
# AI handles commit, push, and PR creation
```

### Step 6: Address Review
- Respond to any reviewer feedback
- Make requested changes
- Re-run quality checks

## Verification

### Health Check Commands
```bash
# Full project health
npm run doctor

# Type safety
npm run typecheck

# Code quality
npm run lint

# Test coverage
npm run test:unit

# Build verification
npm run build

# E2E functionality
npm run test:e2e
```

### Common Issues

**Build Failures**:
```bash
# Clear cache and reinstall
rm -rf node_modules .turbo
pnpm install
npm run build
```

**Test Failures**:
```bash
# Run tests with verbose output
npm run test:unit -- --verbose
npm run test:e2e -- --debug
```

**Environment Issues**:
```bash
# Check environment setup
npm run debug:env
npm run debug:health
```

### Getting Help

**Documentation**:
- [Commands Reference](Commands.md) - Available slash commands
- [Quality Gates](Quality-Gates.md) - Understanding CI checks
- [Architecture](Architecture.md) - System overview

**Community**:
- GitHub Issues for bug reports
- GitHub Discussions for questions
- Project Wiki for references
- [CLAUDE.md](https://github.com/Shredvardson/dl-starter/blob/main/CLAUDE.md) for daily workflow

**AI Assistance**:
- Use slash commands for guided workflows
- Mention `@claude /review` in PRs for AI feedback
- Follow command prompts for step-by-step guidance

---
*This guide gets you productive quickly while maintaining quality standards*