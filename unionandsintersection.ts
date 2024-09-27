// union type example

let id: number | string;
id = 101;
id = "abc";
console.log(id);

// intersection type example 1

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
  position: "Developer",
};
console.log(staff);
