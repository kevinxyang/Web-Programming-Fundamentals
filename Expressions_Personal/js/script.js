// Personal - Weight Lifting Tracker
// =======================

// Givens

// Bench Press
var benchpressWeight = prompt("How much weight did you bench press today?", 
    "Enter the weight in lbs.");
var benchpressSets = prompt("# of sets of Bench Presses",
    "Enter the total number of sets here.");
var benchpressReps = prompt("# of Bench Presses per set",
	"Enter the total number of reps in each set here.");

// Squat
var squatWeight = prompt("How much weight did you squat today?", 
    "Enter the weight in lbs.");
var squatSets = prompt("# of sets of Squats",
    "Enter the total number of sets here.");
var squatReps = prompt("# of Squats per set",
	"Enter the total number of reps in each set here.");

// Deadlift
var deadliftWeight = prompt("How much weight did you deadlift today?", 
    "Enter the weight in lbs.");
var deadliftSets = prompt("# of sets of Deadlifts",
    "Enter the total number of sets here.");
var deadliftReps = prompt("# of Deadlifts per set",
	"Enter the total number of reps in each set here.");

// Overhead Press
var overheadpressWeight = prompt("How much weight did you overhead press today?"
    , "Enter the weight in lbs.");
var overheadpressSets = prompt("# of sets of Overhead Presses",
    "Enter the total number of sets here.");
var overheadpressReps = prompt("# of Overhead Presses per set",
	"Enter the total number of reps in each set here.");

// Calculations based on givens

var totalBench = benchpressWeight * benchpressSets * benchpressReps;
var totalSquat = squatWeight * squatSets * squatReps;
var totalDeadlift = deadliftWeight * deadliftSets * deadliftReps;
var totalOverheadpress = overheadpressWeight * overheadpressSets
    * overheadpressReps;

var totalWeight = totalBench + totalSquat + totalDeadlift + totalOverheadpress;
var totalSets = Number(benchpressSets) + Number(squatSets)
    + Number(deadliftSets) + Number(overheadpressSets);
var totalReps = Number(benchpressReps) * Number(benchpressSets)
    + Number(squatReps) * Number(squatSets) + Number(deadliftReps)
    * Number(deadliftSets) + Number(overheadpressReps)
    * Number(overheadpressSets);

var averageWeightPerSet = totalWeight / totalSets;
var averageWeightPerRep = totalWeight / totalReps;

console.log(totalBench);
console.log(totalSquat);
console.log(totalDeadlift);
console.log(totalOverheadpress);
console.log(totalWeight);
console.log(averageWeightPerSet);
console.log(averageWeightPerRep);

