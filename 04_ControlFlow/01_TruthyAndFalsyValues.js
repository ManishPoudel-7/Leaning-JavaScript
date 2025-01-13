// Falsy
//false , 0 , -0 , BingInt On , "" , null , undefined , NaN


// Truthy 
// "0" , 'false' , " " , [] , {}     , function(){}

const obj = {}

if(Object.keys(obj).length===0){
    console.log("Empty Obj");
    
}