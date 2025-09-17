# Contributing to Vibe Base UI

Thank you for your interest in contributing to Vibe Base UI!

## Development Setup

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/buckyos/vibe-base-ui.git
cd vibe-base-ui
```

2. Install dependencies:
```bash
pnpm install
```

3. Build all packages:
```bash
pnpm build
```

4. Run tests:
```bash
pnpm test
```

## Project Structure

```
vibe-base-ui/
├── apps/              # Applications
│   └── website/       # Next.js showcase website
├── packages/          # Library packages
│   ├── design-tokens/ # Design system tokens
│   ├── headless/      # Headless logic hooks
│   ├── react/         # React components
│   ├── utils/         # Utility functions
│   └── wc/           # Web Components
├── storybook/         # Component documentation
├── docs/             # Project documentation
├── ai/               # AI collaboration files
├── vendor/           # External dependencies
└── .github/          # GitHub templates and workflows
```

## Development Workflow

### Working on Components

1. Create your feature branch:
```bash
git checkout -b feature/component-name
```

2. Develop the component in the appropriate package
3. Add tests for your component
4. Add Storybook stories
5. Update documentation

### Testing

- Unit tests: `pnpm test`
- Type checking: `pnpm type-check`
- Linting: `pnpm lint`

### Building

- Build all packages: `pnpm build`
- Build specific package: `pnpm -C packages/react build`

## Code Standards

- **TypeScript**: Use strict mode
- **Testing**: Write tests for all new features
- **Documentation**: Update docs for API changes
- **Accessibility**: Follow WCAG 2.1 AA guidelines

## Submitting Changes

1. Ensure all tests pass
2. Add changeset if needed: `pnpm changeset`
3. Create a pull request
4. Wait for review and CI to pass

## Package Development

### React Components (`packages/react`)
- Use Vite for development
- Rollup for building
- Include TypeScript definitions

### Web Components (`packages/wc`)
- Use Lit framework
- Build with Vite + Rollup
- Framework-agnostic

### Design Tokens (`packages/design-tokens`)
- Use Style Dictionary
- Generate CSS and TypeScript outputs
- Follow design system conventions

### Headless Hooks (`packages/headless`)
- Pure logic, no UI
- Reusable across frameworks
- Comprehensive tests

## Questions?

Feel free to open an issue for any questions or clarifications!