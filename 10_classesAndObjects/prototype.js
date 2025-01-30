heroes = ["spiderman" , "ironman"]

let heroPower = {
    spiderman  : "Sling",
    ironman : "Suit",

    getIronPower : function(){
        // console.log(`Power of Iron Man is ${this.ironman}`);
        
    }
}

Object.prototype.manish = function(){
    // console.log(`Manish is in the multiverse`);   
}
Array.prototype.greetings = function(){
    // console.log(`Hey ${heroes}`);
    
}
heroes.manish()
heroPower.manish()
heroes.greetings()

// heroPower.greetings()   // wont work because greetings sirf array ke liye declare kri hai manish function is liye chl rha kyuki object pr bnaya isliye
                        // sbkuch usse pass ho kr jaata toh vo functionality sbme use kr skte


let username = "Manish"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

username.trueLength()
"Shubham         ".trueLength()
"          INDO".trueLength()



// Inheritance

const user = {
    username : "Manish"
}


const student = {
    sports : true,
    gaming : true
}

const college = {
    name : "VIT",
    fulltime : true,
    __proto__ : user
}

user.__proto__ =   student  // user student ke features use kr skta 

// Modern Syntax

Object.setPrototypeOf(college , student) // college saari proporties access krlo student ki 