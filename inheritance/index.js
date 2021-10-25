/**
 * 
 * inheritance = useful for code reuseability
 *               Reuse properties and methods of an existing class.
 *               Children classes inherit from parent classes.
 * 
 */

// parent class
class Animal{
    constructor(){
        this.alive = true;
    }
    
    eat(){
        console.log('This creature is eating.');
    }
}

// child class
class Rabbit extends Animal{
    run(){
        console.log('The rabbit is running!');
    }
}

// child class
class Fish extends Animal{
    swim(){
        console.log('The fish is swimming');
    }
}

// child class
class Hawk extends Animal{
    fly(){
        console.log('The hawk is flying!');
    }
}


let r = new Rabbit();
let f = new Fish();
let h = new Hawk();
r.eat();
r.run();
f.eat();
f.swim();
h.eat();
h.fly();