/**
 * 
 *  forEach() = Performs a function for each element in an array
 * 
 */

let total = 0;
let cart = [5,6,7,8,9];

function checkout(element){
    total+=element;
}

cart.forEach(checkout);
console.log("Your total is $" + total);

