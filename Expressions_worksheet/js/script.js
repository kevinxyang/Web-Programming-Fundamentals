// Kevin Yang
// Expressions Worksheet
// March 9th, 2014



// Dog Years
// =========

// Declared and defined Sparky's real age.
var humanAge = 3;
// Declared Sparky's dog age and defined it to be 7 times his real age.
var dogAge = humanAge * 7;

// Printed Sparky's real and dog age to the console.
console.log("Sparky is" + " " + humanAge + " " + "which is" + " " + dogAge + " "
+ "in dog years.");



// Slice of Pie (part 1)
// =====================

// Declared and defined the number of slices per pizza.
var slicesPerPizza = 8;
// Declared and defined the number of people at the party.
var numberOfPeople = 20;
// Declared and defined the number of pizzas ordered.
var numberOfPizzas = 12;

// Declared the slicesPerPerson variable and set it equal to the total number of 
// slices (slices per pizza * total number of pizzas) and divided it by the 
// total number of people at the party.
var slicesPerPerson = numberOfPizzas * slicesPerPizza / numberOfPeople;

// Printed slicesPerPerson to the console.
console.log("Each person ate" + " " + slicesPerPerson + " " +
"slices of pizza at the party.");



// Slice of Pie (part 2)
// =====================

// Declared the number of slices Sparky gets and set it equal to the total
// number of slices (slices per pizza * total number of pizzas) modulo the total
// number of people at the party.
var sparkysSlices = numberOfPizzas * slicesPerPizza % numberOfPeople;

// Printed sparkysSlices to the console.
console.log("Sparky got" + " " + sparkysSlices + " " + "slices of pizza.");



// Average Shopping Bill
// =====================

var groceryTotals = Array(89, 58, 40, 110, 76);
var totalAmount = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + 
groceryTotals[3] + groceryTotals[4];
var averageSpending = totalAmount / 5;

console.log(totalAmount);
console.log(averageSpending);