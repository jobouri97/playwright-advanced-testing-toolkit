# Flaky Case: DOM Detachment (Actionability)

## What fails
Concurrent clicks on the same element cause:
- element not stable
- element detached from DOM
- click retries until timeout

## Why it fails
UI re-renders the button (Add -> Remove), replacing the DOM node while Playwright is still trying to click.

## Fix
Make actions sequential and sync with UI state transitions (wait for Remove/Add + badge updates).

## Run
- Flaky demo: `npm run test:flaky`
- Stable fix: `npm run test:stable`