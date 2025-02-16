//comparison of datatype
console.log("2">1)//true-here string is converted in numeric format 
console.log("02">1)//true

//but sometimes it dosent give predictible results

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true
// the reason is that an equality check == and comparison > < >= <= work diffrently
//comparison convert null to a number,treating it as 0.
//thats why null>=0 is true and null>0 is false

// so==>>>>>>>>>>>>>>>
// Equality (==) does NOT convert null to a number

// null == 0 → false
// This happens because null is only equal to undefined in loose equality (==), but not to any other value.
// Comparison (>=, >, <, <=) converts null to a number (0)

// null >= 0 → true ✅ (null is converted to 0, and 0 >= 0 is true)
// null > 0 → false ❌ (null is converted to 0, and 0 > 0 is false)

// === => strictly check
console.log("2"===2)
// will be false.

// Why?
// The === (strict equality operator) checks both value and data type.

// "2" is a string
// 2 is a number
// Since their data types are different, === returns false.