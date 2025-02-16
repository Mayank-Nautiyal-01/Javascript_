"use strict";//treat all js code as newer version

//alert(3+3)// we are using nodejs ,not browser

let name="mayank"
console.log(typeof name); //string
let age=22
console.log(typeof age); //number
let isloogedIn=false
console.log(typeof isloogedIn); //boolean

//primitve datatype

//number =>2 to power 53 approximately maybe
//bigint
//string=>""
//boolean=>false/true
//null =>standalone value
//undefined
//symbol=>for uniqueness


//object 


console.log(typeof null); //object
// Is null an Object?
// No, null is a primitive type in JavaScript, just like undefined, boolean, string, etc.

//then why typeof null returns "object"?
// ==>⚠️ typeof null returns "object" due to a historical bug.

console.log(typeof undefined); //undefined

// summary->
// Primitive types: String, Number, Boolean, Undefined, Null, BigInt, Symbol

// Non-primitive types: Object, Array, Function