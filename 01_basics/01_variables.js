const accountId= 14453
let accountEmail="mayabox@gmail.com"
var accountPassword="12345"
 accountCity="jaipur"//not a good way to do this but it works in js
let accountState //undefined


 //accountId=2 //not allowed
 accountEmail="box@gmail.com"
 accountPassword="238223"
 accountCity="dehradun"

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

 //output
//  ┌─────────┬─────────────────┐
//  │ (index) │ Values          │
//  ├─────────┼─────────────────┤
//  │ 0       │ 14453           │
//  │ 1       │ 'box@gmail.com' │
//  │ 2       │ '238223'        │
//  │ 3       │ 'dehradun'      │
//  │ 4       │ undefined       │
//  └─────────┴───────────────

/* 
 prefer not to use var
 bcz of issue in block scope and functional scope
*/