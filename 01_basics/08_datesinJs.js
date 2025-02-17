// dates

let myDate=new Date()
console.log(myDate)//2025-02-17T08:03:06.885Z
console.log(typeof  myDate)//object
console.log(myDate.toString())//Mon Feb 17 2025 13:34:01 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())//Mon Feb 17 2025
console.log(myDate.toLocaleString())//17/2/2025, 1:35:40 pm


//Getting Parts of Date
let date = new Date();

console.log(date.getFullYear());  // 2025
console.log(date.getMonth());     // 1 (February, since months start from 0)
console.log(date.getDate());      // 17
console.log(date.getDay());       // 1 (Monday, where 0 = Sunday)
console.log(date.getHours());     // 13 (1 PM)
console.log(date.getMinutes());   // 34
console.log(date.getSeconds());   // 40
console.log(date.getMilliseconds()); // 885
console.log(date.getTime());      // Milliseconds since Jan 1, 1970

//======
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023 -> month is started from zero


// Getting Milliseconds Since 1970 (Timestamp)
let timestamp = Date.now();
console.log(timestamp);  
// Example Output: 1739780277434 (Milliseconds since Jan 1, 1970)

//Converting Timestamp to Date

let dateFromTimestamp = new Date(1739780277434 );
console.log(dateFromTimestamp.toDateString());  
//  Output: "Mon Nov 13 2023"

// Adding Days to a Date
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10); // Add 10 days
console.log(futureDate.toDateString());  //Thu Feb 27 2025

