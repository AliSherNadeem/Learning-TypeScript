// union type example
// A union type in TypeScript means that a variable can hold values of multiple specified types. You can define a variable that can be one of several types by using the | symbol.

let id: number | string;
id = 101;
id = "abc";
console.log(id);

// intersection type example 1
//An intersection type combines multiple types into one, meaning a variable must have all the properties from the types it intersects. You can define an intersection using the & symbol.

type person = {
  name: string;
};
type employee = {
  id: number;
  position: string;
};
type worker = person & employee;
let a: worker = {
  name: "ALI",
  id: 101,
  position: "developer",
};
console.log(a);

// intersection type example 2

type Person1 = {
  name: string;
  age: number;
};

type Employee1 = {
  employeeId: number;
  position: string;
};

let staff: Person1 & Employee1 = {
  name: "Ali Sher",
  age: 25,
  employeeId: 123,
  position: "Front end Developer",
};
console.log(staff);
