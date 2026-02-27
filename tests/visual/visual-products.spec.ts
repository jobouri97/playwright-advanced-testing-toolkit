import { test, expect } from '@playwright/test';

async function login(page: any) {
    await page.setViewportSize({ width: 1280, height: 720 });

    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('.title')).toHaveText('Products');
}

test.beforeEach(async ({ page }) => {
    await page.addStyleTag({
        content: `
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
        caret-color: transparent !important;
      }
    `,
    });
});

test('visual: products page snapshot @visual @stable', async ({ page }) => {
    await login(page);

    await page.setViewportSize({ width: 1280, height: 720 });

    const inventory = page.locator('.inventory_list');
    await page.locator('.inventory_list').evaluate(el => {
        (el as HTMLElement).style.border = '5px solid red';
    });
    await expect(inventory).toHaveScreenshot('products-inventory.png');
});
