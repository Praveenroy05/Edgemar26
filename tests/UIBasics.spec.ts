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


test("Radio button and checbox handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // 1. click() - Click on an element
    // 2. check() - Validates if the element is already selected if not then it will
    //click on an element
    await page.getByRole("radio", {name:'Female'}).check()
    await expect(page.getByRole("radio", {name:'Female'})).toBeChecked()

    await page.getByRole("checkbox", {name:'Wednesday'}).check()
    await expect(page.getByRole("checkbox", {name:'Wednesday'})).toBeChecked()

    await page.getByRole("checkbox", {name:'Wednesday'}).uncheck()
    await page.waitForTimeout(3000)

})


test("Get the text value of an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() - Will also get the text value from the hidden element
    // innerText() - Get the text value of the visible element on the page
    const text = await page.locator("h3.post-title").innerText()
    await expect(text).toBe("GUI Elements")

    // allInnerTexts()
    // allTextContents()
    const texts = await page.locator("h2.title").allInnerTexts()
    console.log(texts)

})




