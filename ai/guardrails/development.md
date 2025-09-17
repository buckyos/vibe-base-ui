# Development Guardrails

## Code Quality
- All code must pass TypeScript strict mode checks
- No `any` types unless absolutely necessary with justification
- All functions must have proper return types
- All React components must have proper prop types

## Performance
- Avoid unnecessary re-renders
- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load large components when appropriate

## Accessibility
- All interactive elements must be keyboard accessible
- Proper ARIA labels and roles required
- Color contrast must meet WCAG AA standards
- Screen reader compatibility required

## Security
- Sanitize all user inputs
- No direct innerHTML usage without sanitization
- Validate all external data
- No hardcoded sensitive information

## Breaking Changes
- Breaking changes require major version bump
- Must provide migration guide
- Deprecation warnings for 1 major version before removal
- Backward compatibility when possible