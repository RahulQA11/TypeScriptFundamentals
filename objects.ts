//Objects
const person = {
    name: "John",
    age: 30,
    isEmployed: true
};
console.log("Person Details:");
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Is Employed: " + person.isEmployed);


// Object with explicit type annotation
const person2: { name: string; age: number; isEmployed: boolean } = {
    name: "John",
    age: 30,
    isEmployed: true
};
console.log("Person Details:");
console.log(person)
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Is Employed: " + person.isEmployed);


const contactInfo: { email: string; phone?: string } = {
    email: "playwright@gmail.com",
    phone: "123-456-7890" // Optional property
};

console.log("Contact Info:");
console.log("Email: " + contactInfo.email);

const mergedDeatils = { ...person, ...contactInfo };
console.log("Merged Details:", mergedDeatils);


type person = {
    name: string;
    age: number;
    isEmployed: boolean;
};
const person3: person = {   
    name: "Alice",
    age: 28,
    isEmployed: false   
};
console.log("Person3 Details:");
console.log("Name: " + person3.name);
console.log("Age: " + person3.age);
console.log("Is Employed: " + person3.isEmployed);