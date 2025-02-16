//js is dynamically typed or Statically Typed?
// =>JavaScript is Dynamically Typed ✅
// What does it mean?
// In dynamically typed languages, the type of a variable is determined at runtime, not at compile time.
// You don't need to declare the data type of a variable explicitly.
// A variable can hold different types of values at different times.





//primitive
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

let name = "Mayank"; //string
console.log(name); //mayank

let age = 25; //number
 console.log(age);//25

 let isStudent = true;//boolean 
 console.log(isStudent);//true

 let nullValue = null; //null
 console.log(nullValue);//null

 let x; //undefined
 console.log(x);//undefined

 let id = Symbol("123"); //symbol-Creates a unique identifier.
 let anotherId = Symbol("123"); 
 console.log(id===anotherId); //false
//The reason id === anotherId returns false is because each Symbol() call creates a completely unique value, even if the description (the string inside Symbol()) is the same.


let bigNum = 12345678901234567890n; //bigInt
 console.log(bigNum); //12345678901234567890n


//Reference (non-primitive)

//Array,Objects,Functions

//Array	:List of values	
 let arr = [10, 20, 30];

  console.log(arr[0]);//10
 //Object:Key-value pairs	
 let person = { name: "Mayank", 
               age: 25 };
     console.log(person.name);          //mayank

 //Function:Block of code that runs when called	
 function  sayHello() {
     console.log("Hello!"); 
    }

    sayHello();//Hello!


    //how to know about what is datatype
    // =we can check them by typeof operator

// Data Type	     Example	            typeof Result
// String	    let str = "Hello";	        "string"

// Number	    let num = 10;	            "number"

// Boolean	   let isTrue = true;	        "boolean"

// Null	       let value = null;	        "object" (This is a known JavaScript bug)

// Undefined	let x; or let x = undefined;   "undefined"

// Symbol	    let sym = Symbol("id");	       "symbol"

// BigInt	    let bigNum = 123n;	              "bigint"

// Array	     let arr = [1, 2, 3];	        "object"

// Object	    let obj = { name: "Mayank" };	  "object"

// Function	    function test() {} or let func = () => {};	   "function"

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//here memory is of two types:
//stack and heap memory
//stack memory is used in primitive datatype
//heap memory is used in nonprimitive datatype

//stack memory:Data is copied when assigned to another variable (pass-by-value)

let a = 10;
let b = a;  // Copy of a is assigned to y
b = 20;

console.log(a); // 10
console.log(b); // 20

//Explanation:

// x = 10 is stored in the stack
// y = x makes a copy of x, so y is independent of x

//heap memory:Stores data dynamically with a reference in stack
// When assigned to another variable, only the reference (memory address) is copied

let obj1 = { name: "Mayank" };
let obj2 = obj1;  // Reference to obj1 is assigned

obj2.name = "Nautiyal"; 

console.log(obj1.name); // "Nautiyal"
console.log(obj2.name); // "Nautiyal"

// Explanation:

// obj1 is stored in the heap, but its reference is in the stack
// obj2 = obj1 copies the reference, not the actual object
// Any change in obj2 also reflects in obj1 since both point to the same heap memory

//summary:
//  Stack → Faster but stores simple data
// Heap → Slower but stores complex data