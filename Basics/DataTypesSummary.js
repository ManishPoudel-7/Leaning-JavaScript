//There are mainly two types of Data types 
/*
1) Primitive => Number  (number),
                BigInt (bigint),
                Symbol (symbol), 
                Boolean (boolean), 
                undefined (undefined), 
                null (onject), 
                String (String)


2)Non Primitive (Reference) => 
                Array (object), 
                Objects (object) , 
                Functions (function)
*/


const a = null

const b = undefined

const id = Symbol("Hello")

const bignum = 984516516845132131n

const arr = ["Manish" , "Shubham" ,"Indo"]

const myfunction =function(){
    console.log("Hello World")
}

const myobj = {
    name: "Manish",
    age : 21,
}

console.log(typeof a)
console.log(typeof b)
console.log(typeof id)
console.log(typeof bignum)
console.log(typeof arr)
console.log(typeof myfunction)
console.log(typeof myobj)
