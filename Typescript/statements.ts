// Condition statement - It allows us to execute the different block of code {...} based on different conditions.

// if statement  - This will handle only the positive scenario
// if else statement - This will handle both positive and negative scenario
// if else if statement - This will validate more than 1 condition
// switch statement - This will also validate more than 1 condition
// Ternary Operator - if else statement (?:)


// 1. if statement - It will execute if block of code only if the condition is true

// Syntax:
/*
if(condition){
  // code
}

*/

let isPopup = "popup"

if(isPopup == "alert"){ // "popup" == "alert"
    console.log("Close the popup");
}

// 2. if else statement - If the condition is true then if block of code will be execute and if the condition is false then it will execute the else block of code

// Syntax:

/*
if(condition){
  // code
}
else
{
  //code  
}

*/

if(isPopup == "alert"){ // "popup" == "alert"
    console.log("If Else - Close the popup");
}
else{
    console.log("Popup is not available");
}

// 3. if else if - This will validate multiple conditions. Depending on the result of the condition the specific block of code {...} will be executed.

// Syntax:

/*

if(condition1){
  // code
}
else if(condition1){
  // code
}
else if (condition2){
  // code
}
else{
  // code
}


*/

let browser = "edge"

if(browser == "chrome"){ // "edge" = "chrome"
    console.log("Launch the chrome browser");
}
else if(browser == "firefox"){ // "edge" == "firefox"
    console.log("Launch the firefox browser");
}
else if (browser == "safari"){ // "edge" == "safari"
    console.log("Launch the Safari browser");
}
else{
    console.log("Invalid browser");
}

// 4. switch statement 

// Syntax
/*

switch(expression){
    case "value":
        // block of code
        break;
    case "value1":
        // block of code
        break;
    default":
        // block of code
}

*/


let browserName = "safari"

switch(browserName){ // "chrome"
    case "chrome":
        console.log("Switch - Launch the chrome browser")
        break
    case "firefox":
        console.log("Switch - Launch the firefox browser")
        break
    case "safari":
        console.log("Switch - Launch the safari browser")
        break
    default:
        console.log("Switch - Invalid browser");

}

// When to use if else if statement

// 1. Range available in the condition to validate (marks >90)
// 2. Multiple datatypes to be validated - 
// 3. Logical operator for the validation - 

// When to use swtich statement
// 1. No range
// 2. Single DT
// 3. No Logical Op


// 5. Ternary Operator (?:) - This is similar to if else but it use inline

// Syntax:
// condition? execute this if the condition is true : execute this if the condition is false


let age = 20;

// if(age >=18){
//     console.log("You are eligible for voting");
// }
// else{
//     console.log("You are not eligible for voting");
// }

const result = (age >= 18)? "You are eligible for voting" : "You are not eligible for voting"
console.log(result);


