// Kevin Yang
// Functions Worksheet
// March 24, 2014
// ===================



// Circumference of a Circle
// =========================

// Givens
// ------

var radius = Number(prompt("What is the radius of the circle?"));



// Functions
// ------------

var circumference = function(radius){
	circumference = 2 * 3.14 * radius;

	return circumference
}



// Calculations
// ------------

circumference(radius);



// Output
// ------

console.log("The circumference of the circle is " + circumference + ".");



// Stung!
// ======

// Givens
// ------

var weight = Number(prompt("What is the victim's weight in pounds?"));



// Functions
// ---------

var numberOfStings = function(weight){
	numberOfStings = 8.666666667 * weight;

	return numberOfStings;
}



// Calculations
// ------------

numberOfStings(weight);



// Output
// ------

console.log("It takes " + numberOfStings + " bee stings to kill this animal.");

// End