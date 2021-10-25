/**
 *  reduce() = reduces an array to a single value 
 *             the return value of the callback
 *             function is the accumlated result,
 *             and is provided as an argument in
 *             the next call to the callback function
 * 
 */

let letters = ["H","E","L","P"];

function combineLetters(total, nextLetter, index, array){
    return total + nextLetter;
}

console.log(letters);
let word = letters.reduce(combineLetters);
console.log(word);
word = letters.reduceRight(combineLetters);
console.log(word);

