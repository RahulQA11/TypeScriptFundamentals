//If statement

// if(condition){
//     //code to be executed if condition is true
// }

let myAge = 20;
if(myAge >= 18){
    console.log("You are eligible to vote.");
}


//Else if statement

// if(condition){
//     //code to be executed if condition is true
// } else if(anotherCondition){
//     //code to be executed if anotherCondition is true
// }

let num = 15;
if(num > 0){
    console.log(num + " is a positive number.");
}   
else if(num < 0){
    console.log(num + " is a negative number.");
}   


//Else statement

// if(condition){
//     //code to be executed if condition is true
// }else{
//     //code to be executed if condition is false
// }

let num3 = 0;
if(num3 > 0){
    console.log(num + " is a positive number.");
}  
else{
    console.log("The number is zero.");
}

//nested condition

let num5 = -10;
if(num5 >= 0){
    if(num5 == 0){
        console.log("The number is zero.");   
    }else{
        console.log(num5 + " is a positive number.");
    }      
} else{
    console.log(num5 + " is a negative number.");
}