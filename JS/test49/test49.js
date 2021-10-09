// template literals = another way of formatting output,
// can contain placeholders for formatting and inserting:
// strings/values/variables/etc.

// ` backticks
// ${} placeholder

// can use multiple lines embed expressions

let firstName = "Airlo";
let lastName = "-eng";
let price = 10;
let taxRate = 0.05;
let total;

//console.log("Hello", firstName, lastName + "!");
console.log(`Hello ${firstName} ${lastName}!`);

console.log(`The price is: $${price}`);
console.log(`Tax rate: ${taxRate}`);
console.log(`Tax is: $${price * taxRate}`);
console.log(`Total is: $${price + (price * taxRate)}`);