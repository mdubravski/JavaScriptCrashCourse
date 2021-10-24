/**
 *  logical operators = used to write more complex functions
 *                      && AND (checks if both conditions are true)
 *                      || OR  (checks if at least one condition is true)
 *                      !  NOT (reverses boolean values)
 */

var myName = window.prompt("Enter your name");
var time = 20 // military time

if(!(myName=="")){
    console.log('Hello',myName);
}else{
    console.log('You did not enter your name!');
}

if(time < 6 || time >=20){
    console.log('It is dark outside.');
}else{
    console.log('It is light outside');
}
