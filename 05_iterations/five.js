//for each--higher order fun

const coding =["js", "c++", "py","java","ruby"]

coding.forEach(function (item){
    console.log(item)
})
// js
// c++
// py
// java
// ruby

//or

coding.forEach((item)=>{
    console.log(item)
})

// js
// c++
// py
// java
// ruby

//or

function  printme(item){
    console.log(item)
}
coding.forEach(printme)

// js
// c++
// py
// java
// ruby


coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})
// js 0 [ 'js', 'c++', 'py', 'java', 'ruby' ]
// c++ 1 [ 'js', 'c++', 'py', 'java', 'ruby' ]
// py 2 [ 'js', 'c++', 'py', 'java', 'ruby' ]
// java 3 [ 'js', 'c++', 'py', 'java', 'ruby' ]
// ruby 4 [ 'js', 'c++', 'py', 'java', 'ruby' ]


//array of obj iteration using foreach=
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
// javascript
// java
// python