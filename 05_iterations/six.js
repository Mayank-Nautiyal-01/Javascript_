//problem with foreach:the problem with foreach is that it returns nothing.
const coding =["js", "c++", "py","java","ruby"]

const values=coding.forEach((item)=>{
    return item
})

console.log(values)//undefined

//to overcome with this problem we have:

//1>filter() – Keep Only Elements That Match a Condition
// Used to filter out elements that meet a condition.
// Returns a new array with only the elements that pass the condition.

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter((nums)=>nums>4)//implicit return

//another way

// const newNums=myNums.filter((nums)=>{
//     return nums>4; //yaha return likhna padega jb bhi curly braces k andar ayega.
// })

console.log(newNums)//[ 5, 6, 7, 8, 9, 10 ]


//more on filter:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //find books with history genre

  const userBooks=books.filter((bk)=>bk.genre === 'History')

  console.log(userBooks)
//   [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]

const uBooks=books.filter((bk)=>{return (bk.publish>=1995 && bk.genre === 'History')})
console.log(uBooks)
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]

