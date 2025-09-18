# Commands Reference

## Available Commands

### Documentation

#### generate

**Purpose**: No description available

**When to use**: Setting up tests and TDD workflows

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: docs, testing

---

### Git Workflow

#### commit

**Purpose**: No description available

**When to use**: Setting up tests and TDD workflows

**Example**: Create conventional commit for completed feature

**Risk Level**: LOW

**Tags**: git, testing, implementation

---

#### prepare-pr

**Purpose**: No description available

**When to use**: Setting up tests and TDD workflows

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: git, testing

---

#### tag-release

**Purpose**: No description available

**When to use**: General development tasks

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: git

---

#### workflow

**Purpose**: No description available

**When to use**: Setting up tests and TDD workflows

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: git, testing

---

### GitHub Integration

#### capture-learning

**Purpose**: No description available

**When to use**: GitHub workflow and project management

**Example**: Create GitHub issue with proper templates

**Risk Level**: LOW

**Tags**: github, planning, implementation

---

#### create-issue

**Purpose**: No description available

**When to use**: GitHub workflow and project management

**Example**: Create GitHub issue with proper templates

**Risk Level**: LOW

**Tags**: github, planning, requirements

---

#### update-wiki

**Purpose**: No description available

**When to use**: GitHub workflow and project management

**Example**: Create GitHub issue with proper templates

**Risk Level**: LOW

**Tags**: github

---

### Quality Assurance

#### run-linter

**Purpose**: No description available

**When to use**: General development tasks

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: quality

---

### Review & Quality

#### self-critique

**Purpose**: No description available

**When to use**: Setting up tests and TDD workflows

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: review, testing, planning

---

### Simple Development

#### /dev:init-new-app — Initialize a new app from this starter

**Purpose**: No description available

**When to use**: Small changes and quick tasks

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: dev, planning, implementation

---

#### implement

**Purpose**: No description available

**When to use**: Small changes and quick tasks

**Example**: Build feature following established plan

**Risk Level**: HIGH (Requires Human Approval)

**Tags**: dev, testing, implementation

---

#### plan-feature

**Purpose**: No description available

**When to use**: Small changes and quick tasks

**Example**: Create technical plan for auth implementation

**Risk Level**: MEDIUM

**Tags**: dev, testing, planning, requirements

---

#### refactor-secure

**Purpose**: No description available

**When to use**: Small changes and quick tasks

**Example**: Add security improvements to API endpoints

**Risk Level**: LOW

**Tags**: dev, testing, security

---

### Spec-Driven Development

#### plan

**Purpose**: No description available

**When to use**: Complex features requiring structured approach

**Example**: Create technical plan for auth implementation

**Risk Level**: MEDIUM

**Tags**: spec, testing, security, planning, implementation, requirements

---

#### specify

**Purpose**: No description available

**When to use**: Complex features requiring structured approach

**Example**: Define requirements for user authentication system

**Risk Level**: MEDIUM

**Tags**: spec, planning, implementation, requirements

---

#### tasks

**Purpose**: No description available

**When to use**: Complex features requiring structured approach

**Example**: Break down auth feature into TDD tasks

**Risk Level**: HIGH (Requires Human Approval)

**Tags**: spec, testing, security, planning, implementation, quality

---

### Testing

#### scaffold

**Purpose**: No description available

**When to use**: Setting up tests and TDD workflows

**Example**: Standard development workflow

**Risk Level**: LOW

**Tags**: test, testing, planning, implementation

---

## Decision Framework

{
  "spec_driven_triggers": [
    "Risk: authentication/payments/data",
    "Scope: 3+ files or 2+ hours",
    "Clarity: requirements unclear",
    "Dependencies: new packages/services"
  ],
  "simple_workflow_default": [
    "Single component changes",
    "UI tweaks and styling",
    "Bug fixes",
    "Documentation updates",
    "Anything completable in 1-2 hours"
  ]
}

---
*Generated from docs/commands/index.json*
