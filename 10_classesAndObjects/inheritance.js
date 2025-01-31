class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`This course was added by ${this.username }`);
        
    }
}

const user = new Teacher("Manish","manish@gmail.com",12443)
user.addCourse()

const user1 = new User("Shubham")
user1.logMe()

console.log(user1 instanceof User);
console.log(user instanceof Teacher);
