// Personal - Food Tracker
// =======================

// Givens

var benchpressSets = prompt("# of sets of Bench Presses", "Enter the total number of sets here.");
var squatSets = prompt("# of sets of Squats", "Enter the total number of sets here.");
var deadliftSets = prompt("# of sets of Deadlifts", "Enter the total number of sets here.");
var overheadpressSets = prompt("# of sets of Overhead Presses", "Enter the total number of sets here.");

var benchpressReps = prompt("# of Bench Presses per set", "Enter the total number of reps in each set here.");
var squatReps = prompt("# of Squats per set", "Enter the total number of reps in each set here.");
var deadliftReps = prompt("# of Deadlifts per set", "Enter the total number of reps in each set here.");
var overheadpressReps = prompt("# of Overhead Presses per set", "Enter the total number of reps in each set here.");

var liftRoutine = Array();

liftRoutine[0] = "115";
liftRoutine[1] = "225";
liftRoutine[2] = "255";
liftRoutine[3] = "95";

// Calculations based on givens

var totalBench = liftRoutine[0] * benchpressSets * benchpressReps;
var totalSquat = liftRoutine[1] * squatSets * squatReps;
var totalDeadlift = liftRoutine[2] * deadliftSets * deadliftReps;
var totalOverheadpress = liftRoutine[3] * overheadpressSets * overheadpressReps;

var totalWeight = totalBench + totalSquat + totalDeadlift + totalOverheadpress;
var totalSets = benchpressSets + squatSets + deadliftSets + overheadpressSets;
var totalReps = benchpressReps + squatReps + deadliftReps + overheadpressReps;

var averageWeightPerSet = totalWeight / totalSets;
var averageWeightPerRep = totalWeight / totalReps;

console.log(totalBench);
console.log(totalWeight);
console.log(totalSets);
console.log(totalReps);
console.log(averageWeightPerSet);
console.log(averageWeightPerRep);

