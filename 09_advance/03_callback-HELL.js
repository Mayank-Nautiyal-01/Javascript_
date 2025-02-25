 //!Callback Hell aur Inversion of Control

 //* Callback Hell Kya Hota Hai?
//  Callback hell tab hota hai jab hum ek ke andar ek callback functions nest karte jaate hain, jo ki code ko complicated aur unreadable bana deta hai. Yeh problem mostly asynchronous programming (jaise API calls, file handling, database queries) me aati hai.

//?ex

getuser(userId,function(user){
    getPosts(user.id,function(posts){
        getComments(posts,function(response){
            sendResponse(comments,function(response){
                console.log("Response send");
            })
        })
    })
})

//! Step-by-Step Execution:

// 1️⃣ getUser(userId, callback)

// Yeh function userId ko input leta hai aur asynchronously user details fetch karta hai.
// Jab user ka data mil jata hai, tab callback function execute hota hai, jo user object return karta hai.

// 2️⃣ getPosts(user.id, callback)

// Pehle jo user object mila tha, uska id nikal kar yeh function user ke posts fetch karega.
// Jab posts mil jayenge, tab callback execute hoga jo posts ka data return karega.

// 3️⃣ getComments(posts, callback)

// Pehle mile posts ka data lekar unke comments fetch kiye ja rahe hain.
// Jab comments aa jayenge, tab callback execute hoga.

// 4️⃣ sendResponse(comments, callback)

// Jo comments mile hain, unhe kisi API ya client ko send kar rahe hain.
// Jab response successfully send ho jayega, tab last callback execute hoga jo "Response sent" print karega.


//! Problem in This Code (Callback Hell)
// 🔴 Nested Callbacks: Har callback ke andar ek aur callback hai, jisse code "pyramid shape" ka ho gaya hai.
// 🔴 Readability Issues: Code samajhna aur debug karna difficult ho jata hai.
// 🔴 Error Handling Issues: Agar kisi function me error aaye, to usko properly handle karna mushkil ho jata hai.

//! Inversion of control:

// Inversion of Control ka matlab 
// hota hai ki hum apne program ka execution control kisi aur function ko de dete hain. 
// Jab hum ek callback function pass karte hain, to kab aur kaise wo callback execute hoga, yeh humare control me nahi hota.

//ex

function fetchData(url, callback) {
    fetch(url)  // URL se data fetch karna
        .then(response => response.json())  // Response ko JSON me convert karna
        .then(data => callback(null, data))  // Callback ko data pass karna (Error null hai)
        .catch(error => callback(error, null));  // Agar error aaye to callback me error pass karna
}


// !👀 Step-by-Step Execution:
// 1️⃣ fetch(url)

// Yeh function ek asynchronous request bhejta hai aur ek Promise return karta hai.
// Jab response aata hai, tab .then() execute hota hai.
// 2️⃣ .then(response => response.json())

// Response ko JSON format me convert kar raha hai.
// Yeh bhi ek asynchronous operation hai, jo ek aur Promise return karega.
// 3️⃣ .then(data => callback(null, data))

// Jo bhi JSON data milta hai, wo callback function me pass ho jata hai.
// null isliye diya gaya hai kyunki error nahi aayi hai.
// 4️⃣ .catch(error => callback(error, null))

// Agar request fail ho jaye (e.g., network error ya API unavailable), to callback function me error pass ho jayega.


// !❌ Issue: Inversion of Control (IoC)
// 👉 Problem yeh hai ki control callback function ke paas chala gaya.

// Humne fetchData function ko control diya, par callback kab aur kaise execute hoga, wo hum decide nahi kar sakte.
// Agar callback function call hi na ho ya galat tarike se call ho, to hume pata bhi nahi chalega.
// Error handling complicated ho sakti hai.


//!!these problem comes in callback which is solved using promises and async/await.