//For loop

// for(Initialization; Condition; Increment/Decrement){
//     //code to be executed
// }

for(let i = 1; i <= 5; i++){
    console.log("For Loop Iteration: " + i);
}

//While loop
// while(condition){
//     //code to be executed
// }

let count =0;
while(count < 5){
    console.log("While Loop Count: " + count);
    count++;
}

//Do-While loop 
// do{
//     //code to be executed
// }while(condition);   

let number = 0;
do{
    console.log("Do-While Loop Number: " + number);
    number++;
}while(number < 5);

//Break statement
// for(let i = 1; i <= 10; i++){
//     if(i == 6){
//         break; //exit the loop when i is 6
//     }
//     console.log("Break Statement i: " + i);
// }

for(let i = 1; i <= 10; i++){
    if(i == 6){
        break; //exit the loop when i is 6
    }       
    console.log("Break Statement i: " + i);
}   


//Continue statement
// for(let i = 1; i <= 10; i++){
//     if(i == 6){  
//         continue; //skip the iteration when i is 6
//     }
//     console.log("Continue Statement i: " + i);
// }    
for(let i = 1; i <= 10; i++){
    if(i == 6){  
        continue; //skip the iteration when i is 6
    }
    console.log("Continue Statement i: " + i);
}