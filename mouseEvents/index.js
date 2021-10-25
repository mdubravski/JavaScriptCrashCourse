/**
 * 
 * mouse events
 *  element.addEventListener(type, function);
 * 
 */

const div = document.querySelector("#myDiv");

div.style.height="200px";
div.style.width="200px";
div.style.backgroundColor="tomato";
div.style.border="2px solid";

// div.addEventListener("click", e => {
//     console.log('You clicked the mouse.');
//     div.style.backgroundColor = "dodgerblue";
// });

div.addEventListener("mousedown", e => {
    console.log('You are holding the mouse down.');
    div.style.backgroundColor = "dodgerblue";
});

div.addEventListener("mouseup", e => {
    console.log('You let go of the mouse.');
    div.style.backgroundColor = "green";
});

div.addEventListener("dblclick", e => {
    console.log('You double clicked.');
    div.style.backgroundColor = "orange";
});

div.addEventListener("contextmenu", e => {
    console.log('You opened the context menu.');
});

div.addEventListener("mouseover", e => {
    console.log('You entered the square.');
    div.style.backgroundColor = "gold";
});

div.addEventListener("mouseleave", e => {
    console.log('You left the square.');
    div.style.backgroundColor = "silver";
});

div.addEventListener("mousemove", e => {
    console.log('you are within the square');
});