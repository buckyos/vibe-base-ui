# Vibe Base UI Documentation

Welcome to the Vibe Base UI library documentation.

## Getting Started

### Installation

```bash
# Install the React components
npm install @vibe-base-ui/react

# Install design tokens
npm install @vibe-base-ui/design-tokens

# Install headless hooks
npm install @vibe-base-ui/headless

# Install utilities
npm install @vibe-base-ui/utils

# Install web components
npm install @vibe-base-ui/wc
```

### Basic Usage

```tsx
import { Button } from '@vibe-base-ui/react'

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  )
}
```

## Architecture

The library is organized as a monorepo with the following packages:

- **react** - React components built with headless logic and design tokens
- **wc** - Web Components built with Lit for framework-agnostic usage  
- **headless** - Pure logic hooks without UI dependencies
- **design-tokens** - Design system tokens (colors, spacing, typography)
- **utils** - Shared utility functions

## Development

See [CONTRIBUTING.md](../CONTRIBUTING.md) for development guidelines.