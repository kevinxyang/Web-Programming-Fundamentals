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
console.log("Sparky is " + humanAge + " which is " + dogAge + " in dog years.");



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
console.log("Each person ate " + slicesPerPerson + 
" slices of pizza at the party.");



// Slice of Pie (part 2)
// =====================

// Declared the number of slices Sparky gets and set it equal to the total
// number of slices (slices per pizza * total number of pizzas) modulo the total
// number of people at the party.
var sparkysSlices = numberOfPizzas * slicesPerPizza % numberOfPeople;

// Printed sparkysSlices to the console.
console.log("Sparky got " + sparkysSlices + " slices of pizza.");



// Average Shopping Bill
// =====================

// Declared and defined the weekly grocery totals in an array.
var groceryTotals = Array(89, 58, 40, 110, 76);
// Declared the total amount spent on groceries over 5 weeks and set it equal to
// the sum of all the entries in the array.
var totalAmount = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + 
groceryTotals[3] + groceryTotals[4];
// Declared the average amount spent on groceries per week and set it equal to
// the sum (totalAmount) and divided it by the number of weeks (5)
var averageSpending = totalAmount / 5;

// Printed totalAmount and averageSpending to the console.
console.log("You have spent a total of $" + totalAmount + 
" on groceries over 5 weeks. That's an average of $" + averageSpending + 
" per week.");



// Discounts
// =========

// Declared and defined the item.
var itemDescription = "Xbox";
// Declared and defined the original price of the item.
var originalPrice = 250;
// Declared and defined the discount percentage of the item.
var discountPercentage = 25;
// Declared and defined the sale tax percentage of the state.
var salesTaxPercentage = 7;
// Declared the costWithoutTax variable and set it equal to the original price
// of the item * the percentage remaining after the discount 
// (1 - discountPercentage).
var costWithoutTax = originalPrice * (1 - discountPercentage / 100);
// Declared the costWithTax variable and set it equal to the cost of the item
// without tax + the amount that taxes add to the price of the item.
var costWithTax = costWithoutTax * (1 + salesTaxPercentage / 100);

// Printed the variables itemDescription, originalPrice, discountPercentage,
// costWithoutTax, and costWithTax to the console.
console.log("Your " + itemDescription + " was originally $" + originalPrice + 
", but after a " + discountPercentage + "% discount, it is now $" + 
costWithoutTax + " without tax, and $" + costWithTax + " with tax.");


//End
