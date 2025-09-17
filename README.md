# Vibe Base UI

Base repo for UI vibe coding - A comprehensive design system and component library.

## 🏗️ Architecture

This monorepo follows a structured approach to UI development:

- **apps/** - Applications (e.g., showcase website)
- **packages/** - Core packages (design-tokens, headless, react, wc, utils)
- **vendor/** - External dependency mirrors (platform & ui-kits)
- **ai/** - AI collaboration files (prompts, guardrails, specs)
- **docs/** - Documentation
- **storybook/** - Component documentation & demos
- **.github/** - Workflows, CODEOWNERS, PR templates

## ✨ Features

- **TypeScript strict mode** - Type safety throughout
- **Vitest testing** - Fast and reliable testing
- **Next.js website** - Modern showcase application
- **Vite + Rollup** - Optimized development and build
- **Style Dictionary** - Systematic design token management
- **Headless hooks** - Pure logic, framework-agnostic

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm dev

# Run tests
pnpm test

# Start Storybook
pnpm storybook
```

## 📦 Packages

- **@vibe-base-ui/react** - React components with TypeScript
- **@vibe-base-ui/wc** - Web Components built with Lit
- **@vibe-base-ui/headless** - Framework-agnostic logic hooks
- **@vibe-base-ui/design-tokens** - Design system tokens
- **@vibe-base-ui/utils** - Shared utility functions

## 🔧 Development

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.
