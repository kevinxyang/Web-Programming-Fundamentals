// Kevin Yang
// Conditionals Worksheet
// March 17th, 2014



// Celsius to Fahrenheit Converter
// ===============================

// Declared the variables for each of the givens.
var temp = Number(prompt("What temperature is it?"));
var unit = prompt("Is the temperature Celsius or Fahrenheit?", 
    "Enter C for Celsius or F for Fahrenheit");
var degCent;
var degFahren;

// If the temp given was in Celsius, convert it to Fahrenheit and print the
// result out to the console. Else, convert the temp given to Celsius and print
// the result out to the console.
if(unit === "C"){
    degCent = temp;
    degFahren = 9/5 * degCent + 32;
    console.log("The temperature is " + degFahren + " degrees Fahrenheit.");
}else{
    degFahren = temp;
    degCent = 5/9 * (degFahren - 32);
    console.log("The temperature is " + degCent + " degrees Celsius.");
}



// Last Chance for Gas!
// ====================

// Declared variables for each of the givens.
var gasEfficiency = Number(prompt("How efficient is the car?", 
    "Enter the efficiency in miles per gallon (MPG)."));
var percentageLeft = Number(prompt("How much of the tank is left?", 
    "Enter a percentage from 0 to 100."));
var tankCapacity = Number(prompt("How much total gas can the car hold?", 
    "Enter the car's tank capacity in gallons."));

// Calculated the total gas remaining and the distance that you can drive off of
// that gas.
var gasLeft = percentageLeft / 100 * tankCapacity;
var milesLeft = gasEfficiency * gasLeft;

// If you can drive more than 200 miles go for it. Else, stop for gas.
if(milesLeft > 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + gasLeft 
        + " gallons of gas in your tank, better get gas now while you can!");
}



// Grade Letter Calculator
// =======================

// Declared a variable for the given.
var grade = Number(prompt("What was your grade percentage?"));

// Checks to see if your grade falls in each consecutive breakpoint, until it 
// satisfies the conditional and then prints the result out to the console.
if(grade >= 95){
    console.log("You have a " + grade 
        + "%, which means you have earned an A+ in the class.");
}else if(grade >= 90){
    console.log("You have a " + grade 
        + "%, which means you have earned an A in the class.");
}else if(grade >= 85){
    console.log("You have an " + grade 
        + "%, which means you have earned a B+ in the class.");
}else if(grade >= 80){
    console.log("You have an " + grade 
        + "%, which means you have earned a B in the class.");
}else if(grade >= 76){
    console.log("You have a " + grade 
        + "%, which means you have earned a C+ in the class.");
}else if(grade >= 73){
    console.log("You have a " + grade 
        + "%, which means you have earned a C in the class.");
}else if(grade >= 70){
    console.log("You have a " + grade 
        + "%, which means you have earned a D in the class.");
}else{
    console.log("You have a " + grade 
        + "%, which means you have earned an F in the class.");
}



// Tire Pressure I
// ===============

// Declared a variable for the given, and has the user prompted values stored in
// an array.
var tirePressure = Array();

tirePressure[0] = Number(prompt("What is the pressure of the front-left tire?", 
    "Enter the pressure in PSI."));
tirePressure[1] = Number(prompt("What is the pressure of the front-right tire?", 
    "Enter the pressure in PSI."));
tirePressure[2] = Number(prompt("What is the pressure of the back-left tire?", 
    "Enter the pressure in PSI."));
tirePressure[3] = Number(prompt("What is the pressure of the back-right tire?", 
    "Enter the pressure in PSI."));

// If the front 2 tires have the same pressure AND the back 2 tires have the
// same pressure then its ok. Else, get the tires checked out.
if(tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3]){
    console.log("The tires pass spec!");
}else{
    console.log("Get your tires checked out!");
}

