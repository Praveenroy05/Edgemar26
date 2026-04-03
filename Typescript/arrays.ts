// Array - 

let array = ["Java", 10,"TS", true, null, undefined, 30] 
         // [0:"Java", 1:10, 2:"TS", 3:true, 4:null, 5:undefined, 6:30]

// In array the index starts with 0.

// Syntax:
// arrayName[index] - It will return the value at the specified index in the array.

console.log(array[0])
console.log(array[1])


// Declaration of an array in TypeScript:

// 1. Using Array Literal - []
// 2. Using Array Constructor - new Array()


// 1. Using Array Literal - []
// sytax: 
// let arrayName :datatype[]= [value1, value2, value3, ...]

let arr1:number[] = [10,20,30,40,50]
let arr2:string[] = ["Java", "TS", "Python", "C++"]
let arr3 = [10, "Java", true, null]

console.log(arr3);

// 2. Using Array Constructor - new Array()
// syntax:
// let arrayName :datatype[] = new Array<datatype>(value1, value2, value3, ...)

let arr4 =  new Array<any>("10",29, true)
console.log(arr4[0]);


let emptyArray = []
emptyArray[0] = "Hello"
emptyArray[1] = 100
emptyArray[2] = false

console.log(emptyArray);


let arr5 = [10,20,30,40,50,"Pink", "java", "Python", true]

// Using for loop to iterate over the array

console.log(arr5.length);

for(let i=0; i<arr5.length; i++){
    console.log(arr5[i]);
}


// 2. By using for ...of loop

// Syntax:

let i; // Declaration of variable i
let j = 10 // initialization of variable i

console.log("************************************************");

/*

for(let element of arrayName){
  // code
}
element - It gets the value from the array one by one


*/

for(let element of arr5){
    console.log(element);
}

console.log("***************Methods of an array********************");

