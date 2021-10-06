// nested loop = a loop inside of another loop

var symbol = window.prompt("Enter a symbol to use");
var rows = window.prompt("Enter a rows to use");
var columns = window.prompt("Enter a columns to use");

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}