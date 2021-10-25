/**
 * class = A "template" for creating objects.
 *         Define properties and/or methods.
 * 
 * constructor = A special method for assigning properties.
 *               Automatically called when creating an object.
 * 
 * this = A reference to the object that we're currently working on.
 * 
 * static = a method or property that belongs to a class an not any one object.
 * 
 */

class Car{

    // static property
    static numberOfCars = 0;

    // static method
    static beginRace(){
        console.log('The race has begun!');
    }

    // constructor
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        Car.numberOfCars++;
    }

    // methods
    drive(){
        console.log('You drive',this.model);
    }
    brake(){
        console.log('You step on the breaks in', this.model);
    }
    whatisThis(){
        return this;
    }

}

let car1 = new Car("Ford","F-150", 2019, "Grey");
let car2 = new Car("GMC", "Envoy", 2003, "Navy");

// car1.drive();
// car2.brake();
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// console.log(car1.whatisThis());
// console.log(this);
console.log(Car.numberOfCars);
Car.beginRace();