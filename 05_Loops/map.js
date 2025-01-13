const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums  = nums.map( (i) => i + 10)


const newNums = nums
                .map( (num) =>  num * 10)
                .map ((num) =>   num + 1)
                .filter((num) => num > 50)
            
// console.log(newNums);


const  myNums = [1,2,3,4,5,6,7,8,9,10]

const newTotal = myNums.reduce(function (acc,currval) {
//console.log(`Accumulative value : ${acc} , and Current value is ${currval}`);
    
    return acc + currval
} , 0)

console.log(newTotal);      // same can be done usinkg arrow function

const hello = myNums.reduce( (acc , curr) => {return acc+curr},0)


const shoppingCart = [
    {
        item : "Book",
        price : 100
    },
    {
        item : "Pen",
        price : 15
    },
    {
        item : "Battle Suit",
        price : 1000
    }
]

const myCost = shoppingCart.reduce( (acc ,item) => {
     return acc + item.price
},0) 

console.log(myCost);
