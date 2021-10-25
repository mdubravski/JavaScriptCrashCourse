// objects as arguments

class Car{
    constructor(make, color){
        this.make = make;
        this.color = color;
    }
}

function changeColor(car, color){
    car.color = color;
}

let car1 = new Car("Ford","Grey");
changeColor(car1, "Blue");
console.log(car1.color);