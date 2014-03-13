// Wacky - How many licks...?
// ==========================

// Givens
// ======

// Prompts the user for the amount of time in minutes it took to reach the
// center of a Tootsie Pop and stores it in the time variable.
var time = prompt("How long (in minutes) did it take you to reach the center of the Tootsie Pop?");
// Prompts the user for the number of licks it took to reach the center of a 
// Tootsie Pop and stores it in the numberOfLicks variable.
var numberOfLicks = prompt("How many licks did it take you to reach the center of the Tootsie Pop?");
// Prompts the user for the flavor of the Tootsie Pop, and store it in the
// flavor variable.
var flavor = prompt("What flavor was the Tootsie Pop?");



// Calculations based on givens
// ============================

// Calculates the number of licks per second by dividing the number of licks by
// the time multiplied by 60.
var licksPerSecond = numberOfLicks / (time * 60);



// Prints out the number of licks, number of licks per second, and the flavor
// of the Tootsie Pop to the console.
console.log("It took you " + numberOfLicks + " licks and an average of " 
    + licksPerSecond + " licks per second to get to the center of a " + flavor 
    + " Tootsie Pop.");