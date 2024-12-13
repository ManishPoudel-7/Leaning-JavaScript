let score = 33
let s= "2030"
let rollno = "24MCA0161"
let bool = true

let newroll = Number(rollno)
let newbool = Number(bool)

console.log(typeof score)
console.log(typeof s)
console.log(typeof newroll)
console.log(typeof bool)

console.log(newroll)   // It will return NaN as it is not a number so we have to be careful with this before using this
console.log(s)
console.log(newbool)



/*
"33" =  33
"24MCA0161" = NaN
true= 1 , False = 0

*/

let isLoggedIn  = "Manish"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/*
So if we convert any text or string into boolean it will be  true otherwise False like
"Manish" = true
"" = false
1 = true , 0 = false
*/

let age = 98
let newname = String(age)
console.log(newname)
console.log(typeof newname)