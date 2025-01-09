const marvel = [" IronMan " , " SpiderMan " , " Vision "]
const mv = [" Gamora " , " Black Widow " , " Wanda"]

// marvel.push(mv)
// console.log("Using Push : " , marvel) 
 
// const new1 = marvel.concat(mv)
// console.log("Using Concat :" + new1)    //Using Concat : IronMan , SpiderMan , Vision , Gamora , Black Widow , Wanda

// const new2 = [...marvel , ...mv]    // this is spread
// console.log("Using Spread",new2);

const arr1 = [1,2,3,4,[23,56,74] , [24,215,67,8,[90,1,24,[56],2]], 13]
// const final = arr1.flat(1)     
/*[
    1,
    2,
    3,
    4,
    23,
    56,
    74,
    24,
    215,
    67,
    8,
    [ 90, 1, 24, [ 56 ], 2 ],
    13
  ] */

// const final = arr1.flat(2)  
/*
[
  1,   2,  3,      4,
  23,  56, 74,     24,
  215, 67, 8,      90,
  1,   24, [ 56 ], 2,
  13
]
*/

// const final = arr1.flat(3)  
/* [
   1,   2,  3, 4, 23, 56, 74,
  24, 215, 67, 8, 90,  1, 24,
  56,   2, 13
]
*/

// const final = arr1.flat(Infinity)  
/* [
   1,   2,  3, 4, 23, 56, 74,
  24, 215, 67, 8, 90,  1, 24,
  56,   2, 13
]*/
// console.log(final)

console.log(Array.isArray("Manish"))        //checks if it is array or not
console.log(Array.from("Manish"))          // converts it to array
let obj  = {name : "Manish"}
console.log(Array.from(Object.values(obj)))  // Provides an empty array because we have not told them ki key ka list bnana ya value *****Remember
console.log(Array.from(Object.keys(obj)))  

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c))    // used to convert the given items to array