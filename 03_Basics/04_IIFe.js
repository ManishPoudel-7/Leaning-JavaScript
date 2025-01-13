// Immediately Invoked Function Expression  (IIFE)

// used to immediately execute the code but most importantly to reduce the global scope pollution we use IIFE


function coffee(){
    console.log(`This is coffee`);   
}
 coffee();          // This part and if we write just after the IIFE it wont run because it doesnt know where to end the context thats why we have to use ;

(function chai(){                                       // named IIFE
    console.log(`this is chai`);  
})();

(() => {                                                // normal IIFE
    console.log("Hello after the IIFE");
    
})();

((name) => {
    console.log(`Hello , ${name}`);                      // parameterised IIFE
    
})("Manish")