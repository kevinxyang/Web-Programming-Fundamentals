// Kevin Yang
// Conditionals - Personal
// March 18th, 2014
// =======================



// Personal - Calorie Counter
// ==========================

// Givens
// ------

var currentWeight = Number(prompt("Enter your current weight"));
var dailyExpenditure = Number(prompt("Enter your total daily expenditure estimate"));
var breakfastIntake = Number(prompt("Enter the number of calories you consumed for breakfast"));
var lunchIntake = Number(prompt("Enter the number of calories you consumed for lunch"));
var dinnerIntake = Number(prompt("Enter the number of calories you consumed for dinner"));



// Calculations
// ------------

var caloriesConsumed = breakfastIntake + lunchIntake + dinnerIntake;
var weightChange = (caloriesConsumed - dailyExpenditure) / 3500;
var weightPrediction = currentWeight + weightChange * 21;



// Output
// ------

if(weightChange < 0){
	console.log("You have lost " + weightChange + "lbs. Good job!");
	console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");
}else if(weightChange == 0){
	console.log("You have lost " + weightChange + "lbs. Try a little harder tomorrow.");
	console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");;
}else{
	console.log("You have gained " + weightChange + "lbs. Better get on it!");
	console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");
}

// End