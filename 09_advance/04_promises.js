//! Promise ek JavaScript object hai jo asynchronous operation ko handle karne ke liye use hota hai. Iska use hum callback hell ko avoid karne ke liye karte hain.

// 🔹 Promise ek guarantee deta hai ki future me operation complete hoga ya fail hoga.
// 🔹 Ek Promise ke 3 states hoti hain:

// Pending: Jab tak operation complete nahi hota.
// Fulfilled: Jab operation successfully complete ho jaye.
// Rejected: Jab operation fail ho jaye (e.g., network error).


// 🔍 Understanding .then() and .catch():

// 🟢 .then() (For Success)
// Agar Promise resolve hota hai, to .then() execute hota hai.

// 🔴 .catch() (For Error Handling)
// Agar Promise reject hota hai, to .catch() execute hota hai.

//what is promise chaining:
// Promise chaining is used when multiple asynchronous operations depend on each other. Instead of nesting callbacks (which leads to callback hell), we use chaining to handle multiple sequential async tasks.
//++++++++++++++++++++++++++++++++++++++


// ## **🔹 1️⃣ Basic Promise Example**

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); // Resolving the promise (success)
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed"); // Runs when resolve() is called
});

// ### **📌 Explanation:**  
// - A **new Promise** is created with `resolve` and `reject` as parameters.  
// - Inside it, `setTimeout` simulates an **asynchronous operation**.  
// - After **1 second**, it logs `'Async task is complete'` and calls `resolve()`.  
// - `.then()` is executed after the promise resolves successfully.  



// ## **🔹 2️⃣ Promise Without Storing in Variable**

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000);
})
.then(function() {
    console.log("Async 2 resolved");
});
// ```
// ### **📌 Explanation:**  
// - Here, we create and execute a **promise** directly **without storing it in a variable**.  
// - It behaves the same way but executes **immediately**.  


// ## **🔹 3️⃣ Promise Returning an Object**

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "mayank", email: "mayank@example.com" });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user); // { username: 'mayank', email: 'mayank@example.com' }
});
// ```
// ### **📌 Explanation:**  
// - Here, **resolve() returns an object** `{ username, email }`.  
// - `.then()` receives the object and logs it.  

// ---

// ## **🔹 4️⃣ Handling Promise Rejection (`.catch()`)**

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Simulating an error
        if (!error) {
            resolve({ username: "mayank", password: "pass@124" });
        } else {
            reject('ERROR: something went wrong'); // Rejected case
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user); // Won't execute if promise is rejected
        return user.username;
    })
    .then((username) => {
        console.log(username); // Won't execute if previous then fails --bcz of promise chaining see the defination above
    })
    .catch(function(error) {
        console.log(error); // Handles error if promise is rejected
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected"); // Runs in both cases
    });
// ```
// ### **📌 Explanation:**  
// - Here, `error = true` means the **promise is rejected**.  
// - `.catch()` handles the error and logs `"ERROR: something went wrong"`.  
// - `.finally()` always runs, no matter if the promise resolves or rejects.  

// ---

// ## **🔹 5️⃣ Using `async/await` Instead of `.then()`**

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Simulating error
        if (!error) {
            resolve({ username: "javascript", password: "pass@123" });
        } else {
            reject('Error: JS went wrong'); // Rejecting promise
        }
    }, 1000);
});

// ❌ Will give an error when error=true
async function consumePromiseFive() {
    const response = await promiseFive; // This will throw an error if rejected
    console.log(response);
}
// consumePromiseFive(); // Unhandled error

//async await mai  yeh problem h ki yeh directly error ko handle nhi kr sakte

// ✅ Correct way with try-catch
async function consumePromiseFive() {
    try {
        const response = await promiseFive; // Waits for promise resolution
        console.log(response); // Logs result if resolved
    } catch (error) {
        console.log(error); // Catches error and logs it
    }
}
consumePromiseFive();
// ```
// ### **📌 Explanation:**  
// - `async function` allows us to use `await` for waiting for a **promise to resolve**.  
// - If the promise **rejects**, it throws an error.  
// - We use **`try-catch`** to handle the error properly.  



// ## **🔹 6️⃣ Fetch API with `async/await`**

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch request
        const data = await response.json(); // Convert response to JSON
        console.log(data); // Logs the data
    } catch (error) {
        console.log("Error:", error); // Handles fetch error
    }
}

getAllUsers(); // Call the function

// ### **📌 Explanation:**  
// - `fetch()` is an asynchronous function to **fetch data from an API**.  
// - We use `await` to **wait** for the response and **convert it to JSON**.  
// - **`try-catch`** handles any **errors**, such as network issues.  



// ## **🔹 7️⃣ Fetch API with `.then()` and `.catch()`**

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()) // Convert response to JSON
    .then((data) => {
        console.log(data); // Logs fetched data
    })
    .catch((error) => console.log(error)); // Handles fetch error

// ### **📌 Explanation:**  
// - We use `.then()` to **handle response and parse JSON**.  
// - **`.catch()`** is used for **handling errors**, such as network failures.  


