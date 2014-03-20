// Kevin Yang
// Conditionals Assignment
// March 18th, 2014
// =======================



// Givens
// ------

var sneezes = prompt("Enter the number of times you've heard someone sneeze today.");
if(sneezes === ""){
	sneezes = prompt("Please enter a value.");
}else{
	alert("The value you entered was " + sneezes + ".")
}

var blessYous = prompt("Enter the number of times you've heard someone say bless you after a sneeze today.");
if(blessYous === ""){
	blessYous = prompt("Please enter a value.");
}else{
	alert("The value you entered was " + blessYous + ".")
}


// Calculations
// ------------

var ratio = Number(blessYous) / Number(sneezes) * 100;



// Output
// ------

if(ratio > 80){
	console.log("Today " + ratio + "% of sneezes were followed by bless yous, you have some courteous friends!");
}else if(ratio > 50){
	console.log("Today " + ratio + "% of sneezes were followed by bless yous, some went unnoticed.");
}else{
	console.log("Today " + ratio + "% of sneezes were followed by bless yous, teach your friends some manners!");
}