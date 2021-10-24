/**
 *  for in loop =   Loops through the elements in an array
 *                  or the properties of an Object
 *                  less syntax to write, but less flexible
 * 
 */

let letters = ['H','E',"L","P"];

let Car = {
    make: 'Ford',
    model: 'F-150',
    year: 2019,
    color: 'Grey'
}

for(let i in letters){
    console.log(letters[i]);
}

for(let p in Car){
    console.log(Car[p]);
}