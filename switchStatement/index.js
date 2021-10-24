/**
 *  switch = statement that evaluates a value/expression
 *           matches the value to many case clauses
 *           more efficient than many "else if" statements   
 */

var grade ="F";

switch(grade){

    case "A":
        console.log('You did great!');
        break;
    case "B":
        console.log('You did good.');
        break;
    case "C":
        console.log('You did okay.');
        break;
    case "D":
        console.log('You did bad.');
        break;
    case "F":
        console.log('You did terrible!');
        break;
    default:
        console.log(grade,"is not a letter grade");
}