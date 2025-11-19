//Arethemtic Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); // Addition 
console.log("Subtraction: " + (a - b)); // Subtraction
console.log("Multiplication: " + (a * b)); // Multiplication
console.log("Division: " + (a / b)); // Division
console.log("Modulus: " + (a % b)); // Modulus

//comparison Operators
let x = 10;
let y = 20;

console.log("x == y: " + (x == y)); // Equal to
console.log("x === y: " + (x === y)); // Strict equal to
console.log("x != y: " + (x != y)); // Not equal to
console.log("x > y: " + (x > y)); // Greater than
console.log("x < y: " + (x < y)); // Less than
console.log("x >= y: " + (x >= y)); // Greater than or equal to
console.log("x <= y: " + (x <= y)); // Less than or equal to        

//logical Operators
let p = true;
let q = false;

console.log("p  && q: " + (p && q)); // Logical AND 
console.log("p  || q: " + (p || q)); // Logical OR
console.log("!p : " + (!p)); // Logical NOT     

//assignment Operators
let m = 10;
m += 5; // m = m + 5
console.log("m after += 5: " + m);
m -= 3; // m = m - 3    
console.log("m after -= 3: " + m);
m *= 2; // m = m * 2
console.log("m after *= 2: " + m);
m /= 4; // m = m / 4
console.log("m after /= 4: " + m);
m %= 3; // m = m % 3
console.log("m after %= 3: " + m);          

//trenary Operator

let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Voting Eligibility: " + eligibility);