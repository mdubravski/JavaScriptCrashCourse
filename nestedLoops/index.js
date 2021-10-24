// nested loop = a loop within a loop

var symbol = window.prompt("Enter a symbol to use.");
var rows = Number(window.prompt("Enter number of rows."));
var cols = Number(window.prompt("Enter number of columns."));

for(let i = 0 ; i < rows; i++){
    for(let j = 0; j < cols; j++){
        document.getElementById("myRect").innerHTML += symbol;
    }
    document.getElementById("myRect").innerHTML += "<br>";
}