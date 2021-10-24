/**
 *  arithmetic expression = some combinations of operands and operators that can be evalueate to a value
 *                          operands (values, vartiables, etc.)
 *                          operators (+ - * / % **)
 * 
 * 
 *  operator precedence =   PEMDAS
 *                          1. parenthesis ()
 *                          2. exponents 
 *                          3. multiply * and divide /
 *                          4. addition + and subtraction -
 *                          
 */

var friends = 10;

friends = friends + 1;
friends += 1; 

friends = friends / 2;
friends = friends * 2;
friends = friends % 2 + 1;

friends = 10;
friends--;

// 9^2
friends = friends**2;


console.log(friends);
