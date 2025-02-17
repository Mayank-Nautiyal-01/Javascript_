
//singleton object-another way of making object
// const tinderUser=new Object()

// console.log(tinderUser)//{}

//and non singleton we see in previous part
const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="mayank"
tinderUser.isLoggedIn=false

console.log(tinderUser)//{ id: '123abc', name: 'mayank', isLoggedIn: false }

const regularUser={
    email:"mayank@example.com",
    fullname:{
        userfullname:{
            firstname:"mayank",
            lastname:"nautiyal"
        }
    }
}

console.log(regularUser.fullname)//{ usefullname: { firstname: 'mayank', lastname: 'nautiyal' } }
console.log(regularUser.fullname.userfullname)//{ firstname: 'mayank', lastname: 'nautiyal' }  

console.log(regularUser.fullname.userfullname.lastname)//nautiyal

//merge obj
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//using spread operator--best and easy way
const obj3={...obj1, ...obj2}

console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//using assign property 

const obj4=Object.assign(obj1,obj2)
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//if more than two obj have to merge bcz if we have two then it define one is target and another is source
//assign (target,source)

//so we can give extra obj if we have many more obj to merge
//assign ({}, source)

const obj5={5: 'e', 6: 'f', 7: 'g',}
const obj6=Object.assign({},obj1,obj2,obj5);
console.log(obj6)
// {
//     '1': 'a',
//     '2': 'b',
//     '3': 'c',
//     '4': 'd',
//     '5': 'e',
//     '6': 'f',
//     '7': 'g'
//   }

//most use thing also==Creating an Array of Objects in JavaScript

const users = [
    { name: "Mayank", age: 24, email: "mayank@gmail.com" },
    { name: "Nikhil", age: 25, email: "nikhil@gmail.com" },
    { name: "Tushar", age: 23, email: "tushar@gmail.com" }
];

// Accessing the first user
console.log(users[0]); 
// Output: { name: 'Mayank', age: 24, email: 'mayank@gmail.com' }

// Accessing a specific value
console.log(users[0].name); 
// Output: Mayank

// Using map to format user details
const userDetails = users.map(user => `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`);

console.log(userDetails);

// ✅ .map() is useful when you want to transform data without modifying the original array.
// ✅ It returns a new array, so it does not mutate the original one.
// ✅ Best for extracting, formatting, or modifying object properties.

//imp thing we see on tinder ex is
//When working with objects in JavaScript, you often need to extract keys or values.

console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));
//[ '123abc', 'mayank', false ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


//++++++++Object destructuring++++++

const course={
    coursename:"js",
    price:"999",
    courseInstructor:"mayank"
}

// console.log(course.courseInstructor);//mayank

const {courseInstructor} = course
console.log(courseInstructor)//mayank
// now i can access courseInstructor many time i dont have to write course.courseInstructor again and again.

//or i can give another name to
const {courseInstructor:instructor} = course
console.log(instructor)//mayank

//thats what we call destructuring

//Basic JSON Object (Key-Value Pairs)

// {
//     "name": "Mayank",
//     "age": 24,
//     "email": "mayank@gmail.com"
//   }
// This is the simplest form of a JSON object with key-value pairs.
// It looks similar to a JavaScript object but is always in double quotes ("").

//JSON(JavaScript Object Notation) : JSON is a lightweight data format used for storing and exchanging data between a server and a client.
// It is human-readable and easy to understand, similar to JavaScript object syntax.
// It is commonly used in APIs, databases, and configuration files.


//JSON Array of Objects

// [
//     {
//       "name": "Mayank",
//       "age": 24,
//       "email": "mayank@gmail.com"
//     },
//     {
//       "name": "Nikhil",
//       "age": 25,
//       "email": "nikhil@gmail.com"
//     },
//     {
//       "name": "Tushar",
//       "age": 23,
//       "email": "tushar@gmail.com"
//     }
//   ]
//   This format is used when storing multiple objects inside an array.
//    Used in APIs to send lists of users, products, or any dataset.