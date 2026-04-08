// Functions  - It is a set of instruction that performs a specific task

function login(){
    // fill the username
    // fill the password - #password to #pass
    // click on login button
}

// login() - This is how we call the function



// 100 Test cases - 300 lines of code - 195 lines of code you will save

// Duplication - 
// maintenance - If there is any change in the password file we need to change in all the 100 test cases - 99 steps you will save
// Reusability - We can reuse the same function in multiple test cases - 100 steps you will save


// 1. Named Function - Function declaration - When we declare a function with a name it is called named function
// 2. Anonymous function - Function expression - A function without a name is called anonymous function
// 3. Arrow function (=>) - Lambda function - A function that uses the arrow syntax is called an arrow function.
// 4. Constructor function - A function that is used to create objects is called a constructor function - Class


// Whenever you declare a function as a parameter to another function it is called a callback function.


// function sum (fun:Function){  // fun  = function()
//     fun()
// }

// sum(function name(){
//     console.log("Welcome");
// })

// 1. Named Function - Function declaration

// Syntax:
/*
function functionName(parameters:datatype(optional)):returnType(optional{
    // function body
    return
}

functionName(arguments)

*/

// 1. parametrised function and non-returning function
function sum(a:number,b:number){ // a, b - parameters
    console.log(a+b);
}

sum(10,20) // 10, 20 - arguments

function launchURL(url:string){
    // page.goto(url)
}

// const launchUR1L = (url) => page.goto(url)
// 2. parametrised function and returning function

function sum1(a, b):number{
    return a+b
}

const result = sum1(20,30)
console.log(result) // 50

// 3. Non-parametrised function and non-returning function

function greet(){
    console.log("Welcome to Typescript");
}

greet()

// 4. Non-parametrised function and returning function

function getUserName():string{
    return "Typescript"
}

const result1 = getUserName()
console.log(result1);




// 1. Difference between parameters and arguments - Parameters are the variables that are defined in the function declaration, while arguments are the values that are passed to the function when it is called.

// 2. Difference between Function declaraton and function expression - Function declaration is a named function that is defined using the function keyword, while function expression is an anonymous function that is assigned to a variable. Function declaration is hoisted, while function expression is not hoisted.


// 2. Anonymous function - Function expression - A function without a name is called anonymous function. Whenever  you define a function without a name we generally assign it to a varaible and that variable acts as the name of the function. We can also pass an anonymous function as a parameter to another function. We can also return an anonymous function from another function.

// Syntax:
/*
variable = function(parameters:datatype(optional)):returnType(optional){
    // function body
    return
}

variable(arguments)

*/


const fun = function(a,b,c){
   console.log(a+b+c);
}
fun(10,20,30) // This is how we call the function expression


// 3. Arrow function (=>) - Lambda function - A function that uses the arrow syntax is called an arrow function. Arrow functions are a shorter syntax for writing functions. 

function add (a:number,b:number){
   //  return a+b
   console.log(a+b);
};

// Syntax:
/*
variable = (parameters:datatype(optional)) => returntype(optional){
 .....
 .....
}

variable(arguments)


*/

let add1 = (a:number,b:number) => console.log(a+b)
add1(30,40)

let singleVar = a => a
let result2 = singleVar(10)
console.log(result2);




// 1. If there is only one parameter we can remove the parentheses around the parameter.
// 2. If there is only one statement in the function body we can remove the curly braces and the return keyword. implicitly it return the value.
// 3. Arrow function will not start with the "function" keyword and it will not have a name. It is always an anonymous function.









