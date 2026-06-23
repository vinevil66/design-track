# Conventions

## Branching
Branch names follow `feature/description` (e.g. `feature/add-login-form`).

## Commits
Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, `docs:`.

## Design tokens
All colors, spacing, font sizes, and border radii must come from the CSS custom properties defined in `src/index.css`. Never hardcode these values in component styles — reference the token instead (e.g. `padding: var(--spacing-md);`, not `padding: 16px;`).

Available tokens:
- `--color-background`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--color-border`
- `--font-size-body`, `--font-size-heading`
- `--spacing-sm`, `--spacing-md`, `--spacing-lg`
- `--border-radius-md`
