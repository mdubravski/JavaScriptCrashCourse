/**
 * function expression = A function can also be defined using an expression.
 *                       Function expression can be stored in a variable.
 *                       The variable can be used as a function.
 *                       They can be invoked by adding ()
 * 
 *                       1. Useful for closures
 *                       2. Used in IIFE (funcs that run as soon as defined)
 *                       3. Can be passed as arguments to other functions
 * 
 */

// function declariation

function sayHello(){
    console.log('Hello');
}

sayHello();

// function expression

let greeting = function(){console.log("Greetings");};
greeting();

let greeting1 = function(){document.getElementById("myH1").innerHTML="Hello";};

function output(func){
    func();
}

output(greeting);
greeting1();
