//3>reduce():reduce() method is used to accumulate values in an array and return a single value.

const myNums=[1,2,3,4,5]

// const total=myNums.reduce((acc,currVal)=>{
//     console.log(`acc: ${acc}, currVal: ${currVal}`)
//    return acc+currVal
// },0) // here initial value is 0

// console.log(total)

// acc: 0, currVal: 1
// acc: 1, currVal: 2
// acc: 3, currVal: 3
// acc: 6, currVal: 4
// acc: 10, currVal: 5
// 15



//or 
const total=myNums.reduce((acc,currVal)=>acc+currVal,0)

console.log(total)//15

//acc(accumulator) hamesa update hota rehta hai firstly 0 se initialize hoga but then addition k badd acc update hota rahega


const shoppingCart=[
    {
        itemName:"js-course",
        price:999
    },
    {
        itemName:"python-course",
        price:1200
    },
    {
        itemName:"dsa-course",
        price:1999
    }
]
//add all price
const totalPrice=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(`totalPrice:${totalPrice}`)//totalPrice:4198
