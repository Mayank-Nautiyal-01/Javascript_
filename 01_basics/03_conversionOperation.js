
let score="40"

console.log(typeof score)//string

//conversion

let valueInNumber= Number(score)
console.log(typeof valueInNumber) //number
console.log(valueInNumber);//40

//what if
let val="40abc"
console.log(val);//40abc

//after conversion

let valInNum=Number(val);
console.log(valInNum);//NaN(not a number)

//and if let val=null so after conversion it show it 0
//and if let val=undefined so after conversion it show it NaN
//and if let val= true a boolean value so after conversion it show 1 and if false then it   shows 0
//and if let="mayank" which cant be converted in num so it show it NaN

//"40"=>40
//"40abc"=>NaN
//true=>1 or false=>0

//let converted num to bool
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

// if let isLoggedIn="" empty string so after conversion it show false
//if let isLoggedIn="mayank" a string so after conversion it show true


//num to string
let someNum=40;

let stringNum=String(someNum)
console.log(stringNum) //40
console.log(typeof stringNum);//string