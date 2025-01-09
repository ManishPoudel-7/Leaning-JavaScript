/*There are two types of memory in JavaScript
1)Stack (used in Primitive Data Types)
2) Heap (used in Non Primitive or Reference Data Types)
*/

let name = "Manish"
let uname = name

uname = "Shubham"

console.log(name)
console.log(uname) // Here the value od then ame is notf changed because they are given a copy of the instead of actual for Primitive


let u1 = {
    email :"manish@gmail.com",
    marks :50,
}

let u2 = u1

u2.marks = 70 // Here the value will be changed for both because they are directly given the data 


console.log(u1)
console.log(u2) 