/**
 *  Type Conversion of numbers, strings, booleans
 *  Cange the datastype of one value to antother
 * 
 *  Explicit: 
 *  Implicit:
 */


var age = window.prompt("Enter your age")
age = Number(age);
age++;
console.log(age);

// convert to Number

age = Number(age);
console.log(age+1);
// convert to String
age = String(age+1);
console.log(age);
// convert to Bool
// 0  == false
// "" == false
// undefiend == false
// null == false
// NaN == false
// else == true

age = Boolean(age)
console.log(age);