// array = a special variable,
//         that can hold more than one value.

//         Each "space" is known as an element

//         You access elements in an array by referring
//         to the index number ex.[0]

var cars = ["Mustang", "Corvet", "Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Tesla"); // adds an element
cars.pop(); // removes last element

var numberOfCars = cars.length; // returns length of array

// cars = cars.sort(); // sorts array alphabetically/numerically
// cars = cars.reverse(); // reverse sort an array

var lastCar = cars[cars.length - 1];

// console.log(cars);
console.log(numberOfCars);
console.log(lastCar);