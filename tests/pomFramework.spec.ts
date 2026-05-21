// Framework - It is a design principle. Set of Guidlines

// POM - Page object model

// Page object model is a design patter used in software testing to represent a web page as an object. It is a way to organise and manage the interaction with a web page by creating the properties(variable - locator), and methods(Action - launchURL(), LoginIntoApplication(),...) of that particular page.


// This approach helps us in reducing the code duplication, improve test maintanability and enhancing the redability by encapsulating the page specifi login within a dedicated class or module.

// LoginPage.ts - Locators and methods related to login page ONLY

// POM framework from scratch:


// There are different layers that we have to create:

// 1. PAGE LAYER - Will create a package or folder (pages) // Locators and methods related to specific pages. LoginPage.ts, DashboardPage.ts, CartPage.ts,....

// 2. TEST LAYER - Will create a package or folder (tests) - Pure test case and assertion. We will call the locators and methods from the page class to the test layers. lp.loginIntoApplication() - LoginPageTest.spec.ts, DashboardPageTest.spec.ts


// 3. TEST DATA LAYER - JSON/EXCEL - TestData.json, TestData.xlsx


// 4. CONFIGURATION LAYER - playwright.config.ts - Global configuration

// 5. UTILS LAYER - We will create a utils folder - Custom function - screeshot(), scrollDown(), get data from excel

// 6. REPORT LAYER - HTML/Allure - We do not create it separately in playwright.

