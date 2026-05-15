// Alert - "dialog" event appears on the page

// alert - dialog
// child windows - popup


import {test, expect} from '@playwright/test'

test("handling alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // Before you click on the element which is responsible for generation of al alert we need to wait for "dialog" event to appear on the page. Because playwright handled the dialog event by self or there might be a chances that we might miss capturing the dialog event.

    // Dialog 
    // accept() - To click on Ok/Yes/Submit
    // dismiss() - Cancel/No
    // message() - To get the text that appears on the alert

    page.on("dialog",async (dialog)=>{
        await console.log(dialog.message())
        await dialog.accept("Testing")
    })

    await page.locator("#alertButton").click()
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText("You entered Testing")



})