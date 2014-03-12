// Personal - Weight Lifting Tracker
// =======================

// Givens
// ======

// Bench Press
// Declared variables for the amount bench pressed, number of sets of bench
// presses, and the total number of reps in each set.
var benchpressWeight = prompt("How much weight did you bench press today?", 
    "Enter the weight in lbs.");
var benchpressSets = prompt("# of sets of Bench Presses",
    "Enter the total number of sets here.");
var benchpressReps = prompt("# of Bench Presses per set",
    "Enter the total number of reps in each set here.");

// Squat
// Declared variables for the amount squatted, number of sets of squats, and the
// total number of reps in each set.
var squatWeight = prompt("How much weight did you squat today?", 
    "Enter the weight in lbs.");
var squatSets = prompt("# of sets of Squats",
    "Enter the total number of sets here.");
var squatReps = prompt("# of Squats per set",
    "Enter the total number of reps in each set here.");

// Deadlift
// Declared variables for the amount deadlifted, number of sets of deadlifts, 
// and the total number of reps in each set.
var deadliftWeight = prompt("How much weight did you deadlift today?", 
    "Enter the weight in lbs.");
var deadliftSets = prompt("# of sets of Deadlifts",
    "Enter the total number of sets here.");
var deadliftReps = prompt("# of Deadlifts per set",
    "Enter the total number of reps in each set here.");

// Overhead Press
// Declared variables for the amount overhead pressed, number of sets of
// overhead presses, and the total number of reps in each set.
var overheadpressWeight = prompt("How much weight did you overhead press today?"
    , "Enter the weight in lbs.");
var overheadpressSets = prompt("# of sets of Overhead Presses",
    "Enter the total number of sets here.");
var overheadpressReps = prompt("# of Overhead Presses per set",
    "Enter the total number of reps in each set here.");



// Calculations based on givens
// ============================

// Takes the user's input for the bench press, and calculates the total amount
// of weight bench pressed.
var totalBench = benchpressWeight * benchpressSets * benchpressReps;
// Takes the user's input for the bench press, and calculates the total amount
// of weight squatted.
var totalSquat = squatWeight * squatSets * squatReps;
// Takes the user's input for the bench press, and calculates the total amount
// of weight deadlifted.
var totalDeadlift = deadliftWeight * deadliftSets * deadliftReps;
// Takes the user's input for the bench press, and calculates the total amount
// of weight overhead pressed.
var totalOverheadpress = overheadpressWeight * overheadpressSets
    * overheadpressReps;

// Calculates the total amount lifted today.
var totalWeight = totalBench + totalSquat + totalDeadlift + totalOverheadpress;
// Calculates the total number of sets performed today.
var totalSets = Number(benchpressSets) + Number(squatSets)
    + Number(deadliftSets) + Number(overheadpressSets);
// Calculates the total number of reps performed today.
var totalReps = Number(benchpressReps) * Number(benchpressSets)
    + Number(squatReps) * Number(squatSets) + Number(deadliftReps)
    * Number(deadliftSets) + Number(overheadpressReps)
    * Number(overheadpressSets);

// Calculates the average weight lifted per set.
var averageWeightPerSet = totalWeight / totalSets;
// Calculates the average weight lifted per rep.
var averageWeightPerRep = totalWeight / totalReps;

// Prints out today's lifting total as well as the average weight per set and 
// average weight per rep.
console.log("You benched a total of " + totalBench + " lbs today.");
console.log("You squatted a total of " + totalSquat + " lbs today.");
console.log("You deadlifted a total of " + totalDeadlift + " lbs today.");
console.log("You overhead pressed a total of " + totalOverheadpress 
    + " lbs today.");
console.log("On average you lifted about " + averageWeightPerSet 
    + " lbs per set and about " + averageWeightPerRep + " lbs per rep today.");

// End