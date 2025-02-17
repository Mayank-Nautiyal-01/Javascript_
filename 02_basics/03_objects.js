
//object literals



const jsUser={
    name:"Mayank",
    age:24, //these key is also treated as string like age is here treated as string
    location:"uk",
    email:"mayank@gmail.com",
    isLoggesIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email)//mayank@gmail.com
//another way to access it
console.log(jsUser["email"])//mayank@gmail.com

//How to Create a Symbol Inside an Object and Access It

const mySym = Symbol("uniqueKey"); // Creating a Symbol

const jsUser2 = {
    name: "Mayank",
    age: 24,
    location: "UK",
    email: "mayank@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "This is a secret value" // Symbol key used inside an object
};

// Accessing the Symbol Key Value
console.log(jsUser2[mySym]); // Output: This is a secret value

//how to overwrite and change value

jsUser2.email = "nautiyal@gmail.com";
console.log(jsUser2.email)//nautiyal@gmail.com

//we can freeze the values inside the object and we cant change it then

//Object.freeze(jsUser2);


// JavaScript allows you to dynamically add properties to objects, including functions.

//ex:
jsUser2.age=23
console.log(jsUser2.age)//24 not changed

jsUser2.greeting=function(){
    console.log("hello how are u")
}
jsUser2.greeting()//hello how are u

//or
// jsUser2.greeting = function() {
//     return "hello how are u";
// };

// console.log(jsUser2.greeting()); //  Output: hello how are u

jsUser2.greetingTwo= function(){
    console.log(`Hello js User from ${this.name}`)
}
jsUser2.greetingTwo()//Hello js User from Mayank