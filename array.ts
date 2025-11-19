//Array litrals 
const fruits: string[] = ["Apple", "Banana", "Mango"];
console.log("Fruits: " + fruits.join(", "));
console.log("First Fruit: " + fruits[0]);

//Array using Array constructor
const numbers: number[] = new Array(1, 2, 3, 4, 5);
console.log("Numbers: " + numbers.join(", "));
console.log("Third Number: " + numbers[2]);

//initializing an empty array and adding elements later
const colors: string[] = [];
colors.push("Red"); 
colors.push("Green");
colors.push("Blue");
console.log("Colors: " + colors.join(", "));
console.log("Second Color: " + colors[1]);

colors.pop(); // removes "Blue" 
console.log("Colors after pop: " + colors.join(", "));

const mixedArray: any[] = [1, "Two", true, 4.5];
console.log("Mixed Array: " + mixedArray.join(", "));
console.log("Length of Mixed Array: " + mixedArray.length);


colors.shift(); // removes "Red"
console.log("Colors after shift: " + colors.join(", "));        
colors.unshift("Yellow"); // adds "Yellow" at the start
console.log("Colors after unshift: " + colors.join(", "));

colors.slice(0, 1); // gets first element
console.log("Sliced Colors: " + colors.join(", ")); 
const moreFruits: string[] = fruits.concat(["Orange", "Pineapple"]);
console.log("More Fruits: " + moreFruits.join(", "));

const index = moreFruits.indexOf("Mango");
console.log("Index of Mango: " + index);


colors.map(color => console.log("Color: " + color));

const filteredFruits = moreFruits.filter(fruit => fruit.startsWith("P"));
console.log("Fruits starting with P: " + filteredFruits.join(", "));
//read only array 
const readOnlyArray: ReadonlyArray<number> = [10, 20, 30];
console.log("ReadOnly Array: " + readOnlyArray.join(", "));
//readOnlyArray.push(40); // Error: Property 'push' does not exist on type 'readonly number[]'
console.log("Length of ReadOnly Array: " + readOnlyArray.length);
//Iterating over an array
for(const fruit of fruits){
    console.log("Fruit from for-of loop: " + fruit);
}       
fruits.forEach(fruit => console.log("Fruit from forEach: " + fruit));