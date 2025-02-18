//Immediately Invoked Function Expressions(IIFE):Immediately Invoked Function Expression (IIFE) is a JavaScript function that is defined and executed immediately after its creation

//syntax:(function() {
          // Code to execute
//     })();


// Normal Function:

// A normal function is defined first and needs to be called separately to execute it.
// You can invoke it at any point after its definition.

// function myFunction() {
//     console.log("Hello from normal function");
//   }
  
//   myFunction();  // Call the function to execute

// -->IIFE (Immediately Invoked Function Expression):

// An IIFE is defined and invoked immediately as soon as it's created.
// There is no need to explicitly call the function after defining it; it runs automatically.
  

//named iife
(function() {
    console.log("Hello from IIFE");
  })();//Hello from IIFE
  

  //with arrow fun or unnamed iife

  (()=>{
    console.log("Hello from IIFE")
  })();//Hello from IIFE

  ((name)=>{
    console.log(`Hello from ${name}`);
  })("IIFE");//Hello from IIFE


  //+++++what makes IIFE special:

  //++++Encapsulation and Avoiding Global Namespace Pollution:

//   IIFE (Immediately Invoked Function Expression) ka use isliye hota hai kyunki yeh ek nayi local scope create karta hai. Matlab, jo variables aur functions aap IIFE ke andar define karte ho, wo sirf usi scope mein accessible hote hain, aur global scope ko affect nahi karte. Iska fayda yeh hai ki aap temporary variables ko safe rakh sakte ho bina global namespace ko polluted kiye.

// Without IIFE
var greeting = "Hello";
function sayHello() {
  console.log(greeting);
}
sayHello();//Hello
// greeting and sayHello are in the global scope

// With IIFE
(function() {
  var greeting = "Hello"; // Local to the IIFE
  function sayHello() {
    console.log(greeting);
  }
  sayHello(); // Calling the function inside IIFE
})();
// greeting and sayHello do not interfere with the global scope
