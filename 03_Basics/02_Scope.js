if(true){
let a = 10
var b = 20
const x  =31
}

console.log(b); // because of this we do not use var
// console.log(x);


addOne(13)              // tHIS IS WORKING BECAUSE OF THE WAY OF DECLARATION
function addOne(num){
    console.log("The sum is ",num);
    
}


// addTwo(23)              // NOT WORKING BECAUSE OF DECLARATION
const addTwo = function(num1){
    console.log(num1);
    
}

addTwo(21)