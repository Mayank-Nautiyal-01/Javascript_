//2>map():– Transform Each Element
// Used to apply a function to each element of an array.
// Returns a new array with transformed values.
const myNum=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNum.map((num)=>num+10)
console.log(newNums)
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

//chaining

const Nums=myNum
              .map((num)=>num+10)
              .map((num)=>num+1)//upper wala se jo data ayega uspe operation perform honge

    console.log(Nums)
    //[
//   12, 13, 14, 15, 16,
//   17, 18, 19, 20, 21
// ]

const Newnums=myNum
              .map((num)=>num+10)
              .map((num)=>num+1)//upper wala se jo data ayega uspe operation perform honge
               .filter((num)=>num>14)

    console.log(Newnums)

    // [
    //     15, 16, 17, 18,
    //     19, 20, 21
    //   ]