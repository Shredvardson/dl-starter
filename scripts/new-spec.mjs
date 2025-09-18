#!/usr/bin/env node

/**
 * Enhanced Spec Scaffolding Script with Lane Detection
 * 
 * Creates new specification directories with proper structure,
 * detects development lanes, and links to GitHub issues.
 * 
 * Usage:
 *   npm run new-spec -- "Feature Name" [--issue=123] [--lane=human|ai]
 *   node scripts/new-spec.mjs "Feature Name" [--issue=123] [--lane=human|ai]
 */

import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

// Configuration
const SPECS_DIR = join(PROJECT_ROOT, 'specs');
const CONSTITUTION_PATH = join(PROJECT_ROOT, 'docs', 'constitution.md');
const RISK_POLICY_PATH = join(PROJECT_ROOT, 'docs', 'llm', 'risk-policy.json');

// Lane detection patterns
const LANE_PATTERNS = {
  ai: [
    /^bots\/claude\//,
    /\[AI\]/i,
    /automated/i,
    /claude/i
  ],
  human: [
    /^feature\//,
    /^fix\//,
    /^refactor\//,
    /\[HUMAN\]/i
  ]
};

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('❌ Error: Spec name is required');
    console.log('Usage: npm run new-spec -- "Feature Name" [--issue=123] [--lane=human|ai]');
    process.exit(1);
  }
  
  const specName = args[0];
  const options = {};
  
  // Parse additional arguments
  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    
    if (arg.startsWith('--issue=')) {
      options.issue = arg.split('=')[1];
    } else if (arg.startsWith('--lane=')) {
      const lane = arg.split('=')[1];
      if (!['human', 'ai'].includes(lane)) {
        console.error('❌ Error: Lane must be "human" or "ai"');
        process.exit(1);
      }
      options.lane = lane;
    } else if (arg === '--help' || arg === '-h') {
      showHelp();
      process.exit(0);
    }
  }
  
  return { specName, ...options };
}

/**
 * Show help information
 */
function showHelp() {
  console.log(`
Enhanced Spec Scaffolding Script

USAGE:
  npm run new-spec -- "Feature Name" [OPTIONS]
  node scripts/new-spec.mjs "Feature Name" [OPTIONS]

OPTIONS:
  --issue=NUMBER     Link to GitHub issue number
  --lane=LANE        Specify development lane (human|ai)
  --help, -h         Show this help message

EXAMPLES:
  npm run new-spec -- "User Authentication"
  npm run new-spec -- "API Rate Limiting" --issue=42
  npm run new-spec -- "AI Code Review" --lane=ai --issue=123

DEVELOPMENT LANES:
  human    Human-driven development (default)
  ai       AI-assisted development with human oversight

The script will:
1. Detect the current development lane automatically
2. Create a properly numbered spec directory
3. Generate README.md and DESIGN.md templates
4. Link to GitHub issues if specified
5. Apply constitutional compliance checks
`);
}

/**
 * Detect current development lane
 */
async function detectLane(forceLane = null) {
  if (forceLane) {
    console.log(`🎯 Using specified lane: ${forceLane}`);
    return forceLane;
  }
  
  try {
    // Check current git branch
    const currentBranch = await execCommand('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
    console.log(`🌿 Current branch: ${currentBranch}`);
    
    // Check AI patterns
    for (const pattern of LANE_PATTERNS.ai) {
      if (pattern.test(currentBranch)) {
        console.log(`🤖 AI lane detected from branch pattern: ${pattern}`);
        return 'ai';
      }
    }
    
    // Check human patterns
    for (const pattern of LANE_PATTERNS.human) {
      if (pattern.test(currentBranch)) {
        console.log(`👤 Human lane detected from branch pattern: ${pattern}`);
        return 'human';
      }
    }
    
    // Check commit author for AI indicators
    const lastCommitAuthor = await execCommand('git', ['log', '-1', '--format=%an']);
    if (lastCommitAuthor.toLowerCase().includes('claude') || 
        lastCommitAuthor.toLowerCase().includes('bot')) {
      console.log(`🤖 AI lane detected from commit author: ${lastCommitAuthor}`);
      return 'ai';
    }
    
    // Default to human lane
    console.log(`👤 Defaulting to human lane`);
    return 'human';
    
  } catch (error) {
    console.warn('⚠️ Warning: Could not detect lane automatically, defaulting to human');
    return 'human';
  }
}

/**
 * Get next spec number
 */
async function getNextSpecNumber() {
  try {
    await fs.access(SPECS_DIR);
  } catch {
    // Specs directory doesn't exist, start with 001
    return 1;
  }
  
  const entries = await fs.readdir(SPECS_DIR, { withFileTypes: true });
  const specDirs = entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .filter(name => /^\d{3}-/.test(name))
    .map(name => parseInt(name.slice(0, 3)))
    .sort((a, b) => a - b);
  
  return specDirs.length > 0 ? Math.max(...specDirs) + 1 : 1;
}

/**
 * Sanitize spec name for directory
 */
function sanitizeSpecName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Validate GitHub issue
 */
async function validateGitHubIssue(issueNumber) {
  if (!issueNumber) return null;
  
  try {
    const result = await execCommand('gh', ['issue', 'view', issueNumber, '--json', 'title,state,url']);
    const issue = JSON.parse(result);
    
    if (issue.state === 'CLOSED') {
      console.warn(`⚠️ Warning: Issue #${issueNumber} is closed`);
    }
    
    console.log(`🔗 Linked to issue #${issueNumber}: ${issue.title}`);
    return {
      number: issueNumber,
      title: issue.title,
      url: issue.url,
      state: issue.state
    };
  } catch (error) {
    console.warn(`⚠️ Warning: Could not validate GitHub issue #${issueNumber}: ${error.message}`);
    return {
      number: issueNumber,
      title: 'Unknown',
      url: `https://github.com/owner/repo/issues/${issueNumber}`,
      state: 'UNKNOWN'
    };
  }
}

/**
 * Load constitutional requirements
 */
async function loadConstitutionalRequirements() {
  try {
    const constitution = await fs.readFile(CONSTITUTION_PATH, 'utf8');
    const riskPolicy = JSON.parse(await fs.readFile(RISK_POLICY_PATH, 'utf8'));
    
    return {
      hasConstitution: true,
      hasRiskPolicy: true,
      securityRequired: constitution.includes('Security First'),
      testingRequired: constitution.includes('Test-Driven'),
      laneIsolation: constitution.includes('Lane Coordination')
    };
  } catch (error) {
    console.warn('⚠️ Warning: Could not load constitutional requirements');
    return {
      hasConstitution: false,
      hasRiskPolicy: false,
      securityRequired: true,
      testingRequired: true,
      laneIsolation: true
    };
  }
}

/**
 * Generate README template
 */
function generateReadmeTemplate(specNumber, specName, lane, issue, constitutional) {
  const formattedNumber = String(specNumber).padStart(3, '0');
  const timestamp = new Date().toISOString().split('T')[0];
  
  let template = `# Spec ${formattedNumber}: ${specName}

**Status:** Draft  
**Created:** ${timestamp}  
**Development Lane:** ${lane.charAt(0).toUpperCase() + lane.slice(1)}  
`;

  if (issue) {
    template += `**Related Issue:** [#${issue.number}](${issue.url}) - ${issue.title}  `;
  }

  template += `
**Author:** ${lane === 'ai' ? 'AI-Assisted (Claude)' : 'Human Developer'}  

## Overview

${specName} specification defines the requirements, design, and implementation approach for this feature.

## Requirements

### Functional Requirements

- [ ] Requirement 1
- [ ] Requirement 2
- [ ] Requirement 3

### Non-Functional Requirements

`;

  if (constitutional.securityRequired) {
    template += `
#### Security Requirements
- [ ] Input validation and sanitization
- [ ] Authentication and authorization
- [ ] Data protection and privacy compliance
- [ ] Secure communication protocols
`;
  }

  if (constitutional.testingRequired) {
    template += `
#### Testing Requirements
- [ ] Unit test coverage ≥ 80%
- [ ] Integration test coverage for critical paths
- [ ] End-to-end test scenarios
- [ ] Performance testing benchmarks
`;
  }

  template += `
#### Performance Requirements
- [ ] Response time requirements
- [ ] Throughput specifications
- [ ] Scalability targets
- [ ] Resource utilization limits

#### Compliance Requirements
- [ ] Constitutional adherence
- [ ] Code quality standards
- [ ] Documentation requirements
- [ ] Accessibility standards

## Implementation Approach

### Development Strategy

`;

  if (lane === 'ai') {
    template += `This specification is developed in the **AI Development Lane** with the following considerations:

- **Human Oversight**: All AI contributions require human review and approval
- **Quality Gates**: Enhanced automated testing and validation
- **Branch Isolation**: Development restricted to \`bots/claude/*\` branches
- **Promotion Process**: Requires explicit human promotion via labels

`;
  } else {
    template += `This specification is developed in the **Human Development Lane** following standard practices:

- **Peer Review**: Standard code review process
- **Quality Gates**: Standard CI/CD pipeline validation
- **Direct Integration**: Standard merge process to main branch

`;
  }

  if (constitutional.laneIsolation) {
    template += `### Lane Coordination

- **Cross-Lane Communication**: [Describe any coordination needed]
- **Handoff Points**: [Define transition points between lanes]
- **Quality Alignment**: Both lanes follow identical quality standards

`;
  }

  template += `### Technical Approach

1. **Analysis Phase**
   - Requirements gathering
   - Technical research
   - Architecture design

2. **Implementation Phase**
   - Core functionality development
   - Testing implementation
   - Documentation creation

3. **Validation Phase**
   - Quality assurance
   - Performance validation
   - Security review

## Architecture

### High-Level Design

[Describe the overall architecture and design approach]

### Component Breakdown

[List and describe major components]

### Data Flow

[Describe how data flows through the system]

### Integration Points

[Describe how this feature integrates with existing systems]

## Testing Strategy

### Test Pyramid

- **Unit Tests**: Component-level validation
- **Integration Tests**: Inter-component communication
- **E2E Tests**: Complete user workflows
- **Performance Tests**: Load and stress testing

### Test Scenarios

[Describe key test scenarios and acceptance criteria]

## Security Considerations

`;

  if (constitutional.securityRequired) {
    template += `### Threat Model

- **Attack Vectors**: [Identify potential security threats]
- **Mitigation Strategies**: [Describe security controls]
- **Validation Requirements**: [Define security testing needs]

### Privacy Impact

- **Data Collection**: [Describe what data is collected]
- **Data Processing**: [Describe how data is processed]
- **Data Storage**: [Describe data retention and deletion]
- **User Rights**: [Describe user privacy controls]

`;
  } else {
    template += `[Security analysis will be added during implementation]

`;
  }

  template += `## Performance Considerations

### Scalability

[Describe scalability requirements and approach]

### Optimization

[Describe performance optimization strategies]

### Monitoring

[Describe monitoring and observability requirements]

## Documentation Plan

- [ ] API documentation
- [ ] User guides
- [ ] Developer documentation
- [ ] Deployment guides

## Acceptance Criteria

### Definition of Done

- [ ] All functional requirements implemented
- [ ] All non-functional requirements met
- [ ] Test coverage targets achieved
- [ ] Security review completed
- [ ] Documentation completed
- [ ] Performance benchmarks met

### Success Metrics

[Define measurable success criteria]

## Risk Assessment

### Technical Risks

- [ ] Risk 1: [Description and mitigation]
- [ ] Risk 2: [Description and mitigation]

### Process Risks

- [ ] Risk 1: [Description and mitigation]
- [ ] Risk 2: [Description and mitigation]

`;

  if (lane === 'ai') {
    template += `### AI Development Risks

- [ ] **Quality Assurance**: Enhanced validation required for AI contributions
- [ ] **Human Oversight**: Dependency on human review and approval
- [ ] **Integration Complexity**: Coordination between AI and human development lanes

`;
  }

  template += `## Timeline

### Milestones

- [ ] **Specification Complete**: [Date]
- [ ] **Implementation Start**: [Date]
- [ ] **Alpha Release**: [Date]
- [ ] **Beta Release**: [Date]
- [ ] **Production Release**: [Date]

### Dependencies

[List any dependencies on other features or external systems]

## References

- [Constitutional Requirements](../../docs/constitution.md)
`;

  if (constitutional.hasRiskPolicy) {
    template += `- [Risk Policy](../../docs/llm/risk-policy.json)
`;
  }

  if (issue) {
    template += `- [Related Issue #${issue.number}](${issue.url})
`;
  }

  template += `- [Development Workflows](../../CLAUDE.md)
- [Contributing Guidelines](../../CONTRIBUTING.md)

---

*This specification follows the Dissonance Labs Starter constitutional framework and development lane protocols.*
`;

  return template;
}

/**
 * Generate DESIGN template
 */
function generateDesignTemplate(specNumber, specName, lane, constitutional) {
  const formattedNumber = String(specNumber).padStart(3, '0');
  
  let template = `# Design Document: ${specName}

**Spec:** ${formattedNumber}  
**Development Lane:** ${lane.charAt(0).toUpperCase() + lane.slice(1)}  
**Document Type:** Technical Design  

## Architecture Overview

### System Context

[Describe where this feature fits in the overall system architecture]

### Design Principles

`;

  if (constitutional.securityRequired) {
    template += `- **Security by Design**: All components implement security controls from the ground up
`;
  }

  if (constitutional.testingRequired) {
    template += `- **Testability**: All components are designed for comprehensive testing
`;
  }

  template += `- **Modularity**: Components are loosely coupled and highly cohesive
- **Scalability**: Design supports horizontal and vertical scaling
- **Maintainability**: Code is readable, documented, and follows conventions

## Technical Specifications

### Technology Stack

#### Frontend
- **Framework**: [Specify framework]
- **State Management**: [Specify approach]
- **Styling**: [Specify solution]
- **Testing**: [Specify testing tools]

#### Backend
- **Runtime**: [Specify runtime]
- **Framework**: [Specify framework]
- **Database**: [Specify database solution]
- **API**: [Specify API design]

#### DevOps
- **CI/CD**: [Specify pipeline approach]
- **Deployment**: [Specify deployment strategy]
- **Monitoring**: [Specify monitoring solution]
- **Logging**: [Specify logging approach]

### Data Model

#### Entities

[Define data entities and their relationships]

#### Schema

\`\`\`sql
-- Database schema definitions
-- Add actual schema here
\`\`\`

#### Data Flow

[Describe how data moves through the system]

### API Design

#### Endpoints

\`\`\`typescript
// API interface definitions
interface ${specName.replace(/[^a-zA-Z0-9]/g, '')}API {
  // Add interface definitions here
}
\`\`\`

#### Authentication

[Describe authentication and authorization approach]

#### Error Handling

[Describe error handling strategy]

### Component Design

#### Core Components

[List and describe major components]

#### Component Interactions

[Describe how components interact with each other]

#### State Management

[Describe state management approach]

### Security Design

`;

  if (constitutional.securityRequired) {
    template += `#### Threat Modeling

[Analyze potential security threats and countermeasures]

#### Security Controls

- **Input Validation**: [Describe validation approach]
- **Authentication**: [Describe auth mechanism]
- **Authorization**: [Describe access control]
- **Data Protection**: [Describe encryption approach]
- **Audit Logging**: [Describe audit requirements]

#### Security Testing

[Describe security testing approach]

`;
  } else {
    template += `[Security design will be developed during implementation]

`;
  }

  template += `### Performance Design

#### Performance Requirements

[Specify performance targets]

#### Optimization Strategies

[Describe performance optimization approaches]

#### Caching Strategy

[Describe caching approach]

#### Database Optimization

[Describe database performance considerations]

### Testing Design

`;

  if (constitutional.testingRequired) {
    template += `#### Test Strategy

- **Unit Testing**: [Describe unit test approach]
- **Integration Testing**: [Describe integration test strategy]
- **E2E Testing**: [Describe end-to-end test scenarios]
- **Performance Testing**: [Describe performance test plan]

#### Test Data Management

[Describe test data strategy]

#### Continuous Testing

[Describe CI/CD testing integration]

`;
  } else {
    template += `[Testing design will be developed during implementation]

`;
  }

  template += `## Implementation Plan

### Phase 1: Foundation
- [ ] Set up basic project structure
- [ ] Implement core data models
- [ ] Set up testing framework
- [ ] Implement basic security controls

### Phase 2: Core Features
- [ ] Implement main functionality
- [ ] Add comprehensive testing
- [ ] Implement API endpoints
- [ ] Add error handling

### Phase 3: Enhancement
- [ ] Performance optimization
- [ ] Advanced features
- [ ] Enhanced security
- [ ] Documentation completion

### Phase 4: Deployment
- [ ] Production deployment
- [ ] Monitoring setup
- [ ] Performance validation
- [ ] Security audit

`;

  if (lane === 'ai') {
    template += `## AI Development Considerations

### AI-Assisted Implementation

- **Code Generation**: AI assistance for boilerplate and standard patterns
- **Test Generation**: AI-generated test cases with human validation
- **Documentation**: AI-assisted documentation with human review
- **Code Review**: AI-powered code analysis with human oversight

### Quality Assurance

- **Enhanced Validation**: Additional automated checks for AI-generated code
- **Human Checkpoints**: Required human review at key milestones
- **Regression Testing**: Comprehensive testing to prevent AI-introduced bugs
- **Performance Monitoring**: Careful monitoring of AI-generated code performance

### Lane Coordination

- **Handoff Points**: Clear definition of when work moves between lanes
- **Communication**: Structured communication between AI and human developers
- **Quality Standards**: Identical quality standards regardless of development lane

`;
  }

  template += `## Deployment Strategy

### Environment Setup

[Describe environment configuration requirements]

### Deployment Process

[Describe deployment steps and automation]

### Rollback Plan

[Describe rollback procedures]

### Monitoring and Alerting

[Describe post-deployment monitoring]

## Maintenance and Operations

### Operational Requirements

[Describe ongoing operational needs]

### Maintenance Procedures

[Describe maintenance activities]

### Upgrade Strategy

[Describe upgrade and migration approach]

## Appendices

### A. Decision Log

[Record key technical decisions and rationale]

### B. Performance Benchmarks

[Include performance test results and targets]

### C. Security Analysis

[Include detailed security analysis results]

---

*This design document is part of the Dissonance Labs Starter specification framework and follows constitutional design principles.*
`;

  return template;
}

/**
 * Execute command and return output
 */
function execCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: PROJECT_ROOT });
    let stdout = '';
    let stderr = '';
    
    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });
    
    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve(stdout.trim());
      } else {
        reject(new Error(stderr.trim() || `Command failed with code ${code}`));
      }
    });
  });
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('🚀 Enhanced Spec Scaffolding Script Starting...\n');
    
    // Parse arguments
    const { specName, issue, lane: forceLane } = parseArgs();
    console.log(`📝 Creating spec: "${specName}"`);
    
    // Detect development lane
    const lane = await detectLane(forceLane);
    
    // Validate GitHub issue if provided
    const issueData = await validateGitHubIssue(issue);
    
    // Load constitutional requirements
    const constitutional = await loadConstitutionalRequirements();
    console.log(`📋 Constitutional requirements loaded: ${constitutional.hasConstitution ? '✅' : '⚠️'}`);
    
    // Get next spec number
    const specNumber = await getNextSpecNumber();
    const formattedNumber = String(specNumber).padStart(3, '0');
    console.log(`🔢 Next spec number: ${formattedNumber}`);
    
    // Create spec directory
    const sanitizedName = sanitizeSpecName(specName);
    const specDirName = `${formattedNumber}-${sanitizedName}`;
    const specDirPath = join(SPECS_DIR, specDirName);
    
    console.log(`📁 Creating directory: ${specDirName}`);
    await fs.mkdir(specDirPath, { recursive: true });
    
    // Generate templates
    console.log('📄 Generating README.md...');
    const readmeContent = generateReadmeTemplate(specNumber, specName, lane, issueData, constitutional);
    await fs.writeFile(join(specDirPath, 'README.md'), readmeContent);
    
    console.log('📄 Generating DESIGN.md...');
    const designContent = generateDesignTemplate(specNumber, specName, lane, constitutional);
    await fs.writeFile(join(specDirPath, 'DESIGN.md'), designContent);
    
    // Create additional directories
    console.log('📁 Creating additional structure...');
    await fs.mkdir(join(specDirPath, 'assets'), { recursive: true });
    await fs.mkdir(join(specDirPath, 'examples'), { recursive: true });
    
    // Create placeholder files
    await fs.writeFile(join(specDirPath, 'assets', '.gitkeep'), '# Assets directory for spec-related files\n');
    await fs.writeFile(join(specDirPath, 'examples', '.gitkeep'), '# Examples directory for code samples\n');
    
    // Create summary report
    console.log('\n✅ Spec scaffolding completed successfully!\n');
    
    console.log('📊 Summary:');
    console.log(`   Spec Number: ${formattedNumber}`);
    console.log(`   Spec Name: ${specName}`);
    console.log(`   Directory: specs/${specDirName}`);
    console.log(`   Development Lane: ${lane}`);
    console.log(`   Constitutional Compliance: ${constitutional.hasConstitution ? '✅' : '⚠️'}`);
    
    if (issueData) {
      console.log(`   Linked Issue: #${issueData.number} (${issueData.state})`);
    }
    
    console.log('\n📝 Next Steps:');
    console.log('   1. Edit README.md to complete the specification');
    console.log('   2. Update DESIGN.md with technical details');
    console.log('   3. Add any assets or examples as needed');
    console.log('   4. Follow the constitutional development process');
    
    if (lane === 'ai') {
      console.log('\n🤖 AI Lane Reminders:');
      console.log('   - All changes require human review and approval');
      console.log('   - Use bots/claude/* branches for development');
      console.log('   - Request promotion labels for merge approval');
      console.log('   - Follow enhanced quality gates');
    }
    
    console.log(`\n🔗 View the spec: specs/${specDirName}/README.md`);
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
main();