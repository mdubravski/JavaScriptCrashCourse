/**
 * 
 * closure = A fucntion with preserved data.
 *           Gives you acces to an outter function's scope,
 *           from an inner function.
 * 
 *           State of variables in outer scope are "saved"
 *           Varaibles in outer score are considered "private"
 * 
 */


let score = function(){
    let points = 0;

    return function(){
        points += 1;
        return points;
    };
}();

console.log(score());
console.log(score());
console.log(score());