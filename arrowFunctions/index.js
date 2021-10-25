/*jshint esversion: 6*/

/**
 * 
 *  arrow function => 
 *  shortcut for a function expression
 * 
 */

let x = "Yo! ";
let y = 'Mike';
let hello;
let storeUSD = [4,5,6,7,8];
let letters = ['H',"E","L","P"];

// function expression

hello = function(x){
    return 'Hello '+ x;
};

console.log(hello(x));

// arrow function

helloW = (x,y) => x + y;
console.log(helloW(x,y));

helloQ = (x,y) => {
    return x+y;
};

console.log(helloQ(x,y));

// -------------------------------------------------

// map
storeEUR = storeUSD.map(value => value*= 0.84);

console.log(storeEUR);

// filter
storeEURGreaterThan5 = storeEUR.filter(value => value > 5);

console.log(storeEURGreaterThan5);

// reduce

let word = letters.reduce(x = (total, nextLetter) => total+nextLetter);
console.log(word);







