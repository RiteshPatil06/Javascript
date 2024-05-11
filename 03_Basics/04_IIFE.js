// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();

//function def //execution
//()();

////
( (name) => {
    //unNamed IIFE 
    console.log(`DB connected 2 ${name}`);
}) ('ritesh');