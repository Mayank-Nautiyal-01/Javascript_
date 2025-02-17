const score=400
console.log(score)//400

//another way
const balance=new Number(100)
console.log(balance)//[Number: 100]
console.log(typeof balance) //object

// balance is a Number object created using new Number(100).
// Stored in heap memory.

// Has additional properties and methods like ::=
console.log(balance.toString())//100
console.log(typeof balance.toString())//string

//now after convert to string we can check its length
console.log(balance.toString().length)//3

console.log(balance.toFixed(2))//100.00

const otherNum=123.8966

console.log(otherNum.toPrecision(3))//124

const hundreds=1000000

console.log(hundreds.toLocaleString())//10,00,000 -i think is by default in indian standard because i didnt give 'en-IN'
console.log(hundreds.toLocaleString('en-US'))//1,000,000 - US strandard


console.log(Number.MAX_VALUE); 
// Output: 1.7976931348623157e+308

console.log(Number.MIN_VALUE); 
// Output: 5e-324


console.log(Number.MAX_SAFE_INTEGER); 
// Output: 9007199254740991 (2^53 - 1)

console.log(Number.MIN_SAFE_INTEGER); 
// Output: -9007199254740991 (-2^53 + 1)

//++++++++++++++++++ MATHS +++++++++++++++

console.log(Math.abs(-10))//10

console.log(Math.round(4.3))//4
console.log(Math.round(4.8))//5

console.log(Math.ceil(4.2))//5 ->jara bhi 4 s jada hua to top value choose krega

console.log(Math.floor(4.9))//4 ->isme ulta hai lower value choose krega chahe 4.9 hu value ku n ho

console.log(Math.min(4,2,5,6,8,3,1,))//1

console.log(Math.max(4,2,5,6,8,3))//8

//Imp= math.random

console.log(Math.random()); // Generates a number between 0 and 1 (e.g., 0.5623)


console.log((Math.random() * 10) + 1);
// Math.random() * 10 → Generates a number between 0 and 9.9999
// Adding +1 → Ensures the minimum value is 1

console.log(Math.floor(Math.random()*10)+1)
// Math.random() * 10 → Generates a decimal between 0 and 9.9999
// Math.floor() → Rounds it down to an integer (0 to 9)
// Adding +1 → Shifts the range to 1 to 10



const min=10
const max=20
//give random value between 10 and 20
console.log(Math.floor(Math.random()*(max-min+1))+min);//10,12,13,16,20etc...
// Adding + min → Shifts the range to min to max