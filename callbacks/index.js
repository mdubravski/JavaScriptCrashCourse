/**
 * 
 *  callback = a function passed as an argument to antoher fuction.
 *             Allows a function to invoke another function
 * 
 */

let message;

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myH1").innerHTML = output;
}

function setMessage(text){
    message = text;
    return message;
}

function setMessage1(text, callback){
    message = text;
    callback(message);
}

// nested function calls
displayConsole(setMessage("Hi Mom!"));

setMessage1("Hi Dad!", displayConsole);
setMessage1("Hi Dad!", displayDOM);