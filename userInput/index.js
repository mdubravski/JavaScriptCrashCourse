// easy way, to collect user input, convient but not practical
// var myName = window.prompt("What is your name?");
// console.log('Your name is',myName);

// harder way, create a text field and a button

document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").value;
    console.log('Hello',myName);

}

document.getElementById("myAButton").onclick = function(){
    var myAge = document.getElementById("myAge").value;
    console.log('Your age is',myAge);
}