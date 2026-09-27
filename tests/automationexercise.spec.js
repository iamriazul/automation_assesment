import { test, expect } from '@playwright/test';

test('test automation @sanity', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('mriazul623@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Austcse');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://www.automationexercise.com/#google_vignette');
  await page.goto('https://www.automationexercise.com/');
  await expect(page.locator('b')).toContainText('Riazul Islam');
});