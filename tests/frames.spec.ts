// Frames - 

// html page - You cannot integrate another html page

/*

<html> - page.goto("")
  <head></head>
  <body>

  <iframe> - framePage = page.frameLocator()
    <html> </html>
  </iframe>

  </body>
</html>



*/

import {test, expect} from '@playwright/test'

test("Frames handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")


    // frameLocator() - Which helps us in entering insdie the iframe to select the element
    const framePage = await page.frameLocator("#singleframe")

    await framePage.locator("[type='text']").first().fill("Testing")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("Testing")

    await page.getByText("Iframe with in an Iframe", {exact: true}).click()

    const outerFrame = page.frameLocator("#Multiple iframe")

    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

    await innerFrame.locator("[type='text']").first().fill("Inner Frame")
    await expect(innerFrame.locator("[type='text']").first()).toHaveValue("Inner Frame")

     // Come back to the main/original page and perform any action - start using page

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

    


})