const message: string = "Hello, from TypeScript!";
console.log(message);

let count: number = 5;
console.log(count);

let myname: string = "Ali";
console.log(myname);

let isActive: boolean = true;
console.log(isActive);

let randomValue: any = "Hello";
randomValue = 42; // This is allowed with 'any'
console.log(randomValue);

let array: number[];
array = [1, 2, 3];
console.log(array);

const array2: any[] = [1, 2, "ali"];
console.log(array2);

let person: [string, number] = ["Ali", 25];
console.log(person);

function logMessage(): void {
  console.log("Logging a message");
}
console.log(logMessage());
