/**
 * 
 *  Math.random() = generates a pseudo-random between 0 and 1
 *                  dont use this for security purposes
 */

var randomNumber1;

// between 0 and 1
randomNumber1 = Math.random();
console.log(randomNumber1);

// between 0 and 5
randomNumber1 = Math.floor(Math.random() * 6);
console.log(randomNumber1);

// between 1 and 6
randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

/*
 *  returns a random number between min and max
 */

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomNum(1, 50));

