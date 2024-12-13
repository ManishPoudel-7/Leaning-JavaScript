const id = 100
var email = "manish@gmail.com"      // Dont use it as it create problem with scope
let city = "Delhi"
let degree;

// a = 2035 Not Allowed Because Const
email = "indo@gmail.com"
city = "Vellore"

// console.log(id)
// console.log(email)       Instead writing it all individually use console.table
// console.log(city)

console.table([id , email , city, degree])