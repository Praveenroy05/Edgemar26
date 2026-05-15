// 1. Developed using select tag - <select> - selctOption() method is used to select the option from the dropdown list
    // 1. Launch the url
    // 2. Identify the drop down element
    // 3. Use selectOption() method to select the option from the dropdown list

// 2. Developed using div tag - <div> or <ul> and <li> tags  - click() method is used to select the option from the dropdown list

    // 1. Launch the url
    // 2. Identify the drop down element
    // 3. Click on the drop down element to open the dropdown list
    // 4. Identify the option from the dropdown list and click on it to select the option

import {test, expect} from '@playwright/test'

test("Drop down developed using select tag", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#country").selectOption("germany")
    await page.locator("#country").selectOption({value:"india"})
    await page.locator("#country").selectOption({label:"China"})
    await page.locator("#country").selectOption({index:5})
    await page.locator("#colors").selectOption(["red", "green"])
    await page.locator("#colors").selectOption([{value:'yellow'}, {label:'White'},{index: 1}])
})

test("Drop down developed using non select tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#withOptGroup").click()
    await page.locator("#react-select-2-option-0-1").click()

})

