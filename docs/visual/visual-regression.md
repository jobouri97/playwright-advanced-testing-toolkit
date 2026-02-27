# Visual Regression: Element Snapshots

## Goal
Catch unintended UI changes using screenshot baselines.

## Approach
- Take element screenshots (stable area) instead of full page
- Keep viewport fixed before navigation
- Use update-snapshots only when intentionally accepting UI change

## Commands
- Create/update baselines: `npx playwright test -g "@visual" --update-snapshots`
- Compare: `npm run test:visual`