// Kevin Yang
// Conditionals Assignment
// March 19th, 2014
// =======================



// Industry - Mobile First or...?
// ==============================

// Givens
// ------

var month = prompt("Enter the month that corresponds to this data.");
var mobileWeek1 = prompt("Enter the number of people that viewed your site through a mobile device in week 1.");
var mobileWeek2 = prompt("Enter the number of people that viewed your site through a mobile device in week 2.");
var mobileWeek3 = prompt("Enter the number of people that viewed your site through a mobile device in week 3.");
var mobileWeek4 = prompt("Enter the number of people that viewed your site through a mobile device in week 4.");
var desktopWeek1 = prompt("Enter the number of people that viewed your site through a desktop device in week 1.");
var desktopWeek2 = prompt("Enter the number of people that viewed your site through a desktop device in week 2.");
var desktopWeek3 = prompt("Enter the number of people that viewed your site through a desktop device in week 3.");
var desktopWeek4 = prompt("Enter the number of people that viewed your site through a desktop device in week 4.");

var siteTraffic = Array();

siteTraffic[0] = Array();
siteTraffic[0][0] = Number(mobileWeek1);
siteTraffic[0][1] = Number(mobileWeek2);
siteTraffic[0][2] = Number(mobileWeek3);
siteTraffic[0][3] = Number(mobileWeek4);

siteTraffic[1] = Array();
siteTraffic[1][0] = Number(desktopWeek1);
siteTraffic[1][1] = Number(desktopWeek2);
siteTraffic[1][2] = Number(desktopWeek3);
siteTraffic[1][3] = Number(desktopWeek4);



// Calculations
// ------------

var totalMobile = siteTraffic[0][0] + siteTraffic[0][1] + siteTraffic[0][2] + siteTraffic[0][3];
var totalDesktop = siteTraffic[1][0] + siteTraffic[1][1] + siteTraffic[1][2] + siteTraffic[1][3];
var totalVisitors = totalMobile + totalDesktop;
// Write a conditional (30 is temp.)
var averageMobile = totalVisitors / 30;
var averageDesktop = totalVisitors / 30;
var percentageMobile = totalMobile / totalVisitors;
var percentageDesktop = totalDesktop / totalVisitors;



// Output
// ------

console.log(totalVisitors);
console.log(percentageMobile);
console.log(percentageDesktop);
// If mobile > desktop, print maybe consider a mobile first approach! Else keep doing what you're doing.
// Make this a ternary operator.
console.log("Hello World!");
