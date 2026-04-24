// page and browser

// "page" is an an object of Page class inside Playwright which will indeitfy the single page on the browser. 

// "browser" is an instance of Browser class. It will identify the complete browser at the time of automation.

import {test, expect} from '@playwright/test'


test("Page fixture", async function({page}){
    await page.waitForTimeout(2000)
})

test("Browser fixture", async function({browser}){
   // Create a context of browser - instance of a browser
   // create a new page on the browser
   const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto("https://facebook.com")

   const page1 = await context.newPage()
   await page1.goto("https://linkedin.com")



})
