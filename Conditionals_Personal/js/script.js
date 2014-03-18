// Kevin Yang
// Conditionals - Personal
// March 18th, 2014
// =======================



// Personal - Calorie Counter
// ==========================

// Givens
// ------

var currentWeight = prompt("Enter your current weight in lbs");
if(isNaN(currentWeight) || currentWeight == "" || currentWeight < 0){
	currentWeight = prompt("Please enter a valid value");
}
var dailyExpenditure = Number(prompt("Enter your total daily expenditure estimate in calories"));
if(isNaN(dailyExpenditure) || dailyExpenditure == "" || dailyExpenditure < 0){
	dailyExpenditure = prompt("Please enter a valid value");
}
var breakfastIntake = Number(prompt("Enter the number of calories you consumed for breakfast"));
if(isNaN(breakfastIntake) || breakfastIntake == "" || breakfastIntake < 0){
	breakfastIntake = prompt("Please enter a valid value");
}
var lunchIntake = Number(prompt("Enter the number of calories you consumed for lunch"));
if(isNaN(lunchIntake) || lunchIntake == "" || lunchIntake < 0){
	lunchIntake = prompt("Please enter a valid value");
}
var dinnerIntake = Number(prompt("Enter the number of calories you consumed for dinner"));
if(isNaN(dinnerIntake) || dinnerIntake == "" || dinnerIntake < 0){
	dinnerIntake = prompt("Please enter a valid value");
}



// Calculations
// ------------

var caloriesConsumed = Number(breakfastIntake) + Number(lunchIntake) + Number(dinnerIntake);
var weightChange = (caloriesConsumed - Number(dailyExpenditure)) / 3500;
var weightPrediction = Number(currentWeight) + weightChange * 21;



// Output
// ------

if(weightChange < 0){
	console.log("You have lost " + weightChange + "lbs today. Good job!");
	console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");
}else if(weightChange === 0){
	console.log("You have lost " + weightChange + "lbs today. Try a little harder tomorrow.");
	console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");;
}else{
	console.log("You have gained " + weightChange + "lbs today. Better get on it!");
	console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");
}

// End