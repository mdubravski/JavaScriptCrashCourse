/**
 * 
 * new feature as of ES6
 * 
 * template literals = another way of formatting output,
 *                     can contain placeholders for
 *                     formatting and inserting:
 *                      strings/values/variables/etc.
 * 
 *                     `...` backticks
 *                     ${...} placeholder
 * 
 *                     can use multiple lines
 *                     embed expressioins
 * 
 */

let firstName = "Michael";
let lastName = "Dubravski";
let price = 10;
let taxRate = 0.05;
let total;

console.log(`Hello ${firstName} ${lastName}!`);

console.log(`Hello 
${firstName} 
${lastName}
!`);

console.log(`Price: ${price}
tax: ${taxRate}
total: ${total = price+price*taxRate}`);