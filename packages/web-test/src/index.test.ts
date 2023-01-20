import { expect, test } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const button = page.getByRole('button');
  await expect(button).toHaveText('hello!');
});
