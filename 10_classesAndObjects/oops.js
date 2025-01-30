const user = {
    username : "Manish",
    pass : 1233,
    logIn : 'Yes',

    getDetails : function(){
        // console.log(`Username: ${this.username}`);
        
    }
}
// console.log(user.username);
function users(username , pass , isLoggedIN){
    this.username = username
    this.pass = pass
    this.isLoggedIN = isLoggedIN 

    return this 
}

const user1 = new users("Manish" , 123 , true)
const user2 = new users("Shubham", 9980 , false)

console.log(user1);
console.log(user2);
