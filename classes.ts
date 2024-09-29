// Classes in TypeScript are a blueprint for creating objects. They encapsulate data (properties) and behavior (methods) together, following the principles of object-oriented programming (OOP).

// TypeScript classes support access modifiers: public, private, and protected.

// Public: Accessible from anywhere.
// Private: Accessible only within the class.
// Protected: Accessible within the class and its subclasses.

class Product {
  private id: number;
  public name: string;
  public price: number;

  //A constructor is a special method in a class that is automatically called when an instance (object) of the class is created. It is used to initialize the object's properties.
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getDetails(): string {
    return `${this.name} (ID: ${this.id}) - Price: $${this.price}`;
  }
}

const product1 = new Product(101, "Laptop", 999.99);
console.log(product1.getDetails()); // Output: Laptop (ID: 101) - Price: $999.99

//another Example with sub classes
// Base Class: Vehicle
class Vehicle {
  public model: string;
  private mileage: number;

  constructor(model: string, mileage: number) {
    this.model = model;
    this.mileage = mileage;
  }

  public getMileage(): number {
    return this.mileage;
  }

  // Simple method to get a description of the vehicle
  public getDescription(): string {
    return `Vehicle Model: ${this.model}, Mileage: ${this.getMileage()} miles`;
  }
}

// Subclass: Car
class Car extends Vehicle {
  private doors: number;

  constructor(model: string, mileage: number, doors: number) {
    super(model, mileage);
    this.doors = doors;
  }

  // Method to display details of the car
  public displayDetails(): void {
    console.log(`${this.getDescription()}, Doors: ${this.doors}`);
  }
}

// Subclass: Motorcycle
class Motorcycle extends Vehicle {
  private type: string;

  constructor(model: string, mileage: number, type: string) {
    super(model, mileage);
    this.type = type;
  }

  // Method to display details of the motorcycle
  public displayDetails(): void {
    console.log(`${this.getDescription()}, Type: ${this.type}`);
  }
}

// Using the Classes
const myCar = new Car("Toyota Camry", 15000, 4);
myCar.displayDetails(); // Output: Vehicle Model: Toyota Camry, Mileage: 15000 miles, Doors: 4

const myMotorcycle = new Motorcycle("Harley Davidson", 5000, "Cruiser");
myMotorcycle.displayDetails(); // Output: Vehicle Model: Harley Davidson, Mileage: 5000 miles, Type: Cruiser
