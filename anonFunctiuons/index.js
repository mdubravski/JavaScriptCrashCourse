/**
 * 
 * anonymous functions = Function w/o a name.
 *                       Often not accessible after
 *                       its initial creation.
 * 
 *  benefits =    Dosen't clutter global namespace
 *                Useable once
 *                Can be passed as arguments
 * 
 * IIFE = a JS function that runs as soon as it is defined
 *  grouping operator = ()
 * 
 */

(function(){
    document.getElementById("myH1").innerHTML = "hey!";
})();

// setTimeout(function, milliseconds);

let task = function(){ document.getElementById("myH1").innerHTML = "Yo!";};
setTimeout(task, 2000);

setTimeout(function(){
    document.getElementById("myH1").innerHTML = "sup?";
}, 2000);


