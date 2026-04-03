// Datatype - Which defines what type of data a variable is storing

 // let i = [10,20,30]

// There are 2 types of data types:

// 1. Primitive Data Types - Only a single

 // Syntax:
 // 1. keyword(let/const) variableName :datatype(Optional) = value - TS
 // 2. keyword(let/const) variableName = value - JS

    // 1. number
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined

    // TS
    // 6. union (number|string) - 
    // 7. any
    // 8. void - function



// 1. number - Combination of integer(34,-45) and floating point number (23.45, -56.3545)

let num :number = 100
let num1 = 678.88797

// typeof - Operator which return the datatype of a variable

console.log(typeof num1)

// 2. string - Combination of characters - Hello

// 3 Ways in which we can declare a string

/*

1. By using single quote ('') - String literal
2. By using double quote ("") - String literal
3. By using backtick (``) - Template literal

*/

let singleQuote = 'This is a single quote string'
let doubleQuote = "This is a double quote"

let backtick = `This is a backtick string`

let age = 30
// ${variable}
let message = `Your age is ${age}`
console.log(message);

// 3. boolean - true/false
let isAdmin = true
let isEmployee = false

console.log(10<5)

// 4. null - Intentional absence of a value

let null1 :null = null

// 5. undefined - The variable has been defined but it is not assigned with any value

let var1 :undefined = undefined // Declaration
console.log(var1);

let var2
console.log(var2);

var2 = 10
console.log(var2);

let var3:number = 100
var3 = "TS"

// 6. union (number|string) - Combination of multiple data types

let var4 : (number | string | boolean) = 324325
var4 = "TS"
var4 = true

// 7. any - It can accept any type of value for this variable

let var5 :any = 100
var5 = "TS"
var5 = false
var5 = null
//var5 = undefined
console.log("Var5", var5);

// let var6:any = 10
// var6 = "JS"


// 1. By default the value of any variable is "undefined" for any type of datatype
// 2. By default the datatype of any variable is "any" for any type of variable


let var7
console.log(var7);

// console.log(typeof var7);


// 2. Non-primitive data types - More than 1 value
    // 1. Array
    // 2. Function
    // 3. Object



let n = 10
let variable_Name = 90

   