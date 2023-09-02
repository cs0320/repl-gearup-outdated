import { test, expect } from '@playwright/test';

/**
 * The general shapes of tests in Playwright Test are:
    1. Navigate to a URL
      -> Consider writing a .beforeEach test hook to avoid repeating this step!
    2. Interact with the page
    3. Assert something about the page
 */
    test('has title', async ({ page }) => {
      // Begin tests by navigating to the URL
      // In our case, while running on local servers, it will be something like "http://localhost:3000/"
      await page.goto('https://playwright.dev/');
    
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Playwright/);
    });
    
    test('get started link', async ({ page }) => {
      // Step 1: Navigate to a URL
      // Again, starts by navigating to the URL
      await page.goto('https://playwright.dev/');
    
      // Step 2: Interact with the page
      // Locate the element you are looking for
      const getStartedLink = page.getByRole('link', { name: 'Get started' });
    
      // Interact with it: notice the "await" keyword which halts execution until the promise (successful click) is resolved.
      await getStartedLink.click();
    
      // Alternatively can be written as:
      // await page.getByRole('link', { name: 'Get started' }).click();
    
      // Step 3: Assert something about the page
      // Assertions are done by using the expect() function
      // Expects page to have a heading with the name of Installation.
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

// TODO: remove this from code as we will write this together
test('trying an input', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Test command');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Test command')).toBeVisible();
});