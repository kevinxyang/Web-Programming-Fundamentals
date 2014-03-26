// Kevin Yang
// Functions - Personal
// March 24, 2014
// ====================



// Omelette Maker
// ==============



// Givens
// ------

var eggs = Number(prompt("How many eggs do you have?"));
var cheese = Number(prompt("How many slices of cheese do you have?"));
var tomatoes = Number(prompt("How many whole tomatoes do you have?"));



// Functions
// ---------

var omelettesMade = function(eggs, cheese, tomatoes){
	omelettesMade = Math.floor(eggs / 3);
	var omelettesWithEverything = 0;
	var omelettesWithTomatoes = 0;
	var omelettesWithCheese = 0;
	if (tomatoes > cheese){
		for (cheese; cheese > 0; cheese--){
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				tomatoes--;
				omelettesWithEverything++;
			};
		};
		for (tomatoes; tomatoes > 0; tomatoes--){
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				omelettesWithTomatoes++;
			};
		};
	} else {
		for (tomatoes; tomatoes > 0; tomatoes--){
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				cheese--;
				omelettesWithEverything++;
			};
		};
		for (cheese; cheese > 0; cheese--){
			if (omelettesMade == 0){
				break;
			} else {
				omelettesMade--;
				omelettesWithCheese++;
			};
		};
	};
	console.log("You made " + omelettesMade + " plain omelettes.");
	console.log("You made " + omelettesWithEverything + " omelettes with everything.");
	console.log("You made " + omelettesWithCheese + " omelettes with just cheese.");
	console.log("You made " + omelettesWithTomatoes + " omelettes with just tomatoes.");
}



// Output
// ------

if (eggs < 3){
	console.log("You don't have enough eggs, go to the grocery store!");
} else {
	omelettesMade(eggs, cheese, tomatoes);
}

// End

