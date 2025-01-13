//for of each

let arr = [10,12,112,356,632,32,41,1,3]
for(const i of arr){
    // console.log(i);  
}

let greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each character is ${greet}`)
}

const map  = new Map()                                      // Takes only one value 
map.set('IN' , "India")                                                         
map.set('USA' , "United States of America")
map.set('UK' , "United Kingdom")

console.log(map);

for(const [key,value] of map){
    // console.log(key , ":" , value);
    
}

const myObj1 = {
    js : "JavaScript",
    cpp : "C++",
    r : "ruby"
}

for(const i in myObj1){
//console.log(`Values for ${i} is ${myObj1[i]}`);
    
}


const arr2 = ["js" , "cpp" , "c" , "java"]
for (const i in arr2){
    console.log(`Array values ${i} is ${arr2[i]}`)
}