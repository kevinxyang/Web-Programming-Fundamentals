// Kevin Yang
// Functions - Personal
// March 24, 2014
// ====================



// Omelette Maker
// ==============



// Givens
// ------

// Prompts the user for the number of eggs.
var eggs = Number(prompt("How many eggs do you have?"));
// Prompts the user for the slices of cheese.
var cheese = Number(prompt("How many slices of cheese do you have?"));
// Prompts the user for the number of tomatoes.
var tomatoes = Number(prompt("How many whole tomatoes do you have?"));



// Functions
// ---------

// Function that takes the ingredients as parameters, and calculates the number of omelettes the user
// can make, if he or she maximizes the ingredients. That is to say, he or she will make the maximum
// number of omelettes that have both cheese and tomatoes, followed by the maximum amount of omelettes
// with just tomatoes or cheese (depending on which is greater).
var omelettesMade = function(eggs, cheese, tomatoes){
	// Takes 3 eggs per omelettes, so we just divide the total eggs by 3 and round down.
	omelettesMade = Math.floor(eggs / 3);
	// Declare the omelette variables, we haven't made any yet so they are set to 0.
	var omelettesWithEverything = 0;
	var omelettesWithTomatoes = 0;
	var omelettesWithCheese = 0;
	// If there are more tomatoes than cheese, we will decrement the cheese, since that will run out
	// first.
	if (tomatoes > cheese){
		for (cheese; cheese > 0; cheese--){
			// If there are no omelettes left, leave the loop. Else keep making omelettes.
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				tomatoes--;
				omelettesWithEverything++;
			};
		};
		// Since, the cheese is gone, we will use the rest of the tomatoes.
		for (tomatoes; tomatoes > 0; tomatoes--){
			// If there are no omelettes left, leave the loop. Else keep making omelettes.
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				omelettesWithTomatoes++;
			};
		};
	// If there are more slices of cheese than tomatoes, decrement the tomatoes first.
	} else {
		for (tomatoes; tomatoes > 0; tomatoes--){
			// If there are no more omelettes, leave the loop. Else keep making omelettes.
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				cheese--;
				omelettesWithEverything++;
			};
		};
		// Use the rest of the cheese.
		for (cheese; cheese > 0; cheese--){
			// If there are no more omelettes, leave the loop. Else keep making omelettes.
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				omelettesWithCheese++;
			};
		};
	};
	// Outputs the results to the console.
	console.log("You made " + omelettesMade + " plain omelettes.");
	console.log("You made " + omelettesWithEverything + " omelettes with everything.");
	console.log("You made " + omelettesWithCheese + " omelettes with just cheese.");
	console.log("You made " + omelettesWithTomatoes + " omelettes with just tomatoes.");
}



// Output
// ------

// If you have less than 3 eggs, go to the grocery store, else run omelettesMade.
if (eggs < 3){
	console.log("You don't have enough eggs, go to the grocery store!");
} else {
	omelettesMade(eggs, cheese, tomatoes);
}

// End

