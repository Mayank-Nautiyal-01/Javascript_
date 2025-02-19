//array specific loop

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

 const map=new Map()

 map.set('IN','India')
  map.set('Nep','Nepal')
   map.set('Sl','srilanka')

   console.log(map)//Map(3) { 'IN' => 'India', 'Nep' => 'Nepal', 'Sl' => 'srilanka' }

   //access every ele by loop

   for(const [key,value] of map){
     console.log(key,':',value)
   }
// IN : India
// Nep : Nepal
// Sl : srilanka


//loop over obj

const myObj={
    'game1':'velorant',
    'game2':'cod',
    'game3':'Gta'
}

// for(const [key,value] of myObj){
//     console.log(key,':',value)
// }

// myObj is not iterable
//obj cant be iterate like this there are other methods fot that

