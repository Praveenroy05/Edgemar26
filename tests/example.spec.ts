import { test, expect } from '@playwright/test';

// page, browser - fixture - global object
// context, request
// async-await - goes together. async at function level and await at step level

test("Login validation", async function({page}){

    // await Launch the url
    // await fill the username
    // await fill the password
    // await click on  the login button
    // await Validate if the login is successful

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.waitForTimeout(2000)
    await page.locator("#username").fill("student")
    await page.locator("#password").fill("Password123")
    await page.locator("#submit").click()
    await expect(page.locator("h1.post-title")).toContainText("Successfully")


})

// JS & TS - Asynchronous

