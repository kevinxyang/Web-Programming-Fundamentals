// Wacky - How many licks...?
// ==========================

// Givens
// ======

var time = prompt("How long (in minutes) did it take you to reach the center of the Tootsie Pop?");
var numberOfLicks = prompt("How many licks did it take you to reach the center of the Tootsie Pop?");
var flavor = prompt("What flavor was the Tootsie Pop?");



// Calculations based on givens
// ============================

var licksPerSecond = numberOfLicks / (time * 60);



// Output
console.log("It took you " + numberOfLicks + " licks and an average of " 
    + licksPerSecond + " licks per second to get to the center of a " + flavor 
    + " Tootsie Pop.");