//Global scope
var globalVar = "I am a global variable";

function checkScope() {
    //Function scope
    var functionVar = "I am a function variable";
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible

    if(true){
        //Block scope
        let blockVar = "I am a block variable";
        console.log(blockVar); // Accessible
    }   
    //console.log(blockVar); // Not Accessible, would throw an error
}

checkScope();
//console.log(functionVar); // Not Accessible, would throw an error
console.log(globalVar); // Accessible
//console.log(blockVar); // Not Accessible, would throw an error

//local scope using IIFE (Immediately Invoked Function Expression)
(function(){
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible
})();
//console.log(localVar); // Not Accessible, would throw an error
//Module scope (uncomment the following lines if using modules)

//block scope using let and const
if(true){
    let blockLetVar = "I am a block variable declared with let";    
    const blockConstVar = "I am a block variable declared with const";

    console.log(blockLetVar); // Accessible
    console.log(blockConstVar); // Accessible
}       
//console.log(blockLetVar); // Not Accessible, would throw an error
//console.log(blockConstVar); // Not Accessible, would throw an error

//Note: In TypeScript/JavaScript, var is function-scoped, while let and const are block-scoped.
