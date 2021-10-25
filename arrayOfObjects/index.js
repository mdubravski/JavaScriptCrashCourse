// array of objects

class Car{
    constructor(make,color){
        this.make = make;
        this.color = color;
    }
}

let garage = [new Car("Ford", "Grey"), new Car("GMC","Blue")];

console.log(garage);