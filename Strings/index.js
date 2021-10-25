/**
 * useful string properties and methods
 */

var myName = "Michael Angelo Dubravski   ";
//var first = myName.slice(4,11);
var first = myName.slice(0, myName.indexOf(" "));
var street = "123 fake street";
var city = "Nowhere XY 12345";
var address = street.concat(" ", city);
var phone = "123-4546-7890";
phone = phone.replace("1","5");
phone = phone.replaceAll("-"," ");


console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(" "));
console.log(myName.lastIndexOf("i"));
console.log(myName.trim());
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(first);
myName = myName.trim();
var last = myName.slice(myName.lastIndexOf(" ")).trim();
console.log(last);
console.log(address);
console.log(phone);
