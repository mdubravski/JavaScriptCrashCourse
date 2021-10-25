/**
 *  date object = represents a moment in time since epoch (refernce unit)
 * 
 */

let date;

date = new Date(0);
date = new Date(2022,8,13,18,1,2,3);
//date = new Date("April 20, 2022 16:20:01:02");

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliseconds = date.getMilliseconds();

date.setFullYear(2023);
date.setMonth(3);
year=date.getFullYear();
console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);

console.log(date);