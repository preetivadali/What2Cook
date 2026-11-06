
import { test, expect } from '@playwright/test';

test('user can search, save, and delete a recipe', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('What would you like to eat?')
    .selectOption('vegetarian');

  await page.getByRole('textbox', {
    name: 'Enter ingredients separated by commas'
  }).fill('potato,tomato,mushrooms,onions');

  await page.getByRole('button', {
    name: 'Search recipes'
  }).click();

  await expect(page).toHaveURL(/\/recipes/);

  const recipeCard = page.locator('a[href^="/recipe/"]').first();

  await expect(recipeCard).toBeVisible({ timeout: 15000 });

  await recipeCard.click();

  await page.getByRole('button', {
    name: 'Save Recipe'
  }).click();

  await expect(
    page.getByRole('button', { name: /Recipe Saved/ })
  ).toBeVisible();

  await page.getByRole('link', { name: 'Saved' }).click();

  await expect(
    page.getByRole('heading', { name: 'Saved Recipes' })
  ).toBeVisible();

  const deleteButton = page.getByRole('button', {
    name: 'Delete saved recipe'
  });

  await expect(deleteButton.first()).toBeVisible();

  await deleteButton.first().click();

  await expect(
    page.getByText('No saved recipes yet.')
  ).toBeVisible();
});
