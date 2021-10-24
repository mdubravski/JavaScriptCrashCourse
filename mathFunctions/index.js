// Math = An object that provides basic mathematics
//        functionality and constants

var myNum;

// round to next nearest integer
myNum = Math.round(3.5);

// round down
myNum = Math.floor(3.9);

// round up
myNum = Math.ceil(3.1);

// Raise number to exponent ex. 3^3
myNum = Math.pow(3,3);

// take square root of a number
myNum = Math.sqrt(25);

// get max of set of numbers
myNum = Math.max(3,4,7,9,3,1)

// get min of set of numbers
myNum = Math.min(3,4,7,9,3,1)

// some useful constants
myNum = Math.PI;
myNum = Math.E;

getHypo();

function getHypo(){
    var a = Number(window.prompt("Enter first side:"));
    var b = Number(window.prompt("Enter second side:"));

     console.log(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)));
}