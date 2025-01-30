function setUsername(username){ 
    this.username = username
    console.log('called');
}

function  createUser(username , email , password){
    setUsername.call(this , username)       // call is used to hold the reference and isme (this) as first parameter bheja jata hai kyuki jisko call
    this.email = email                      // kra hai run hote hi apna execution context hta deta hai jise uske saare value bhi hat jaate because of this
    this.password = password                 // ye run nhi ho rha tha directly isliye (this) use krke jo call kr rha us funtion ka this use krke value de rhe
}

const chai = new createUser("Manish" , "manish@gmail.com" , 123)
console.log(chai);
