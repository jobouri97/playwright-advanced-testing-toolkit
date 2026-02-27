import { test, expect } from '@playwright/test';

test('race within page: DOM detachment flake @flaky', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.title')).toHaveText('Products');

  const add = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  const remove = page.locator('[data-test="remove-sauce-labs-backpack"]');

  await Promise.all([
    add.click(),
    add.click(),
    add.click(),
  ]);

  await Promise.all([
    remove.click(),
    remove.click(),
  ]);

  const badge = page.locator('.shopping_cart_badge');

  await expect(badge).toHaveText('1');
});


test('fixed: sync with UI state to avoid detachment @stable', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.title')).toHaveText('Products');

  const add = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  const remove = page.locator('[data-test="remove-sauce-labs-backpack"]');
  const badge = page.locator('.shopping_cart_badge');

  await add.click();
  await expect(remove).toBeVisible();
  await expect(badge).toHaveText('1');

  await remove.click();
  await expect(add).toBeVisible();
  await expect(badge).toHaveCount(0);
});