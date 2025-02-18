
const user={
    username:"mayank",
    price:999,

    welcomeMsg:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)//this refers to that object, and the method works with its properties.
    }
  
}
 user.welcomeMsg()//mayank,welcome to website
//  { username: 'mayank', price: 999, welcomeMsg: [Function: welcomeMsg] }

 user.username="nautii" //context change

 user.welcomeMsg()//nautii,welcome to website
// { username: 'nautii', price: 999, welcomeMsg: [Function: welcomeMsg] }

console.log(this)//{}
//=> When you're not inside a method, this defaults to the global object (in non-strict mode), so it doesn't have any direct reference to user or its properties.


//--------
function hey(){
    let greet="hey"
    console.log(this.greet)//this.greet refers to a property on the global object, but since there is no global greet property, it returns undefined.
}
hey()//undefined

const hey2=function(){
    let greet="hey"
    console.log(this.greet)
}
hey2()//undefined

const hey3=()=>{
    let greet="hey"
    console.log(this.greet)
}
hey3()//undefined

//++++++++++++++Arrow func

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(10,21))//31

//or implicit return

const add=(num1,num2)=> num1+num2
//or const add=(num1,num2)=> (num1+num2)-->mostly used in react
//no need to write return statement because of one line statement
console.log(add(12,21))//33

//obj return

const temp=()=>({username:"mayank"})
console.log(temp())//{ username: 'mayank' }