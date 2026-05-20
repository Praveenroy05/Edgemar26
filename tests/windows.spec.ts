// Multiple tabs/ Windows - "popup" event  - page.waitForEvent("popup")

import {test, expect} from '@playwright/test'

test("Multiple Windows handling", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 = page.waitForEvent("popup") // Promise - Pending, success, rejected

    // click on the button which is responsible for generation of "popup" event
    await page.locator("#Tabbed button").click()

    // Waiting for the final result of the waitForEvent("popup")

    const newPage = await page1

    // Perform any action on the new tab/window we have to use newPage
    await newPage.getByText("Downloads", {exact: true}).click()
    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")

    // Come back to the main/original page and perform any action - start using page

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})