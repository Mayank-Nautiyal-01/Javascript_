
function myName(){
    console.log("Mayank")
}
myName()//Mayank


function add(num1,num2){
    console.log(num1+num2)
}
add(20,3)//23

add(23,"3")//233

function add2(num1,num2){
    return num1+num2
}
//we can store them in var
const res=add2(21,2);
console.log(res)//23

function loginmsg(username){
    return `${username} just logged in`
}
const result=loginmsg("mayank")
console.log(result)//mayank just logged in

//if nothing is passed

console.log(loginmsg())//undefined just logged in

//case:if we didnt know how many arguments were passed

//here we use rest operator(...) which is knows spread operator but as its work is different here so we know it as rest operator here

function calculateCartPrice(...price){
 return price
}
console.log(calculateCartPrice(200,300,400,500))//[ 200, 300, 400, 500 ]
//its return a array which we can access by loop and provide final total price

//how to pass a obj in an fun

const user={
    username:"mayank",
    age:24
}

function handleObject(obj){
 console.log(`username is ${obj.username} and  age is ${obj.age}`)
}

handleObject(user)//username is mayank and  age is 24

//or we can pass whole obj as argument
// handleObject(
//     {
//         username:"mayank",
//         age:24
//     }
// )

//pass arr
const mynewArr=[200, 300, 400, 500 ]

function secondValue(getArray){
    return getArray[2];
}

console.log(secondValue(mynewArr))//400
//or
// console.log(secondValue([200, 300, 400, 500 ]))