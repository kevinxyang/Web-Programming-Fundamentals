// Kevin Yang
// Functions Worksheet
// March 24, 2014
// ===================



// Circumference of a Circle
// =========================

// Givens
// ------

// Prompts the user for the radius of the circle.
var radius = Number(prompt("What is the radius of the circle?"));



// Functions
// ------------

// Takes the radius as a parameter and multiplies it by 2 and pi in order to return the circumference.
var circumference = function(radius){
	circumference = 2 * 3.14 * radius;

	return circumference
}



// Calculations
// ------------

// Call the function so the value is stored in circumference.
circumference(radius);



// Output
// ------

// Prints the result to the console.
console.log("The circumference of the circle is " + circumference + ".");



// Stung!
// ======

// Givens
// ------

// Prompts the user for the victim's weight in pounds.
var weight = Number(prompt("What is the victim's weight in pounds?"));



// Functions
// ---------

// Takes the weight as a parameter and multiplies it by 8.666666667 in order to return the number of stings.
var numberOfStings = function(weight){
	numberOfStings = 8.666666667 * weight;

	return numberOfStings;
}



// Calculations
// ------------

// Call the function to store the value in numberOfStings.
numberOfStings(weight);



// Output
// ------

// Prints the result to the console.
console.log("It takes " + numberOfStings + " bee stings to kill this animal.");

// End