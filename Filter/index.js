/**
 * filter() = Returns the elements of an array
 *            that meets a condition specified
 *            in a function.
 * 
 */

let students = [16,17,18,19,20];

function checkAge(age, index, array){
    if(age >= 18){
        return age;
    }
}

let adultStudents = students.filter(checkAge);

console.log(students);
console.log(adultStudents);