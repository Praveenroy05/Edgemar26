// Textbox
// radio and checkbox
// get the text value of an element or multiple elements


import {test, expect} from '@playwright/test'


test("Enter the value inside the text value", async ({page}) => {
    // goto(url:string) - Launch the url on the browser
    await page.goto("https://testautomationpractice.blogspot.com/")
    // fill("string") -  Enter the value inside the input field
    await page.getByPlaceholder("Enter Name").fill("Testing")
    // toHaveValue(string) - It checks if any element have the entered values. This is only available for input field

    await expect(page.getByPlaceholder("Enter Name")).toHaveValue("Testing")

    await page.locator("#textarea").fill("NY")

    // pressSequentially("string") - This will be entered inside the input field char by character
    await page.waitForTimeout(2000)

    await page.getByPlaceholder("Enter EMail").pressSequentially("name@example.com", {delay: 100})
})