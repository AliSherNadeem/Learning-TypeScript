// An interface in TypeScript is a way to define the shape of an object. It specifies what properties an object should have and their types,

interface Student {
  name: string;
  age: number;
}

let boy: Student = {
  name: "Ali",
  age: 25,
};
console.log(boy);

// Example with Methods:
// An interface can also specify methods that an object must implement.

interface Students {
  name: string;
  age: number;
  greet(): void; // 'greet' method with no parameters and no return type
}

let boys: Students = {
  name: "Ali",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

boys.greet(); // Output: Hello, my name is Ali

//Example of Extending Interfaces:
//Interfaces can extend other interfaces to inherit properties.
interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  species: "Canine",
  breed: "Labrador",
};
console.log(myDog);
