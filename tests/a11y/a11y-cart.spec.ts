import { test, expect } from '@playwright/test';
import { runA11yCriticalGate } from '../core/helpers/a11y';

async function login(page: any) {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.title')).toHaveText('Products');
}

test('a11y gate: no unexpected critical violations on Cart @a11y @stable', async ({ page }) => {
  await login(page);

  await page.click('.shopping_cart_link');
  await expect(page.locator('.title')).toHaveText('Your Cart');

  await runA11yCriticalGate(page, {
    allowlistedCriticalIds: ['select-name'], 
  });
});