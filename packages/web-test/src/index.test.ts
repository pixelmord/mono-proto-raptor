import { expect, test } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto(process.env.BASE_URL as string);
  const button = page.getByRole('button');
  await expect(button).toHaveText('hello!');
});
