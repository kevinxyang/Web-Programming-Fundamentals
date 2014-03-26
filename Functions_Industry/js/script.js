// Kevin Yang
// Functions - Industry
// March 24, 2014
// ====================



// Website Activity Tracker
// ========================



// Givens
// ------

var numberOfSites = Number(prompt("How many sites have you visited today?")) - 1;
var siteList = Array();

for (numberOfSites; numberOfSites >= 0; numberOfSites--){
	siteList[numberOfSites] = Array();
	siteList[numberOfSites][0] = prompt("Enter the site name");
	siteList[numberOfSites][1] = Number(prompt("Enter the amount of time in minutes you spent on this site."));
}



// Functions
// ---------

function totalTime(){
	var time = 0;
	var arrayLength = siteList.length;
	for (var i = 0; i < arrayLength; i++){
		time += siteList[i][1];
	}
	return time;
}

function longestTime(){
	var site = "";
	var time = 0;
	var arrayLength = siteList.length;
	for (var i = 0; i < arrayLength; i++){
		if (siteList[i][1] > time){
			site = siteList[i][0];
			time = siteList[i][1];
		}
	}
	return [site, time];
}



// Calculations
// ------------

var timeSpent = totalTime();
var mostTime = longestTime();



// Output
// ------

if (timeSpent > 640){
	console.log("Wow, you've spent " + timeSpent + " minutes on the internet, I'm cutting you off.");
} else if (timeSpent > 480){
	console.log("You've spent " + timeSpent + " minutes on the internet, you should take a break.");
} else {
	console.log("You've spent " + timeSpent + " minutes on the internet.");
}

console.log("The site you spent the longest on was " + mostTime[0] + " for " + mostTime[1] + " minutes.");

// End
