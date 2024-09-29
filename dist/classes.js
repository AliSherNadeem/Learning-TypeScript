"use strict";
// Classes in TypeScript are a blueprint for creating objects. They encapsulate data (properties) and behavior (methods) together, following the principles of object-oriented programming (OOP).
// TypeScript classes support access modifiers: public, private, and protected.
// Public: Accessible from anywhere.
// Private: Accessible only within the class.
// Protected: Accessible within the class and its subclasses.
class Product {
    //A constructor is a special method in a class that is automatically called when an instance (object) of the class is created. It is used to initialize the object's properties.
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getDetails() {
        return `${this.name} (ID: ${this.id}) - Price: $${this.price}`;
    }
}
const product1 = new Product(101, "Laptop", 999.99);
console.log(product1.getDetails()); // Output: Laptop (ID: 101) - Price: $999.99
//another Example with sub classes
// Base Class: Vehicle
class Vehicle {
    constructor(model, mileage) {
        this.model = model;
        this.mileage = mileage;
    }
    getMileage() {
        return this.mileage;
    }
    // Simple method to get a description of the vehicle
    getDescription() {
        return `Vehicle Model: ${this.model}, Mileage: ${this.getMileage()} miles`;
    }
}
// Subclass: Car
class Car extends Vehicle {
    constructor(model, mileage, doors) {
        super(model, mileage);
        this.doors = doors;
    }
    // Method to display details of the car
    displayDetails() {
        console.log(`${this.getDescription()}, Doors: ${this.doors}`);
    }
}
// Subclass: Motorcycle
class Motorcycle extends Vehicle {
    constructor(model, mileage, type) {
        super(model, mileage);
        this.type = type;
    }
    // Method to display details of the motorcycle
    displayDetails() {
        console.log(`${this.getDescription()}, Type: ${this.type}`);
    }
}
// Using the Classes
const myCar = new Car("Toyota Camry", 15000, 4);
myCar.displayDetails(); // Output: Vehicle Model: Toyota Camry, Mileage: 15000 miles, Doors: 4
const myMotorcycle = new Motorcycle("Harley Davidson", 5000, "Cruiser");
myMotorcycle.displayDetails(); // Output: Vehicle Model: Harley Davidson, Mileage: 5000 miles, Type: Cruiser
