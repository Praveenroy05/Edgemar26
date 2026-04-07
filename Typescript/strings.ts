// string - Combination of characters - Hello

// 3 Ways in which we can declare a string

/*

1. By using single quote ('') - String literal
2. By using double quote ("") - String literal
3. By using backtick (``) - Template literal

*/

let singleQuote1 = 'This is a single quote string'
let doubleQuote1 = "This is a double quote"

let backtick1 = `This is a backtick string`

let age1 = 30
// ${variable}
let message1 = `Your age is ${age1}`
console.log(message1);

let multipleLines = `This is a string
that spans multiple
lines`
console.log(multipleLines);

// str abcdabcd - a2b2c2d2



console.log("*******************************************");

// 1. length - It will return the length of the string

let str1 = "Hello World"
console.log(str1.length);

// 2. charAt(index) - It will return the character at the specified index in the string
// Syntax:
// stringName.charAt(index)
console.log(str1.charAt(2))

// 3. concat(string2) - It will concatenate the string with another string
// Syntax:
// string1.concat(string2)
const str2 = str1.concat(" Welcome to TypeScript")
console.log(str2)
console.log(str1)

// 4. includes(substring) - It will return true if the substring is present in the string, otherwise it will return false
console.log(str1.includes("World"))

// 5. indexOf(substring) - It will return the index of the first occurrence of the substring in the string, otherwise it will return -1

// 6. lastIndexOf(substring) - It will return the index of the last occurrence of the substring in the string, otherwise it will return -1

// 7. slice(startIndex?, endIndex?) - It will return a substring from the start index to the end index (excluding the end index)
// Syntax:

let str3 = "This is a string"
console.log(str3.slice(3,7)) // 3,4,5,6
console.log(str3.slice())
console.log(str3.slice(7,3));

// 8. substring(startIndex, endIndex?) - It will return a substring from the start index to the end index (excluding the end index)
// Syntax:
// stringName.substring(startIndex, endIndex)
console.log(str3.substring(4));
console.log(str3.substring(3,7)) 
console.log(str3.substring(7,3))

// 1. Start index and end index in the slice method are optional but in substring the startIndex is mandatory and emd Index is optional
// 2. If the start index is greater than the end index then in slice method it will return an empty string but in substring method it will swap the start index and end index and then return the substring


// 9. startsWith(string) - It chceks if the string is starting with the specified string or character
// Syntax"
// stringName.startsWith(string or char)

console.log(str3.startsWith("T"))
console.log(str3.startsWith("t"))
console.log(str3.startsWith("This"))

// 10. endsWith() - It checks if the string is ending with the specified string or character

// 11. toLowerCase() - It converts the string to a lower case letter
// Syntax:
// stringName.toLowerCase()
console.log(str3)
console.log(str3.toLowerCase())

// 12. toUpperCase() - It converts the string to an upper case letter
// Syntax:
// stringName.toUpperCase()
console.log(str3.toUpperCase())

// 13. trim() - It removes the whitespace from both ends of the string
// Syntax:
// stringName.trim()

let str4 = "   Hello World   "
console.log(str4.trim() == "Hello World")


// 14. trimStart() - It removes the whitespace from the start of the string
// Syntax:
// stringName.trimStart()   
console.log(str4.trimStart() == "Hello World   ")

// 15. trimEnd() - It removes the whitespace from the end of the string
// Syntax:
// stringName.trimEnd()
console.log(str4.trimEnd() == "   Hello World")