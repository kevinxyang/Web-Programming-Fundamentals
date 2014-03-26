// Kevin Yang
// Functions - Industry
// March 24, 2014
// ====================



// Website Activity Tracker
// ========================



// Givens
// ------

// Prompts the user for the total number of sites visited today.
var numberOfSites = Number(prompt("How many sites have you visited today?")) - 1;
// Creates an array to hold the information.
var siteList = Array();

// For each site, create an array that holds the site name and minutes spent.
for (numberOfSites; numberOfSites >= 0; numberOfSites--){
	siteList[numberOfSites] = Array();
	siteList[numberOfSites][0] = prompt("Enter the site name");
	siteList[numberOfSites][1] = Number(prompt("Enter the amount of time in minutes you spent on this site."));
}



// Functions
// ---------

// Function that tracks the total time spent.
function totalTime(){
	// Sets the default time to 0.
	var time = 0;
	// Declare a variable and set it equal to the length of the array.
	var arrayLength = siteList.length;
	// For each site, add the minutes spent to the time variable.
	for (var i = 0; i < arrayLength; i++){
		time += siteList[i][1];
	}
	// Returns the total time.
	return time;
}

// Function that tracks the longest time spent on any one site.
function longestTime(){
	// Sets the default site name to the empty string.
	var site = "";
	// Sets the default time to 0.
	var time = 0;
	// Declare a variable and set it equal to the length of the array.
	var arrayLength = siteList.length;
	// For each site, check if the time spent on that site is greater than the time.
	for (var i = 0; i < arrayLength; i++){
		// If it is greater, then update the site and time.
		if (siteList[i][1] > time){
			site = siteList[i][0];
			time = siteList[i][1];
		}
	}
	// Returns the site name and time in an array.
	return [site, time];
}



// Calculations
// ------------

// Declare a variable for total time spent and call the totalTime function.
var timeSpent = totalTime();
// Declare a variable for most time and call the longestTime function.
var mostTime = longestTime();



// Output
// ------

// If you've spent more than 640 minutes total on the web today, print I'm cutting you off.
if (timeSpent > 640){
	console.log("Wow, you've spent " + timeSpent + " minutes on the internet, I'm cutting you off.");
// Else if you've spent more than 480 minutes total on the web today, print that you need a break.
} else if (timeSpent > 480){
	console.log("You've spent " + timeSpent + " minutes on the internet, you should take a break.");
// Else, just print the total time spent.
} else {
	console.log("You've spent " + timeSpent + " minutes on the internet.");
}

// Print the longest time spent on a website as well as the site name to the console.
console.log("The site you spent the longest on was " + mostTime[0] + " for " + mostTime[1] + " minutes.");

// End