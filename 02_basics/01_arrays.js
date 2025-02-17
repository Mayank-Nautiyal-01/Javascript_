//array

const myArr=[0,1,2,3,4,5,true,"mayank"];
//javaScript array that contains multiple data types.

console.log(myArr[7]);//mayank

//js array-copy-operations creates shallow copies(it is a copy whose properties share the same reference ) ex:

let origArr = [1, 2, { a: 10, b: 20 }, 4, 5];

// Shallow copy using spread operator
let shallowCopy = [...origArr];

// Modifying the primitive data in the shallow copy
shallowCopy[0] = 100; // Changing primitive value (number)

// Modifying the object inside the shallow copy
shallowCopy[2].a = 50; // Changing object property

console.log("Original Array:", origArr);  // Output: [1, 2, { a: 50, b: 20 }, 4, 5]
console.log("Shallow Copy:", shallowCopy); // Output: [100, 2, { a: 50, b: 20 }, 4, 5]



// Primitive values (like 1 and 100 in this case) do not affect the original array because they're copied by value.

// Objects (like { a: 10, b: 20 }) are copied by reference, so changes to the object in the shallow copy will affect the original array as well.

//+++++another way of declaration
const myArr2=new Array(1,2,3,4)
console.log(myArr2)//[ 1, 2, 3, 4 ]
console.log(myArr2[2])// 3
console.log(typeof myArr2)//object


//array methods

myArr2.push(5)
console.log(myArr2)//[ 1, 2, 3, 4, 5 ]

myArr2.pop()
console.log(myArr2)//[ 1, 2, 3, 4 ]

myArr2.unshift(0)
console.log(myArr2)//[ 0, 1, 2, 3, 4 ]
//but it is not good bcz we have to shift out value think if we have thousands of values so it is not reliable.

myArr2.shift()
console.log(myArr2)//[ 1, 2, 3, 4 ]

console.log(myArr2.includes(5))//false
console.log(myArr2.includes(2))//true

console.log(myArr2.indexOf(2))//1

const newArr = myArr2.join()

console.log(newArr)//1,2,3,4
console.log(typeof newArr)//String

// slice():Use when you want to extract a portion of an array without altering the original.

// Purpose: Creates a shallow copy of a portion of an array without modifying the original array.
// Syntax: array.slice(startIndex, endIndex)
// startIndex: The index to start slicing (inclusive).
// endIndex: The index to stop slicing (exclusive). This is optional, and if not provided, it slices till the end of the array.

let arr = [1, 2, 3, 4, 5];

// Slicing the array from index 1 to index 4 (not including index 4)
let slicedArr = arr.slice(1, 4);

console.log("Original Array:", arr); // [1, 2, 3, 4, 5]
console.log("Sliced Array:", slicedArr); // [2, 3, 4]

//-----

// splice(): Use when you want to remove, add, or replace elements in the array and "modify the original array".

// Purpose: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array (optional).
// item1, item2, ...: Items to add to the array (optional).
// Key Points:

// Modifies the original array.
// Returns an array of the removed elements (if any).

let arr2 = [1, 2, 3, 4, 5];

// Removing 2 elements starting from index 1, and adding 6 and 7
let removedItems = arr2.splice(1, 2, 6, 7);

console.log("Original Array after splice:", arr2); // [1, 6, 7, 4, 5]
console.log("Removed Items:", removedItems); // [2, 3]


//diff between slice and splice

// slice():extract a portion of an array without altering the original.
//splice():remove, add, or replace elements in the array and "modify the original array"