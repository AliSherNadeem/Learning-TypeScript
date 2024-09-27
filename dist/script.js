"use strict";
const message = "Hello, from TypeScript!";
console.log(message);
let count = 5;
console.log(count);
let myname = "Ali";
console.log(myname);
let isActive = true;
console.log(isActive);
let randomValue = "Hello";
randomValue = 42; // This is allowed with 'any'
console.log(randomValue);
let array;
array = [1, 2, 3];
console.log(array);
const array2 = [1, 2, "ali"];
console.log(array2);
let person = ["Ali", 25];
console.log(person);
function logMessage() {
    console.log("Logging a message");
}
console.log(logMessage());
