/*
    A function is a block of code designed to perform
    a particular task/procedure. (subroutine)

    We invoke "call" whenever we want it to do something.
    We need to define what we want task to do.

    Functions have global access to variables.
*/

/*
function sayHello(name, age) {
    console.log("Hello", name);
    console.log("You are", age, "years old");
};

var myName = "Airlo";

sayHello("Airlo", 12);
*/

function toCelsius(f){
    var result = (f-32) * (5/9);
    return (f-32) * (5/9);
};

var myTemp = toCelsius(100);

console.log("My temp in C is", myTemp, "degrees");

function toFarenheit(c) {
    return (c * 9/5) + 32;
};

var myTemp2 = toFarenheit(37.7);

console.log("My temp in F is", myTemp2, "degrees");