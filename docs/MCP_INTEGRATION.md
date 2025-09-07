# MCP Integration Guide

This starter template includes Model Context Protocol (MCP) integrations for enhanced development workflow with Claude Code.

## Available MCPs

### 1. Sentry MCP 🔍
**Purpose**: Error monitoring and debugging  
**Configuration**: Set `NEXT_PUBLIC_SENTRY_DSN` in `.env.local`

**Features**:
- Automatic error capture and reporting
- Performance monitoring and tracing
- Session replay for debugging
- User feedback collection
- Custom error boundaries

**Usage**:
```typescript
import { monitoring } from '@/lib/adapters/sentry';

// Capture errors
monitoring.captureException(new Error('Something went wrong'), {
  tags: { source: 'payment', type: 'validation' },
  level: 'error'
});

// Log messages
monitoring.captureMessage('Payment processed successfully', {
  level: 'info'
});
```

**Test Integration**:
- Visit `/test-monitoring` to test error reporting
- Run `pnpm debug:sentry` to check configuration

### 2. Vercel MCP 🚀
**Purpose**: Deployment and project management  
**Configuration**: Authenticated via Vercel CLI

**Features**:
- Deploy applications directly from Claude Code
- Monitor deployment status and logs
- Manage environment variables
- Check domain availability

**Usage Examples**:
```bash
# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# Manage environment variables
vercel env ls
```

### 3. Playwright MCP 🎭
**Purpose**: Browser automation and E2E testing  
**Configuration**: Included in `@playwright/test`

**Features**:
- Automated browser testing
- Screenshot and video capture
- Network request monitoring
- Cross-browser compatibility testing

**Usage**:
```bash
# Run E2E tests
pnpm test:e2e

# Run tests in headed mode
npx playwright test --headed
```

### 4. Jam MCP 🐛
**Purpose**: Bug reporting and user feedback  
**Configuration**: No setup required

**Features**:
- Capture user sessions with errors
- Video replay of bugs
- Network request logging
- Console error capture

## Integration Patterns

### Adapter Pattern
All external services use the adapter pattern for consistency:

```typescript
// src/lib/adapters/sentry.ts
export interface MonitoringAdapter {
  captureException: (error: Error, context?: ErrorContext) => void;
  // ... other methods
}

// Easy to swap implementations
export const monitoring: MonitoringAdapter = 
  env.NEXT_PUBLIC_SENTRY_DSN ? new SentryAdapter() : new NoOpAdapter();
```

### Environment Management
All configuration goes through the validated env system:

```typescript
// src/lib/env.ts
client: {
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
},
```

## Development Workflow

### 1. Daily Development
```bash
# Health check
pnpm debug:health

# Check environment
pnpm debug:env

# Test Sentry integration
pnpm debug:sentry
```

### 2. Debugging Issues
1. Use Claude Code to search logs in Sentry MCP
2. Test reproductions with Playwright MCP
3. Deploy fixes with Vercel MCP
4. Collect user feedback with Jam MCP

### 3. VS Code Integration
Use the Command Palette (`Ctrl+Shift+P`) and run:
- "Tasks: Run Task" → "Debug: Health Check"
- "Tasks: Run Task" → "Debug: Check Sentry"
- "Tasks: Run Task" → "Deploy: Vercel"

## Configuration Files

### Sentry Setup
- `sentry.client.config.ts` - Browser error capture
- `sentry.server.config.ts` - Server-side monitoring  
- `sentry.edge.config.ts` - Edge runtime support
- `src/instrumentation.ts` - Next.js integration hook

### Debug Scripts
- `scripts/debug.ts` - Utility commands
- `.vscode/tasks.json` - VS Code task definitions

## Environment Variables

Required for full MCP integration:

```bash
# Sentry (for error monitoring)
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
SENTRY_ORG=your-org
SENTRY_PROJECT=your-project

# Vercel (authenticated via CLI)
# No additional env vars needed

# Development
NODE_ENV=development
NEXT_PUBLIC_APP_NAME="Your App Name"
```

## Troubleshooting

### Sentry Issues
1. Check DSN configuration: `pnpm debug:sentry`
2. Verify instrumentation hook is working
3. Test with `/test-monitoring` page
4. Check Sentry project settings

### Vercel Issues
1. Authenticate: `vercel login`
2. Link project: `vercel link`
3. Check environment variables: `vercel env ls`

### MCP Connection Issues
1. Verify Claude Code MCP setup
2. Check authentication tokens
3. Test connections individually
4. Review MCP server logs

## Best Practices

### Error Handling
```typescript
// Always use the adapter pattern
import { monitoring } from '@/lib/adapters/sentry';

// Provide context with errors
monitoring.captureException(error, {
  tags: { feature: 'auth', action: 'login' },
  user: { id: userId },
  level: 'error'
});
```

### Performance Monitoring
```typescript
// Trace important operations
const transaction = monitoring.startTransaction('payment-process');
try {
  await processPayment();
  transaction.finish();
} catch (error) {
  monitoring.captureException(error);
  transaction.finish();
}
```

### Environment Separation
- Development: Full logging, local testing
- Staging: Reduced sampling, real integrations
- Production: Minimal sampling, full monitoring

## Security Considerations

1. **Never commit secrets**: All sensitive data in `.env.local`
2. **Use environment validation**: Type-safe env with Zod
3. **Filter sensitive data**: Configure `beforeSend` hooks
4. **Audit access**: Review MCP permissions regularly

## Migration Guide

### From No Monitoring
1. Add Sentry DSN to environment
2. Configure error boundaries
3. Test with `/test-monitoring`
4. Deploy and verify

### From Other Tools
1. Export existing error data
2. Configure Sentry project
3. Update error handling code
4. Gradually migrate alerts

This integration provides a complete monitoring and debugging solution that works seamlessly with Claude Code's MCP capabilities.