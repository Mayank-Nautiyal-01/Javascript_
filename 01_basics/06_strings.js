const name="mayank"
const age=24

//console.log(name+age+"years")//mayank24years 
//but it is outdated and not recommended

//using `(backtick)
console.log(`Hello my name is ${name} and my age is ${age}`)
//Hello my name is mayank and my age is 24
//it is reliable  and readiable syntax 
//and we can perform operations also 

//another way of string declaration
// ==>Object-Based String Declaration (new String())
const gameName=new String("NautiBoy");
console.log(gameName)
// [String: 'NautiBoy']

//see type
console.log(typeof gameName)//object 

// Why is the output "object" instead of "string"?
// When you use new String(), JavaScript creates a String object, which is stored in heap memory.


// It acts like an object with properties and methods, like:

console.log(gameName.length);  // 8
console.log(gameName.toUpperCase());  // NAUTIBOY
console.log(gameName.charAt(2)); //u
console.log(gameName.indexOf('i'));//4
console.log(gameName.substring(0,4));//Naut
console.log(gameName.slice(-8,4));//Naut
// Step-by-Step Execution of slice:
// gameName is "NautiBoy" (length = 8).
// .slice(start, end) extracts characters from start index (inclusive) to end index (exclusive).
// Negative index: -8 means starting from (length - 8) = (8 - 8) = 0.
// End index = 4 (exclusive), so we take characters from index 0 to 3.
const newStr=" mayank   ";
console.log(newStr.trim())//mayank

const url="http://mayank.com/mayank%20nautiyal"
console.log(url.replace('%20','_'))
//http://mayank.com/mayank_nautiyal

console.log(url.includes('nautiyal'))//true

const wholeName="mayank_nautiyal"
console.log(wholeName.split('_'))
//[ 'mayank', 'nautiyal' ]


// ===>Problem with new String()
// The major issue is that strict equality (===) behaves differently:

const str1="mayank";// Primitive
const str2=new String("mayank");// Object(non-primitive)

console.log(str1===str2);// ❌ false (Because one is a string, the other is an object)
console.log(str1==str2);// ✅ true (Because JavaScript converts them internally)

//---=====
// When you use new String(), it creates an object in heap memory.

// Objects are reference types, meaning if you assign it to another variable and modify that, it will affect the original object.

const strObj = new String("Mayank");
const newRef = strObj;  // Assigning reference

newRef.testProperty = "Modified";  // Modifying newRef

console.log(strObj.testProperty);  // Output: "Modified" (Original also changed)
