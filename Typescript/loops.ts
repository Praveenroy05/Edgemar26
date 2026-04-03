// Loops - Which will execute the same block of code {...} multiple times

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Duplication
// Maintenance
// Time taking process

console.log("************************");

for(let i= 1; i<=5 ; i++){
    console.log(i);
}

console.log("************************************");

// 1. for loop
    // a. for loop - Traditional for loop - If we know how many times we have to execute the loop
    // b. for ...of loop - Loop over the iterable object - Array - [1,2,3,4,5]
    // c. for ...in loop - Loop over the properties of an object - {name:"Rahul", age:30}
// 2. while loop - If we do not know how many times we have to run the iteration
// 3. do while loop - If we want to execute the loop atleast for 1 time before checking the condition


// 1. for loop - 
// Syntax:
/*

for(initialization; condition; increment/decrement){
     // block of code
     break; // optional
     continue; // optional
}

initialization - Initialiase the value of the variable to start the loop. let i = 1
condition - It will check the condition before executing the block of code. i <= 5
increment/decrement - It will update the value of the variable after executing the block of code. i++

break - It is used to exit the loop when a specific condition is met. It is optional.
continue - It is used to skip the current iteration and move to the next iteration of the loop when a specific condition is met. It is optional.


*/

// Print 1 to 10 using for loop

for(let i =1; i<=10; i++){ // i=11 11<=10
    if(i==6){
        continue
    }
    console.log(i); // 1 2 ... 9 10
}

console.log("******************while loop**********************");

// 2. while loop - If we do not know how many times we have to run the iteration - Calendar selection

// Syntax:
/*

initialization
while(condition){
    // block of code
    increment/decrement
    break
}

*/

let j =10 // j>=1

while(j>=1){
    console.log(j);
    j-- // skipping this will make the while loop infinite because the value of j will always be 10 and the condition will always be true. So, it is important to update the value of the variable in the while loop to avoid infinite loop.
}

console.log("***************do while loop********************");

// 3. do while loop - If we want to execute the loop atleast for 1 time before checking the condition

// Syntax:
/*

initialization
do{
   // block of code
   increment/decrement
   break
}while(condition);

*/

let i1 = 10
do{
    console.log(i1);
    i1--
}while(i1<1)

