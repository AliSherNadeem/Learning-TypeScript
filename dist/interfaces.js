"use strict";
// An interface in TypeScript is a way to define the shape of an object. It specifies what properties an object should have and their types,
let boy = {
    name: "Ali",
    age: 25,
};
console.log(boy);
let boys = {
    name: "Ali",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
boys.greet(); // Output: Hello, my name is Ali
let myDog = {
    species: "Canine",
    breed: "Labrador",
};
console.log(myDog);
