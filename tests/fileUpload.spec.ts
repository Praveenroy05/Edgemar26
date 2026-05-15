import {test, expect} from '@playwright/test'
import path from 'path'

test("File Upload handling", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles("") or setInputFiles(["",""])

    // console.log(__dirname)- C:\Users\pkroy\OneDrive\Pictures\EdgeTSMar2025\tests

    const filePath1 = path.join(__dirname, "../testdata/AI LLM.jpeg")
    const filePath2 = path.join(__dirname, "../testdata/AILLM1.jpg")
    // console.log(filePath1)
    //C:\Users\pkroy\OneDrive\Pictures\EdgeTSMar2025\testdata\AI LLM.jpeg

    await page.locator("#filesToUpload").setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").first()).toHaveText("AI LLM.jpeg")
    await expect(page.locator("#fileList li").last()).toHaveText("AILLM1.jpg")

})