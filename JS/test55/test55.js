// Synchronous = code that runs top down
// Asynchronous = code that runs in parallel with other code.

// Asynchronous:
setTimeout(sayHello, 3000);

function sayHello() {
    alert("HELLO!");
}

// Synchronous:

let begin = function() {
    console.log("BEGIN!");
    alert("HELLO!");
}

let end = function() {
    console.log("END!");
}

begin();
end();