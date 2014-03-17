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

