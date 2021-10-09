// reduce() = reduces an array to a single value, the return value of the callback function is accumulated result, and is provided as an argument in the next call to the callback function.

let letters = ["H", "E", "L", "P"]

function combineLetters(total, nextLetter, index, array) {

    return total + nextLetter;
}

let word = letters.reduce/*reduceRight*/(combineLetters);

console.log(word);