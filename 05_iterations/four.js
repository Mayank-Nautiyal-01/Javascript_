//let see how to loop over obj

const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

//using for in loop
for(const key in myObj){
    console.log(key)
}
//js
// cpp
// rb
// swift
for(const key in myObj){
    console.log(myObj[key])
}
   
// javascript
// c++
// ruby
// swift by apple

for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//-----
//can we use for in loop for array
//lets see

const programming=["js", "c++", "py","java","rb"]

for(const key in programming){
   //console.log(key)//0 1 2 3 4
   console.log(programming[key])
}
// js
// c++
// py
// java
// rb

//kya hum map jo three.js mai kiya tha oh iterate kr sakte hai for in ki help se
//lets see
// const map=new Map()

//  map.set('IN','India')
//   map.set('Nep','Nepal')
//    map.set('Sl','srilanka')

//    for(const key in map){
//     console.log(key)//no output
//    }

//its not iterable like this