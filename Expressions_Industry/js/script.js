// Industry - Site Traffic Tracker
// ===============================

// Givens
// ======

var googleUsers = prompt("How many users were directed to your site through Google?");
var googleReUsers = prompt("How many of these users have been to your site before?");

var bingUsers = prompt("How many users were directed to your site through Bing?");
var bingReUsers = prompt("How many of these users have been to your site before?");

var yahooUsers = prompt("How many users were directed to your site through Yahoo?");
var yahooReUsers = prompt("How many of these users have been to your site before?");

var dogpileUsers = prompt("How many users were directed to your site through Dogpile?");
var dogpileReUsers = prompt("How many of these users have been to your site before?");

var otherUsers = prompt("How many users were directed to your site through some other site?");
var otherReUsers = prompt("How many of these users have been to your site before?");

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

totalFirstTimeUsers = siteTracker[0][1] - siteTracker[0][2] + siteTracker[1][1]
    - siteTracker[1][2] + siteTracker[2][1] - siteTracker[2][2] 
    + siteTracker[3][1] - siteTracker[3][2] + siteTracker[4][1] 
    - siteTracker[4][2];

percentageGoogle = (siteTracker[0][1] - siteTracker[0][2]) / totalFirstTimeUsers * 100;
percentageBing = (siteTracker[1][1] - siteTracker[1][2]) / totalFirstTimeUsers * 100;
percentageYahoo = (siteTracker[2][1] - siteTracker[2][2]) / totalFirstTimeUsers * 100;
percentageDogpile = (siteTracker[3][1] - siteTracker[3][2]) / totalFirstTimeUsers * 100;
percentageOther = (siteTracker[4][1] - siteTracker[4][2]) / totalFirstTimeUsers * 100;



// Output
console.log(totalFirstTimeUsers);
console.log(percentageGoogle);
console.log(percentageBing);
console.log(percentageYahoo);
console.log(percentageDogpile);
console.log(percentageOther);

// End