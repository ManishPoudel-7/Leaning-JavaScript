class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return `${this._email} inserted extra data to email`;
    }
    set email(value){
        this._email = value;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const Manish = new User("manish@gmail.com" ,"jncw o")
console.log(Manish.password);
console.log(Manish.email);