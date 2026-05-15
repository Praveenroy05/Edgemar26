// Mouse Operations:

// click - click()
// right click
// double click -dblclick()
// scroll
// Drag and Drop
// Hover

import {test, expect} from '@playwright/test'

test("Double click and right click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    // Double click - dblclick() - Double click on an element
    await page.getByText("Double-Click Me To See Alert", {exact: true}).dblclick()
    // Right click - click()
    await page.getByText("right click me", {exact: true}).click({button:'right'})
    await page.waitForTimeout(3000)

    await page.getByText("Edit", {exact: true}).click()
})

test("Scroll the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // scrollIntoViewIfNeeded() - Scroll the page until the element is visible on the page
    await page.getByText("Download Files", {exact:true}).scrollIntoViewIfNeeded()
    await page.getByText("Download Files", {exact:true}).click()
    await expect(page.locator("#generatePdf")).toBeVisible()

    // Note: Playwright automatically handle scrolling on the page.

})

test("Hover on the element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")

    //hover() - Hover on the element
    await page.getByText("Add-ons", {exact:true}).hover()
    await expect(page.getByTestId("test-id-Extra Seat")).toHaveText("Extra Seat")

})

test("Drag and Drop", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // Drag and Drop functionality would be implemented here
    const sourceElement = page.locator("#draggable")
    const targetElement = page.locator("#droppable")

    // await sourceElement.hover()
    // await page.mouse.down()
    // await targetElement.hover()
    // await page.mouse.up()

    //Locator. dragTo(Locator)- Drags the source element and drops it on the target element
    await sourceElement.dragTo(targetElement)

    await expect(page.locator("#droppable p")).toHaveText("Dropped!")
})
