//Tuples
let myTuple: [number, string, boolean] = [25, "Hello", true];

console.log("Tuple values:");
console.log("Number: " + myTuple[0]);
console.log("String: " + myTuple[1]);
console.log("Boolean: " + myTuple[2]);


let person : [string, number] = ["Alice", 30];
let userName: string = person[0];
let userAge: number = person[1];
console.log("Name: " + userName + ", Age: " + userAge);

//Updating tuple values
person[0] = "Rahul";
person[1] = 32;
console.log("Updated Name: " + person[0] + ", Updated Age: " + person[1]);  
