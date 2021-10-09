// array of functions

function jump() {
    console.log("You jump!");
}

function punch() {
    console.log("You punch!");
}

function kick() {
    console.log("You kick!");
}

function block() {
    console.log("You block!");
}

let actions = [];

action = [jump, punch, kick, block];

/*
for (let i = 0; i < actions.length; i++) {
    action[i]();
}
*/

actions.forEach(func => func());