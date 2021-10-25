let numbers = [3,14,1,2,5];

numbers.sort(); // ASCII character order

// function expression
numbers.sort(function(x,y){
    return x - y;
});

// arrow function
numbers.sort((x,y) => y-x);

console.log(numbers);