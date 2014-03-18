// Kevin Yang
// Conditionals - Personal
// March 18th, 2014
// =======================



// Personal - Calorie Counter
// ==========================

// Givens
// ------

// Prompts the user for his or her current weight.
var currentWeight = prompt("Enter your current weight in lbs");
// If the inputted value is not a number, an empty string, or less than 0, it prompts the user to
// enter in a valid value.
if(isNaN(currentWeight) || currentWeight == "" || currentWeight < 0){
    currentWeight = prompt("Please enter a valid value");
}
// Prompts the user for his or her total daily expenditure estimate (I.E. how many calories burnt).
var dailyExpenditure = Number(prompt("Enter your total daily expenditure estimate in calories"));
// If the inputted value is not a number, an empty string, or less than 0, it prompts the user to
// enter in a valid value.
if(isNaN(dailyExpenditure) || dailyExpenditure == "" || dailyExpenditure < 0){
    dailyExpenditure = prompt("Please enter a valid value");
}
// Prompts the user for the number of calories consumed during breakfast.
var breakfastIntake = Number(prompt("Enter the number of calories you consumed for breakfast"));
// If the inputted value is not a number, an empty string, or less than 0, it prompts the user to
// enter in a valid value.
if(isNaN(breakfastIntake) || breakfastIntake == "" || breakfastIntake < 0){
    breakfastIntake = prompt("Please enter a valid value");
}
// Prompts the user for the number of calories consumed during lunch.
var lunchIntake = Number(prompt("Enter the number of calories you consumed for lunch"));
// If the inputted value is not a number, an empty string, or less than 0, it prompts the user to
// enter in a valid value.
if(isNaN(lunchIntake) || lunchIntake == "" || lunchIntake < 0){
    lunchIntake = prompt("Please enter a valid value");
}
// Prompts the user for the number of calories consumed during dinner.
var dinnerIntake = Number(prompt("Enter the number of calories you consumed for dinner"));
// If the inputted value is not a number, an empty string, or less than 0, it prompts the user to
// enter in a valid value.
if(isNaN(dinnerIntake) || dinnerIntake == "" || dinnerIntake < 0){
    dinnerIntake = prompt("Please enter a valid value");
}



// Calculations
// ------------

// Adds up the number of calories from each meal, and calculates the total number of calories
// consumed that day.
var caloriesConsumed = Number(breakfastIntake) + Number(lunchIntake) + Number(dinnerIntake);
// Calculates the total weight change by taking the difference of calories consumed and the daily
// expenditure and dividing by 3500 (3500 calories per pound).
var weightChange = (caloriesConsumed - Number(dailyExpenditure)) / 3500;
// Multiplies today's weight change by 21 and adds it to your current weight to calculate how much
// the user would weigh in 3 weeks if everyday was like today.
var weightPrediction = Number(currentWeight) + weightChange * 21;



// Output
// ------

// If the user ate under his or her daily expenditure, then print out good job!
if(weightChange < 0){
    console.log("You have lost " + weightChange + "lbs today. Good job!");
    console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");
// Else if the user ate exactly his or her daily expenditure, then print out try a little harder!
}else if(weightChange === 0){
    console.log("You have lost " + weightChange + "lbs today. Try a little harder tomorrow.");
    console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");;
// Else, print out that the user needs to work a little harder.
}else{
    console.log("You have gained " + weightChange + "lbs today. Better get on it!");
    console.log("If everyday was like today, you would weigh " + weightPrediction + "lbs in 3 weeks.");
}

// End