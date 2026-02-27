import { test, expect } from '@playwright/test';

async function login(page: any) {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.title')).toHaveText('Products');
}

test('visual: cart page snapshot @visual @stable', async ({ page }) => {
  await login(page);

  // add one item so cart is not empty
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await page.click('.shopping_cart_link');
  await expect(page.locator('.title')).toHaveText('Your Cart');

  const cart = page.locator('#cart_contents_container');

  // optional: mask badge if you see flakiness (uncomment if needed)
  // const badge = page.locator('.shopping_cart_badge');

  await expect(cart).toHaveScreenshot('cart-contents.png', {
    // mask: [badge],
  });
});