# Playwright Advanced Testing Toolkit

Advanced QA Automation project demonstrating real-world test architecture using Playwright.

## 🔍 Modules

### 1️⃣ Flaky Test Investigation

- Demonstrates DOM detachment issues
- Shows unstable concurrent actions (Promise.all)
- Provides stable fix implementation
- Command:

 ```bash
  npm run test:flaky
 ```

### 2️⃣ Accessibility (A11y) Quality Gate

Integrated axe-core
Fails only on unexpected critical violations
Supports allowlist baseline strategy

Command:

```bash
npm run test:a11y
```

### 3️⃣ Visual Regression Testing

Element-level screenshot comparison
Stable viewport handling
Cross-browser baselines

Commands:

```bash
npm run test:visual
```

### 🧠 Engineering Highlights

Structured test layers
Custom helpers & fixtures
Stable visual strategy (no full-page flakiness)
Cross-browser validation
Tag-based test execution
Snapshot lifecycle control

### 🚀 Run All Stable Tests

```bash
npm run test:stable
```

### 📂 Project Structure

tests/
  a11y/
  flaky/
  visual/
docs/
core/

### 🛠 Stack

Playwright
TypeScript
axe-core
GitHub Actions (planned)

