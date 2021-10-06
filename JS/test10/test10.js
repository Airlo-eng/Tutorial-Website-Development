// ternary operator = Shortcut for if statements.
//                    Takes 3 operands

//                    1. A condition with ?
//                    2. Expression is True :
//                    3. Expression is False

// condition ? exportifTrue : exportIfFalse

/*
function checkWinner(win) {
    win ? console.log("You win!") : console.log("You lose!");
};

checkWinner(false);
*/

function checkAge(age) {
    return age >= 18 ? "You get beer!" : "You get apple juice!";
};

console.log(checkAge(30));