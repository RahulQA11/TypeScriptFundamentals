//Functions

function hi() {
    console.log("Hi");
}   
hi();

function greet(name: string): string {
    return "Hello, " + name;
}
console.log(greet("Alice"));

function add(a: number, b: number): number {
    return a + b;
}   
console.log("Sum: " + add(5, 10));

function add2(a: number, b: number=0){
console.log(a + b);
}
add2(1,2);
add2(1);


function multiply(a: number, b: number = 2): number {
    return a * b;
}
console.log("Multiply with default b: " + multiply(5));
console.log("Multiply with provided b: " + multiply(5, 3));
function displayInfo(name: string, age?: number): void {
    if (age !== undefined) {
        console.log("Name: " + name + ", Age: " + age);
    } else {
        console.log("Name: " + name + ", Age not provided");
    }
}
displayInfo("Bob", 25);
displayInfo("Charlie"); 

const divide = (a: number, b: number): number => {
    return a / b;
}   
console.log("Division: " + divide(10, 2));

const square = (x: number): number => x * x;
console.log("Square: " + square(4));        
function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

console.log("Full Name: " + getFullName("John", "Doe"));

function factorial(n: number): number { 
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5: " + factorial(5));
function swapValues<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}

const swapped = swapValues<number, string>(42, "Answer");
console.log("Swapped Values: ", swapped);

function calculateArea(radius: number): number {
    return Math.PI * radius * radius;
}   
console.log("Area of circle with radius 3: " + calculateArea(3));

function isEven(num: number): boolean {
    return num % 2 === 0;
}   
console.log("Is 4 even? " + isEven(4));
console.log("Is 7 even? " + isEven(7));
function findMax(...numbers: number[]): number {
    return Math.max(...numbers);
}   
console.log("Max value: " + findMax(3, 5, 1, 8, 2));
function greetUser(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}   
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Hi"));
function printDetails(...details: string[]): void {
    details.forEach(detail => console.log(detail));
}   
printDetails("Detail 1", "Detail 2", "Detail 3");

function calculateSum(...nums: number[]): number {  
    return nums.reduce((acc, curr) => acc + curr, 0);

}   
console.log("Sum of numbers: " + calculateSum(1, 2, 3, 4, 5));



//Arror function

const multiply2 = (a:number, b: number) :number => a*b;
console.log("Multiplication: " + multiply2(4, 5));


const greetArrow = (name: string): string => {
    return `Hello, ${name}`;
}
console.log(greetArrow("Eve"));