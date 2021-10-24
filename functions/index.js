/**
 * A function is a block of code designed to perform a particualr task/procedeure.
 * 
 * We invoke/call a fuction whenever we want it do do something.
 * We need to define what we want task to do.
 */

// global scope variable
var myName = "Michael"

function sayHello(name, age){
    console.log('Hello',myName);
    console.log('You are',age,"years old");
    console.log('Have as nice day');
    console.log('Goodbye');
};

function toCelsius(temp){
    return (temp-32)*(5/9);
};

function toFarenheit(temp){
    return (temp * 9/5) + 32;
}

sayHello(myName,22);
console.log(toCelsius(100));
console.log(toFarenheit(37.7));