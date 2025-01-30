const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    //Db calls , network
    setTimeout(function(){
        console.log("Task Completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Promise 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 in then")
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Promise 3")
        resolve({username:"Manish" , email:"manish@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve , reject){
     setTimeout(function(){
        console.log("Promise 4");
        let error = false;
        if (!error) {
            resolve({username:"Indo" , pass:"12345"})
        }else{
            reject('ERROR : Something went wrong') 
        }
     },1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("Promise either resolved or rejcted"))


const promiseFive =  new Promise(function (resolve , reject){
    setTimeout(function(){
        console.log("PRomise 5 is running")
        let error  = false;
        if(!error){
         resolve({username:"JavaScript" , pass : "123"})   
        }
        else{
            reject("Error JS went wrong")
        }
    },1000)
})

async function consumePromise5(){
   try {
    const a = await promiseFive
    console.log(a);
   } catch (error) {
    console.log(error);
    
   }
}
consumePromise5()

// async function getAllUsers() {
//    try {
//     const response = await fetch("https://api.github.com/users/manishpoudel-7")
//     const data =  await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
    
//    }
    
// }
// getAllUsers()


fetch('https://api.github.com/users/manishpoudel-7')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch(function(error){
    console.log(error);    
})
