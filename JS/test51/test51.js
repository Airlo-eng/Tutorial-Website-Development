// rest parameter = ...
// condenses an indefinite number of arguments
// into a type of array
// similar to spread operator, but used
// within a function's parameters

/*
function checkOut(...items) {
    let total = 0;

    for (let i in items) {
        total += items[i];
    }
    return total;
}

console.log(`The total is: $${checkOut(10, 20, 30)}`);
*/

function displayName(first, last, ...middle) {
    console.log(first, middle.join(' '), last);
}

displayName("Smitty", "Jensen", "Werben", "Jager", "Man");