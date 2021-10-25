/**
 *  scope = where a variable is accessoble
 *  let = declare variables with a block scoped {}
 *  var = declare variables with a function scoped ()
 * 
 */

// i cannot be accessed outside of loop
for(let i = 1; i<=3; i++){
    console.log(i);
}

// ! this will override window.name !
// var name = "Michael Dubravski";
let name = "Michael Dubravski";