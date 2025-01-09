const arr1 = [1,2,3,4,5]
const arr2 = ["Manish" , "Indo","Shubham"]
const arr3 = new Array(1,2,3,4,5)
// console.log(arr1[1]);


// Methods
// arr1.push(6)
// arr1.push(7)
// arr1.pop()
// console.log(arr1);

// arr1.unshift(0)     // Used to add element to the first place
// console.log(arr1);
// arr1.shift()        // used to remove element from the forst place
// console.log(arr1);

// console.log(arr1.includes(20));
// console.log(arr1.indexOf(3))

// const arr4 = arr1.join()    // converts the list item into a string as comma seperated value
// console.log(arr3);
// console.log(arr4);

const myarr1 = new Array(1,2,3,4,5,6,7,8,9)
console.log("Original Array "+myarr1);

console.log("Using Slice (1,5) "+myarr1.slice(1,5));
console.log("After using Slice(1,5) "+myarr1)

console.log("Using Splice (1,5) "+myarr1.splice(1,5))
console.log("After usinkg Splice(1,5) "+myarr1)


// So the main difference between slice and splice is that splice extracts the array from original array and provide it to us where as slice does not do anything like this 
// and slice does not include the range whereas splice does

