//!callback?
//?Callback ek function hai jo doosre function ko ek argument ke roop me diya jata hai, aur baad me execute hota hai jab operation complete ho jaye. Ye asynchronous programming me kaafi useful hota hai, jisme API calls, database queries, ya file reading jaisi cheezein hoti hain.

//!Callback Ki Zaroorat Kyu Padti Hai?
// ?JavaScript single-threaded aur synchronous hota hai, matlab ek time par ek hi kaam karega. Agar hum network request ya file read karne ka kaam karein, aur uska result aane tak ruk jayein, toh poora program freeze ho sakta hai.



// 👉 Solution: Hum callback ka use karte hain jo kaam hone ke baad execute hota hai, bina code block kiye.

//!Type of callback: Synchronous Callback,Asynchronous Callback.


// !📌Synchronous Callback Kya Hota Hai?

// Agar callback function turant execute ho jaye bina kisi delay ya asynchronous operation ke, toh usse synchronous callbackm kehte hain.
function greet(name,callback) {
    console.log("hello, "+name);
    callback();// Ye callback function turant execute ho jayega
    // Yaha callback(); ka kaam tha ki jab greeting ho jaye, tab sayBye(); function chale.
}
function sayBye(){
    console.log("Enjoy js learning");
}

greet("Coders",sayBye);//sayBye ko greet fun me callback ki tarah pass kiya hai

//!output
// hello, Coders
// Enjoy js learning

// !Kaise Kaam Kar Raha Hai?

// greet function do arguments leta hai:
// name: Jisme humara naam aayega.
// callback: Ek function jo baad me execute hoga.
// Pehle "Hello, Coders" print hoga.
// Fir callback() run karega jo sayBye() function ko call karega.
// "Enjoy js learning" print hoga.
//
// Koi delay ya wait nahi tha, isiliye ye synchronous hai.


// !📌 Asynchronous Callback Kya Hota Hai?

// Agar callback function turant execute na ho, balki kisi asynchronous process ke complete hone ke baad chale, toh use asynchronous callback kehte hain.

function fetchData(callback){
    console.log("Data fetch ho raha hai..");

    setTimeout(()=>{
        console.log("Data successfully aagaya!");
        callback();// Data aane ke baad callback function chalega
    },2000);
}


function processData(){
    console.log("Data process ho raha hai..");
}

// fetchData function call kiya aur usme processData ko callback diya
fetchData(processData);

//!output:
// Data fetch ho raha hai..
// Data successfully aagaya!
// Data process ho raha hai..

// !🧐 Yaha kya ho raha hai?
// fetchData(processData); call kiya.
// Pehle "Data fetch ho raha hai..." print hua.
// setTimeout lagaya jo 2 sec baad chalega.
// 2 sec baad "Data successfully aagaya!" print hua.
// callback(); ne processData(); ko call kiya.
// "Data process ho raha hai..." print hua.
// ✅ Yaha callback(); ka kaam tha ki jab data fetch ho jaye tab processData(); function chale.

// !callback(); ka Simple Summary

// Kya hai?	Ek function jo doosre function ke andar diya jata hai aur baad me execute hota hai.

// Kyu zaroori hai?	Asynchronous operations (API calls, file reading) ke liye.
// Kaise kaam karta hai?	callback(); tab chalta hai jab primary function ka kaam complete ho jaye.

// Real-life example?	API se data fetch hone ke baad usko display karna.


// !Callback Ka Real-World Use Case (Server Response Handle Karna)

// Maan lo hum ek user ka data API se la rahe hain, toh hum callback ka use karenge data aane ke baad usko process karne ke liye.

function getuserdata(callback)
{
    console.log("user data fetching...");

    setTimeout(()=>{
        let user={name:"Mayank",age:24};
        callback(user);// Jab data aajaye tab callback function chalega
    },2000);
}

function displayuser(user){
    console.log(`display user ${user.name} ,age: ${user.age}`);
}


// `displayUser` function ko callback ki tarah pass kiya
getuserdata(displayuser);

//output:
// User data fetching...
// User data received: { name: "Mayank", age: 24 }
// Displaying user: Mayank | Age: 24
