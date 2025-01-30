function multiplyby5(num){
    return num * 5
}

multiplyby5.power = 10

// console.log(multiplyby5(5))
// console.log(multiplyby5.power)
// console.log(multiplyby5.prototype)


function createUser(username , price){
    this.username = username
    this.price = price
}

createUser.prototype.increment =  function(){
    this.score++
}

createUser.prototype.hello = function(){
    console.log(`Hello  , ${this.username}`);
    
}

const chai  = new createUser('Chai' , 30)
const Coffee  = new createUser('Coffee' , 300)

chai.hello()