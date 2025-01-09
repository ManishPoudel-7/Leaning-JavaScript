const tinderuser = {}

tinderuser.name = "Manish"
tinderuser.email = "tinde@gmail.com"
tinderuser.age  =  19
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const user = {
    email : "a@gmail.com",
    fullname : {
        username :  {
            fullname : "Aron",
            lastname : "Ramsay"
        }
    }
}

// console.log(user.fullname.username.lastname);

const obj1 = {1 : "a" , 2 :"b"}
const obj2 = {3 : "c" , 4 : "d"}

// const obj3 = Object.assign( {} ,obj1 , obj2)    // preferred to give a {} before to ensure ek me aajae

const obj3 = {...obj1 , ...obj2}    // spread
console.log(obj3);


const users =[
    {
        name : "m",
        email : "m@mail.com"
    },
    {
        name : "b",
        email : "b@gmail.com"
    }
]

console.log(users[0].email);

console.log(tinderuser);
console.log(Object.keys(tinderuser));  // returns all the key values in the form of arrays
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));    // returns all the key value pair as one array least frequently used

console.log(tinderuser.hasOwnProperty("email"));







