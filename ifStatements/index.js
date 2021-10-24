/**
 *  if statement =  a basic form of decision making,
 *                  if a condidtion true, do something
 *                  else, don't do it!
 */

var age = window.prompt("enter your age");

if(age > 18){
    console.log('You are over 18!');
}else if(age < 18){
    console.log('You are under 18!');
}else{
    console.log('You are 18!');
}