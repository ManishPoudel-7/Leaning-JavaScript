const mySym =  Symbol("Key 1")

const user = {
    name : "Manish",
    "full name" : "Manish Poudel",
    [mySym]: "key1",
    age : 21,
    location : "Delhi",
    email : "manishpoudel2003@gmail.com"
}

console.log(user.name)                   // mostly used
console.log(user["email"])         
console.log(user["full name"]);  // preferred                   {diff between both of these is that when we declare a object the key is automatically taken as a string so 
console.log(user[mySym]);   // correct way to access Symbol      when we provide the key in "" we cannot access it by . that why we use user["email"]}

user.email = "manish@vit.com"
//Object.freeze(user)         // used to end=sure no changes ca be made to the objects
user.email = "manish@google.com"
console.log(user);



user.greeting = function(){
    console.log("Hello Namaskaram"); 
}
user.greeting2 = function(){
    console.log(`Hello Namaskaram ${this.name}`)
}

console.log(user.greeting());
console.log(user.greeting2());

