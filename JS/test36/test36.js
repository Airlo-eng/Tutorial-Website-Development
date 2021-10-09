// arrow function =>
// shortcut for function expression

/*
let hello;
let x = "Yo";
let y = "Airlo-eng";

// function expression

hello = function(x, y) {
    console.log(x);
    console.log(y);
}

console.log(hello(x, y));

// arrow function

hello = (x, y) => {
    console.log(x);
    console.log(y);
};
console.log(hello(x, y));
*/

// map()

let storeUSD = [5, 6, 7, 8, 9];
let storeEUR;

let storeEUR = storeUSD.map(value => value *= 0.84);
console.log(storeEUR);

// filter()

let students = [16, 17, 18, 19, 20];
let adultStudents;

let adultStudents = students.filter(age =>  age >= 18);
console.log(adultStudents);

// reduce()

let letters = ["H", "E", "L", "P"]

let word = letters.reduce((total, nextLetter) => total + nextLetter);
console.log(word);