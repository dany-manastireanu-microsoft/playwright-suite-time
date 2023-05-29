import { test, expect } from "@playwright/test";

test.describe("foo 1 start", () => {
  test.beforeAll(async () => {
    await delay(2500);
  });

  test.afterAll(async () => {
    // await delay(2500);
  });

  test("basic 1.1 test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const title = page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText("Playwright");
  });
});

test.describe("Depth1", () => {
  test.describe("Depth2", () => {
    test.describe("Depth3", () => {
        test.describe("Depth4", () => {
            test("test depth", () => {
                expect(true).toBe(true);
            })
        }); 
    });
  });
});

test.describe("foo 2 start", () => {
  test.beforeAll(async () => {});

  test.afterAll(async () => {
    // await delay(2500);
  });

  test("basic 2.1 test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const title = page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText("Playwright");
  });

  test("basic 2.2 test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const title = page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText("Playwright");
  });
});

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
