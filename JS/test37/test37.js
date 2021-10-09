// numeric sorting

let numbers = [3, 14, 1, 2, 5];

numbers.sort(); // DEFAULT ASCII ORDER

/*
numbers.sort(function(x, y) {
    return y - x;
});
*/

numbers.sort((x, y) => y - x);

console.log(numbers);