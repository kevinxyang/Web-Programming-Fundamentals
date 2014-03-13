// Industry - Site Traffic Tracker
// ===============================

// Givens
// ======

// Prompts the user for the total number of users both first time and returning
// that used Google and stores them inside two variables.
var googleUsers = prompt("How many users were directed to your site via Google?");
var googleReUsers = prompt("How many of these users have been to your site before?");

// Prompts the user for the total number of users both first time and returning
// that used Bing and stores them inside two variables.
var bingUsers = prompt("How many users were directed to your site via Bing?");
var bingReUsers = prompt("How many of these users have been to your site before?");

// Prompts the user for the total number of users both first time and returning
// that used Yahoo! and stores them inside two variables.
var yahooUsers = prompt("How many users were directed to your site via Yahoo?");
var yahooReUsers = prompt("How many of these users have been to your site before?");

// Prompts the user for the total number of users both first time and returning
// that used Dogpile and stores them inside two variables.
var dogpileUsers = prompt("How many users were directed to your site via Dogpile?");
var dogpileReUsers = prompt("How many of these users have been to your site before?");

// Prompts the user for the total number of users both first time and returning
// that used some other search engine and stores them inside two variables.
var otherUsers = prompt("How many users were directed to your site via some other search engine?");
var otherReUsers = prompt("How many of these users have been to your site before?");

// Take the variables above, and stores them inside a multidimensional array to
// keep them organized and easy to access. The outermost array holds the type
// of search engine, while the innermost array holds the user data of each
// individual search engine.
var siteTracker = Array();

siteTracker[0] = Array();
siteTracker[0][0] = "Google";
siteTracker[0][1] = Number(googleUsers);
siteTracker[0][2] = Number(googleReUsers);

siteTracker[1] = Array();
siteTracker[1][0] = "Bing";
siteTracker[1][1] = Number(bingUsers);
siteTracker[1][2] = Number(bingReUsers);

siteTracker[2] = Array();
siteTracker[2][0] = "Yahoo!";
siteTracker[2][1] = Number(yahooUsers);
siteTracker[2][2] = Number(yahooReUsers);

siteTracker[3] = Array();
siteTracker[3][0] = "Dogpile";
siteTracker[3][1] = Number(dogpileUsers);
siteTracker[3][2] = Number(dogpileReUsers);

siteTracker[4] = Array();
siteTracker[4][0] = "Other";
siteTracker[4][1] = Number(otherUsers);
siteTracker[4][2] = Number(otherReUsers);



// Calculations based on givens
// ============================

// Using the user data from each search engine, we can calculate the total
// number of first time users.
totalFirstTimeUsers = siteTracker[0][1] - siteTracker[0][2] + siteTracker[1][1]
    - siteTracker[1][2] + siteTracker[2][1] - siteTracker[2][2] 
    + siteTracker[3][1] - siteTracker[3][2] + siteTracker[4][1] 
    - siteTracker[4][2];

// By taking the user data from each search engine and dividing it by the total
// number of first time users, we can calculate what percent of first time users
// used which search engine.
percentageGoogle = (siteTracker[0][1] - siteTracker[0][2]) / totalFirstTimeUsers * 100;
percentageBing = (siteTracker[1][1] - siteTracker[1][2]) / totalFirstTimeUsers * 100;
percentageYahoo = (siteTracker[2][1] - siteTracker[2][2]) / totalFirstTimeUsers * 100;
percentageDogpile = (siteTracker[3][1] - siteTracker[3][2]) / totalFirstTimeUsers * 100;
percentageOther = (siteTracker[4][1] - siteTracker[4][2]) / totalFirstTimeUsers * 100;



// Prints the total number of first time users, along with what percentage of
//first time users used Google, Bing, Yahoo!, Dogpile, or another search engine.
console.log(totalFirstTimeUsers + " users visited your site for the first time.");
console.log(Math.floor(percentageGoogle) + "% of them used Google.");
console.log(Math.floor(percentageBing) + "% of them used Bing.");
console.log(Math.floor(percentageYahoo) + "% of them used Yahoo!.");
console.log(Math.floor(percentageDogpile) + "% of them used Dogpile.");
console.log(Math.floor(percentageOther) + "% of them used some other search engine.");

// End