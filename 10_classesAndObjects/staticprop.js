class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createID(){
        return 123
    }
}

const user = new User("Manish")
user.logMe()
// user.createID()  cant be used cause static


class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }

}

const user1 = new Teacher("Shubham" , "m@gmail.com")
user1.logMe()
// user1.createID() still cant be used by children class also kyuki static hai