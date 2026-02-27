import { expect, Page } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

type A11yGateOptions = {
  tags?: string[];
  allowlistedCriticalIds?: string[];
};

export async function runA11yCriticalGate(
  page: Page,
  opts: A11yGateOptions = {}
) {
  const tags = opts.tags ?? ['wcag2a', 'wcag2aa'];
  const allowlist = new Set(opts.allowlistedCriticalIds ?? []);

  const results = await new AxeBuilder({ page }).withTags(tags).analyze();
  const critical = results.violations.filter(v => v.impact === 'critical');
  const unexpectedCritical = critical.filter(v => !allowlist.has(v.id));

  expect(
    unexpectedCritical,
    JSON.stringify(
      {
        unexpectedCriticalCount: unexpectedCritical.length,
        unexpectedCritical,
        allowlistedCritical: critical.filter(v => allowlist.has(v.id)),
      },
      null,
      2
    )
  ).toEqual([]);
}