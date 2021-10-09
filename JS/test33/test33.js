// anonymous function = functions w/o name often not accessible after its initial creation
// benefits = doesn't clutter global namespace
//            usable once. can be passed as arguments

// IIFE = a js function that runs as soon as it is defined
// grouping operator = ()

(function(){
    document.getElementById("myH1").innerHTML = "hey!";
})();

// setTimeout(function, milliseconds);

/*
let task = function() {
    document.getElementById("myH1").innerHTML = "sup?";
};
*/

setTimeout(function() {
    document.getElementById("myH1").innerHTML = "sup?";
}, 1000);