//switch 

// switch(expression  ) {{
//     case x  :
//         // code block
//         break;
//     case y  :
//         // code block
//         break;
//     default  :
//         // code block
// }

switch(new Date().getDay()) {
    case 0:
        console.log("Today is Sunday."); 
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;  
    case 5:
        console.log("Today is Friday.");
        break;
    case 6: 
        console.log("Today is Saturday.");
        break;
    default:
        console.log("Invalid day.");
}

console.log(new Date().getDay());

console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());   
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toISOString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());   
console.log(new Date().getTime());
console.log(new Date().getFullYear());
console.log(new Date().getMonth() + 1); // Months are zero-based
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().toUTCString());
console.log(new Date().toJSON());
console.log(new Date().toLocaleString());