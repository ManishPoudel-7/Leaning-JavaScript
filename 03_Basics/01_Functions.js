function hello(){
console.log("Hello World");
}

hello()

function add(num1 , num2){
    return num1 + num2
}

const result = add(19 , 31)
console.log(result)

function username(uname){
    if(!uname){
        console.log("Please enter a name")
    }
    else{
        console.log(`Hello ${uname}`);
        
    }
}

username()


const user = {
    name : "Manish",
    salary : 1000000
}

function handleObject(anyobject){
    console.log(`The name of the user is ${anyobject.name} and there salary is ${anyobject.salary}`);
    
}

handleObject(user)
handleObject({
    name : "Hello",
    salary :  1000000
})

function calculateCartPrice(...num1){       // ... is rest operators it is also called spread as used before but we have to see where to use them perfecty
    return num1
}

console.log(calculateCartPrice(2000,321,3142,1434,1132,432));

const arr1 = [12,32,43,14,2,42,55,25,6,7,678]

function findTheElement(myarr){
    console.log(myarr[2])
}

findTheElement(arr1)

