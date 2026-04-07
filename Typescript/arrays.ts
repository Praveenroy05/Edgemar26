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


// 1. length - return the number of elements in the array
// Syntax: arrayName.length
console.log(arr5.length);

const arr6 = [10,20,30,"TS"] //
console.log(arr6); 

// 2. push(ele1, ele2, ele3,...) - it adds the elements at the end of an array.

// Syntax:
// arrayName.push(ele, ele1, ele2,...)

arr6.push(40,50)
console.log(arr6);

// 3. pop() - it removes the last element from an array and returns that element.

// Syntax:
// arrayName.pop()

arr6.pop()
console.log(arr6);

// 1. What is difference between push() and unshift() method in an array?
// 2. What is difference between pop() and shift() method in an array?

// 4. unshift(ele1, ele2, ele3,...) - it adds the elements at the beginning of an array.

// Syntax:
// arrayName.unshift(ele1, ele2, ele3,...)

arr6.unshift("JS", "Java")

console.log(arr6);

// 5. shift() - it removes the first element from an array and returns that element.

// Syntax:
// arrayName.shift()
arr6.shift()
console.log(arr6);

// What is difference between splice() and slice() method in an array?

// 6. splice(startIndex, deleteCount, ele1, ele2, ele3, ...) - it adds or removes the elements from an array based on the provided parameters.

// startIndex - It is the index from where the elements will be added or removed.
// deleteCount - It is the number of elements to be removed from the array from startIndex.
// ele1, ele2, ele3,... - It is the list of elements to be added in the array at startIndex.

// Syntax:
// arrayName.splice(startIndex, deleteCount, ele1, ele2, ele3,...)

arr6.splice(2,0,"Python", 100, 200)
console.log(arr6);

// 7. slice(startIndex?, endIndex?) - It returns a new array containing the elements from startIndex to endIndex-1.
// startIndex - It is the index from where the elements will be copied. It is optional. If it is not provided then it will be considered as 0.
// endIndex(Exclusive) - It is the index till where the elements will be copied. It is optional. If it is not provided then it will be considered as arrayName.length.

// Syntax:
// arrayName.slice(startIndex?, endIndex?)

const sliceArr = arr6.slice(2,5) // 2,3,4
console.log(sliceArr);


// 8. indexOf(ele, fromIndex?) - It returns the first index of the specified element in the array. If the element is not found then it returns -1.

// ele - It is the element whose index is to be found.
// fromIndex - It is the index from where the search will start. It is optional. If it is not provided then it will be considered as 0.

let arr7 = [10,20,30,40,50,10,20,30,40]
console.log(arr7.indexOf(30));

// Write a program to find the number of occurrences of an element in an array using.

let count = 0
for (let element of arr7){
    if(element === 30){
        count++
    }
}
console.log(count);

let count1 = 0
let index = arr7.indexOf(30) 
while(index !==-1){
    count1++
    index = arr7.indexOf(30, index+1)
}

console.log(count1);


// 9. lastIndexOf(ele, fromIndex?) - It returns the last index of the specified element in the array. If the element is not found then it returns -1.

// ele - It is the element whose index is to be found.
// fromIndex - It is the index from where the search will start. It is optional. If it is not provided then it will be considered as arrayName.length-1.

console.log(arr7.lastIndexOf(30));


// 10 .includes(ele, fromIndex?) - It returns true if the specified element is found in the array otherwise it returns false.

// ele - It is the element to be searched in the array.
// fromIndex - It is the index from where the search will start. It is optional. If it is not provided then it will be considered as 0.

console.log(arr7.includes(50));
console.log(arr7.includes(50, 5));

// let arr7 = [10,20,30,40,50,10,20,30,40]


// 11. reverse() - It reverses the order of the elements in the array.
// Syntax:
// arrayName.reverse()
arr7.reverse()
console.log(arr7);

// 12. toString() - It returns a string representation of the array.
// Syntax:
// arrayName.toString()
console.log(arr7);
console.log(arr7.toString());

// 13. join(separator?) - It returns a string representation of the array with the specified separator between the elements.
// Syntax:
// arrayName.join(separator?)

let arr8 = ["20", "11", "2026"] // 20/11/2026, 20-11-2026
console.log(arr8.join("/"));
console.log(arr8.join("-"));



let result =""
for(let i=0; i<5; i++){
    result = result +i + " "
}
console.log(result);

