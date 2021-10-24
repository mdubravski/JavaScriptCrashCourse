/**
 *  array = a special varaible that can hold moprre than one value
 *          Each "space" is known as an element
 *          You can access elements in an array by reffering
 *          to the index number ex.[0] -> first element of array
 */

var cars = ["Mustang", "Corvette", "Jaguar"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// .push(<element>) to add to array
cars.push("Tesla");
console.log(cars[3]);

// .pop() to remove last element 
cars.pop();
console.log(cars[2]);

// .length to get the length of array
console.log(cars.length);

// get last element of an array
console.log(cars[cars.length-1]);

// .sort to srot array aplhabetically/numerically
cars.sort();
console.log(cars);

// .reverse to reverse array
cars.reverse()
console.log(cars);