var c=300

if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a) //a is not defined
//console.log(b)// b is not defined
console.log(c)//30

// Explanation:
// let and const have block scope

// a and b are declared inside the if block using let and const, so they only exist within that block.
// Trying to access them outside the block results in ReferenceError: not defined.
// var has function scope (or global scope if declared outside a function)

// var c=30 inside the block overwrites the global c=300 because var does not respect block scope.
// It gets hoisted to the nearest function or, if there's none, to the global scope.
// So, when console.log(c) runs, it prints 30 instead of 300.

var c=40
console.log(c) // now c=40 overwrites the c=30 here


//-so this is problem with the var which is accessible outside the its block also==> so we can say var has a function scope.

//but the let and const is block scope

let a=20

console.log(a)//20 
// so let and const help to save from bugs

//++++++++++++++++

//nested scope or  lexical scope (closure)

function one(){
    const username="mayank"

    function two(){
        const website="github"
        console.log(username)//mayank
    }
   // console.log(website);//website is not defined

    two()
}
one()

// Explanation:

// Lexical Scope (Closure)

// Function two() is inside function one().
// ====>Inner functions can access variables declared in their outer function (this is called closure).
// That’s why console.log(username) inside two() works and prints "mayank".

// Block Scope of const & let

// website is declared inside function two() using const, so it exists only within two().
// Trying to access website from one() (outside two()) causes ReferenceError: website is not defined.

//summary:

// ✅ Inner functions can access outer function variables (closure).
// ✅ Outer functions cannot access inner function variables (block scope).

//one more exx

if(true){
    const username="mayank"
    if(username=="mayank"){
        const password=" pass@123"
        console.log(username+password)//mayank pass@123
    }
    //console.log(password)//password is not defined
}
//console.log(username)//username is not defined

//++++++++++++++Interesting++++++++++++++++++

function addone(num){
    return num+1
}

addone(5)

// addone(num):

// This is a regular function declaration. It adds 1 to the input number (num).
// Example usage: addone(5) will return 6.


const addtwo=function(num){
    return num+2
}
addtwo(5)


//addtwo(num):

// This is a function expression where addtwo is assigned an anonymous function that adds 2 to the input number (num).
// Example usage: addtwo(5) will return 7.

//+++++hoisting==>hoisting is the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed.

console.log(addone(5));//6  // Works, because the function declaration is hoisted.

function addone(num) {
  return num + 1;
}
//===>
    // Function declaration: Function ka naam aur body dono hoisted hote hain, isliye aap usse pehle bhi call kar sakte ho.


console.log(add(5)); // Error: add is undefined becuase add ko uski declration se phele access kr rhe h

const add = function(num) {
  return num + 2;
};

//===>

// Function expression: Variable declaration hoisted hota hai, lekin function body uss point tak available nahi hoti jab tak code usse execute nahi karta. Isliye function ko call karna error dega agar aap usse declaration ke pehle call kar rahe ho.