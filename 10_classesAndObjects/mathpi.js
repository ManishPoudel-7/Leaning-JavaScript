const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descriptor);

Object.defineProperty(Math , "PI" , {
    writable : true
})

// let a = Math.PI =  10
// console.log(a);          not working


const chai  = {
    name : "Ginger Chai",
    price : 25,
    isAvailable : true,

    orderChai : function(){
        console.log("Code nhi chlega");   
    }
}
console.log(Object.getOwnPropertyDescriptor(chai , "price"));

Object.defineProperty(chai ,"price",{
    // writable : false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai , "price"));


chai.price = 200;

// console.log(chai);


for (let [key , value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);   
    }
    
}