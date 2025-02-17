const marvel_heros=["thor","ironman","spiderman","cap-america"]
const dc_heros=["aquaman","batman","superman","flash"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros)
// [
//     'thor',
//     'ironman',
//     'spiderman',
//     'cap-america',
//     [ 'aquaman', 'batman', 'superman', 'flash' ] // <-- dc_heros array added as a single element
//   ]

// console.log(marvel_heros[4][1])//batman
  //it is not a best practice to do this


  //the good practice is: using concat()
  const allHeros=marvel_heros.concat(dc_heros)//here concat return a new arr  which we are taking in allHeros

  console.log(allHeros)
  //[
//     'thor',
//     'ironman',
//     'spiderman',
//     'cap-america',
//     'aquaman',
//     'batman',
//     'superman',
//     'flash'
//   ]

//Using Spread Operator (...) (Best way):

const combined_heros=[...marvel_heros,...dc_heros]
console.log(combined_heros)
// [
//     'thor',
//     'ironman',
//     'spiderman',
//     'cap-america',
//     'aquaman',
//     'batman',
//     'superman',
//     'flash'
//   ]

//if a arrays comes like

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
//here we have to give much depth like 1,2 etc we want to a array flat here i give infinity means whatever the depth is make it flat or spread out

console.log(real_another_array)
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

//check is array
console.log(Array.isArray("Mayank"))//false
//for making  it array
console.log(Array.from("Mayank"))//[ 'M', 'a', 'y', 'a', 'n', 'k' ]

console.log(Array.from({name:"mayank"})) //[] //intersting
// Why?:

// Array.from() is used to create an array from iterable objects like strings, arrays, sets, and map objects.
// Objects ({}) are not iterable by default, so Array.from({name: "mayank"}) returns an empty array ([]) instead of converting the object into an array.

//convert multiple value in an array:==
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]