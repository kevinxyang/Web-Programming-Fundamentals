// Kevin Yang
// Conditionals Assignment
// March 18th, 2014
// =======================



// Givens
// ------

// Prompts the user for the number of sneezes he or she heard today.
var sneezes = prompt("Enter the number of times you've heard someone sneeze today.");
// If the user enters an empty string, then reprompt them. Else, return what their value is.
if(sneezes === ""){
	sneezes = prompt("Please enter a value.");
}else{
	alert("The value you entered was " + sneezes + ".")
}

// Prompts the user for the number of bless yous he or she heard that followed sneezes today. 
var blessYous = prompt("Enter the number of times you've heard someone say bless you after a sneeze today.");
// If the user enters an empty string, then reprompt them. Else, return what their value is.
if(blessYous === ""){
	blessYous = prompt("Please enter a value.");
}else{
	alert("The value you entered was " + blessYous + ".")
}


// Calculations
// ------------

// Divides the number of bless yous by the number of sneezes and then multiplied by 100 to get the ratio of
// bless yous to sneezes.
var ratio = Number(blessYous) / Number(sneezes) * 100;



// Output
// ------

// If the ratio is greater than 80% then print that your friends are courteous.
if(ratio > 80){
	console.log("Today " + ratio + "% of sneezes were followed by bless yous, you have some courteous friends!");
// Else if, the ratio is greater than 50% print out that some sneezes went unnoticed.
}else if(ratio > 50){
	console.log("Today " + ratio + "% of sneezes were followed by bless yous, some went unnoticed.");
// Else, print out that your friends need some manners!
}else{
	console.log("Today " + ratio + "% of sneezes were followed by bless yous, teach your friends some manners!");
}