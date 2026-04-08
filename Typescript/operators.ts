// Operators - Operator is a symbol which perform certain operations.

// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operator
// 5. Ternary Operator - Condition statement - if else

// 1. Arithmetic Operators: - Performs the mathematical calculations

   // 1. Addition (+)
   // 2. Subtraction (-)
   // 3. Multiplication (*)
   // 4. Division (/)
   // 5. Modulus (%)
   // 6. Exponential (**)
   // 7. Increment Operator (++)
   // 8. Decrement Operator (--)

let num2 = 10;
let num3 = 3;

// 1.  +

console.log(num2+num3)// 13

// 2. -
console.log(num2 - num3) // 7

// 3. *
console.log(num2 * num3) // 30

//4. /
console.log(num2/num3) // 10 / 3 - 3.33333333

// 5. Modulus (%) - Remainder after the division
console.log(num2 % num3) // 12 % 3 - 0

// 6. Exponential (**) - Power of first value to the second value - 10^3 - 10*10*10
console.log(num2 ** num3) // 10 ** 3 - 10*10*10

// 7. Increment Operator (++) -  It will increase the value of the variable by 1

let num4 = 10

// Pre-increment (++num4) - First the value of the variable will be incremented and then the action will be performed

console.log(++num4) // ++10 = 10+1 = 11


// Post-increment (num4++) - First action will be performed and then the value of the variable will be incremented.

let num5 = 5
console.log(num5++) // 5
console.log(num5) // 6
console.log(++num5) // 7

// 8. Decrement Operators(--) - It will decrease the value by 1

let num6 =10

// pre-decrement (--num6) - First the value of the variable will be decremented and then the action will be performed

console.log(--num6)// --10 = 10-1 = 9

// post decrement (num7--) - First action will be performed and then the value of the variable will be decremented.

let num7 = 7
console.log(num7--) // num7-- = num7 = num7-1 // num7 = 7-1 = 6, num7 = 6
console.log(num7) // 6 


console.log("******************************************");

// 2. Comparison Operator - Used to compare two values and return the result in the form of boolean (true/false)

     // 1. Equal to (==)
     // 2. Not Equal to (!=)
     // 3. Strict Equal to (===)
     // 4. Steict Not Equal to (!==)
     // 5. Greater than (>)
     // 6. Greater than or equal (>=)
     // 7. Less than (>)
     // 8. Less than or equal (<=)


     // Difference between =, ==, ===

     // 1. Equal to (==) - Check if the two VALUES are same or not

     let num8 = 10
     let num9 = 10.00

     console.log(num9);

     console.log(num8 == num9);

     // 2. Not Equal to (!=) - Check if the two VALUES are not same
     console.log(num8 != num9);

     // 3. Strict Equal to (===) - Check if the two VALUES and DATATYPE are same or not

     console.log(num8 === num9); // false

     // 4. Strict Not Equal to(!==) -  Check if the two VALUES or DATATYPE are not same 
     console.log(num8 !== num9);

     // 5. Greater than (>) 
     // 6. Greater than or equal (>=)
     // 7. Less than (<)
     // 8. Less than or equal (<=)

     console.log(10 > 8)
     console.log(10 >= 10)
     console.log(10 <9);
     console.log(10<=9);

console.log("*************************************************");
     // (10 ==10) - Expression

   // 3. Logical Operator - Used to combine multiple conditions to get the final result. It will also the return the result in the form of boolean (true/false)

       // 1. Logical AND (&&) - Both of the condition should be true to get the result as true
       // 2. Logical OR (||) - Either of the condition is true, it will return the result as true
       // 3. Logical NOT (!) - It will reverse the condition from true to false and vice versa

       // console.log(!(10>5));

       // 1. AND (&&)

       // true && true - true
       // true && false - false
       // false && true - false
       // false && false - false

       console.log("AND (&&)", (10 >5) && (10>9))
       console.log("AND (&&)", (10 >5) && (10>90))
       console.log("AND (&&)", (10 >50) && (10>9))
       console.log("AND (&&)", (10 >50) && (10>90))

      // 2. OR (||)

       // true || true - true
       // true || false - true
       // false || true - true
       // false || false - false

       console.log("OR (||)", (10 >5) || (10>9))
       console.log("OR (||)", (10 >5) || (10>90))
       console.log("OR (||)", (10 >50) || (10>9))
       console.log("OR (||)", (10 >50) || (10>90))

       // 3. NOT (!)
       console.log("Not",!true);
       console.log("Not",!false);
       console.log("Not", !(20>10));


       
// 4. Assignment (=) - Assigns the value to a variable
let k = 10


console.log("India" === "India");

add(4,5)
