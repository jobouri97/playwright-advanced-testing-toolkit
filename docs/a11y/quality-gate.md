# A11y: Critical Quality Gate (axe-core)

## Goal
Fail the build only when **new/unexpected critical** accessibility violations appear.

## Approach
- Run axe-core on key pages
- Filter violations by `impact === "critical"`
- Allowlist known issues in the demo app (baseline control)

## Run
- `npm run test:a11y`