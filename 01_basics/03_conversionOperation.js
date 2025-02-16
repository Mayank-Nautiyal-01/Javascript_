
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

//!!!!!!!!!!!!!!!!!!!!!--operation!!!!!!!!!

let value=3
let negValue=-value
console.log(negValue) //-3

let str1="hello"
let str2=" mayank"

let str3= str1+str2
console.log(str3) //hello mayank

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122 -agar string first hai toh sabko string mai treat kiya jayega
console.log(1+2+"2")//32 -agar string last mai hai toh pehle jo conversion hai oh ho jayega

//tricky conversion
console.log(+true)//1
console.log(+"")//0

//increment oper
let x = 5;

console.log(++x); // 6 (First increases, then prints)
console.log(x);   // 6 (Value remains updated)

let y = 5;

console.log(y++); // 5 (First prints, then increases)
console.log(y);   // 6 (Value updated after execution)


//decrement oper
let a = 5;

console.log(--a); // 4 (First decreases, then prints)
console.log(a);   // 4 (Value remains updated)

let b = 5;

console.log(b--); // 5 (First prints, then decreases)
console.log(b);   // 4 (Value updated after execution)
