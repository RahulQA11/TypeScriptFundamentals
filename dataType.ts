//Boolean
let isDone: boolean = true;
let isEnabled: boolean = false;

console.log("isDone: " + isDone + ", isEnabled: " + isEnabled);


//Number

let num1: number = 10;
let num2: number = 20.5;

console.log("num1: " + num1 + ", num2: " + num2);

//String

let firstName: string = "Rahul";
let lastName: string = 'Sharma';

console.log("Full Name: " + firstName + " " + lastName);

//Any

let dynamicVar: any = 5;
console.log("dynamicVar initially: " + dynamicVar);
dynamicVar = "Now I'm a string";
console.log("dynamicVar now: " + dynamicVar);   
dynamicVar = true;
console.log("dynamicVar finally: " + dynamicVar);


//Null and Undefined

let nullValue: null = null;
let UndefinedValue: undefined = undefined;

console.log("nullValue: " + nullValue + ", UndefinedValue: " + UndefinedValue);