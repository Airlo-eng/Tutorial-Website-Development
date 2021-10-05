// *********** index.js **********

// Type Conversion of numbers, strings, booleans
// (Explicit vs Implicit)

// change the datatype of a value to another

var age = window.prompt("Enter your age");

console.log("Happy Birthday!");

age = Number(age);

age += 1;

console.log(typeof age);
console.log(age);