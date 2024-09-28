//Type aliases in TypeScript allow you to create a new name for a type. This makes your code more readable and easier to manage, especially when working with complex types.

// basic type
type Username = string; // 'Username' is now an alias for 'string'
let users: Username = "ali sher";
console.log(users);

// Object Types
type Person = {
  name: string;
  age: number;
};

let user: Person = {
  name: "Ali",
  age: 25,
};
console.log(user);

// union type
type StringOrNumber = string | number;

let userid: StringOrNumber;
userid = "ABC"; // also valid
userid = 123; // valid
console.log(userid);

// Function Types

type GreetingFunction = (name: string) => string;
const greet: GreetingFunction = (name) => `Hello, ${name}!`;
console.log(greet("Ali")); // Output: Hello, Ali!

// array type
type NumberArray = number[];
let scores: NumberArray = [95, 85, 75]; // 'scores' is an array of numbers
console.log(scores);
