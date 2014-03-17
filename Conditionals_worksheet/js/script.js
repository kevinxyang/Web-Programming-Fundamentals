// Kevin Yang
// Conditionals Worksheet
// March 17th, 2014



// Celsius to Fahrenheit Converter
// ===============================

var temp = Number(prompt("What temperature is it?"));
var unit = prompt("Is the temperature Celsius or Fahrenheit?", 
    "Enter C for Celsius or F for Fahrenheit");
var degCent;
var degFahren;

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

var gasEfficiency = Number(prompt("How efficient is the car?", 
    "Enter the efficiency in miles per gallon (MPG)."));
var percentageLeft = Number(prompt("How much of the tank is left?", 
    "Enter a percentage from 0 to 100."));
var tankCapacity = Number(prompt("How much total gas can the car hold?", 
    "Enter the car's tank capacity in gallons."));

var gasLeft = percentageLeft / 100 * tankCapacity;
var milesLeft = gasEfficiency * gasLeft;

if(milesLeft > 200){
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + gasLeft 
        + " gallons of gas in your tank, better get gas now while you can!");
}



// Grade Letter Calculator
// =======================

var grade = Number(prompt("What was your grade percentage?"));

if(grade >= 95){
    console.log("You have a " + grade 
        + "%, which means you have earned an A+ in the class");
}else if(grade >= 90){
    console.log("You have a " + grade 
        + "%, which means you have earned an A in the class");
}else if(grade >= 85){
    console.log("You have an " + grade 
        + "%, which means you have earned a B+ in the class");
}else if(grade >= 80){
    console.log("You have an " + grade 
        + "%, which means you have earned a B in the class");
}else if(grade >= 76){
    console.log("You have a " + grade 
        + "%, which means you have earned a C+ in the class");
}else if(grade >= 73){
    console.log("You have a " + grade 
        + "%, which means you have earned a C in the class");
}else if(grade >= 70){
    console.log("You have a " + grade 
        + "%, which means you have earned a D in the class");
}else{
    console.log("You have a " + grade 
        + "%, which means you have earned an F in the class");
}