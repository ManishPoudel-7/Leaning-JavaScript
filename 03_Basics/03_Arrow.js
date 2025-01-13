const user ={
    name : "Manish",
    age : 18 , 

     welcome : function(){
        console.log(`${this.name} , Welcome to our website`);   // this is used ti refer to the current context of the variables
        // console.log(this);
        
    }
}

// user.welcome()
// user.name = "Shubham"
// user.welcome()
// console.log(this);

function chai(){
    console.log(this);
    
}
// chai()

const a = () => {
    name = "Manish"
    console.log(this.name);
    
}
a()

// const addTwo = (n1 , n2) => {           // this is explicit
//     return n1 + n2
// }

const addThree = (n1 , n2 , n3) => n1 + n2 +n3          // both are implicit 
const addThreee = (n1 , n2 , n3) => (n1 + n2 +n3)

// const addTwo = (n1 , n2) => {username : "Manish"}        // doesnt work kyuki cant declare objects like this 
const addTwo = (n1 , n2) => ({username : "Manish"})

console.log(addTwo(23,24));
console.log(addThree(23,24,12));
console.log(addThreee(2122,24,12));

