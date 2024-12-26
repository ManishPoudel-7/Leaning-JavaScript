// // const a = 1000.2362
// // console.log(a);

// // const b = new Number(23030)
// // console.log(b);
// // console.log(b.toString())
// // console.log(b.toFixed(2))  // USed to ensure only provided number of numbers are showed after the decimal

// // console.log(a.toPrecision(6))   // jitna bhi digits doge utna hi digit ko precise krke dega

// // const num = 10000000
// // console.log(num.toLocaleString("en-IN")) // Generally used to use comma to seperate the value so that it can be read easily generally it is in US currency mode but we can change it to any one of out choice


// /***********************************MATHS*************************************/

// console.log(Math)
// console.log(Math.abs(-33))          // returns absolute value that is negative ko positive
// console.log(Math.round(1.612))
// console.log(Math.ceil(2.9))
// console.log(Math.floor(2.1))

console.log(Math.random()) // will provide num between 0-1
console.log(Math.floor((Math.random() * 10) + 1))

// So to find a random num between certain number we have to do

min = 10
max = 20
console.log((Math.random() * (max - min + 1)) + min)