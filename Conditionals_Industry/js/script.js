// Kevin Yang
// Conditionals Assignment
// March 19th, 2014
// =======================



// Industry - Mobile First or...?
// ==============================

// Givens
// ------

// Prompts the user for the month with respect to the data.
var month = prompt("Enter the month that corresponds to this data.", "January");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(month === ""){
    month = prompt("Please enter a month.");
}else{
    alert("Your entry was " + month + ".")
}

// Prompts the user for the number of users that visited their site through a mobile device during the first
// week of the month.
var mobileWeek1 = prompt("Enter the number of people that viewed your site through a mobile device in week 1.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(mobileWeek1 === ""){
    mobileWeek1 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + mobileWeek1 + ".")
}

// Prompts the user for the number of users that visited their site through a mobile device during the second
// week of the month.
var mobileWeek2 = prompt("Enter the number of people that viewed your site through a mobile device in week 2.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(mobileWeek2 === ""){
    mobileWeek2 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + mobileWeek2 + ".")
}

// Prompts the user for the number of users that visited their site through a mobile device during the third
// week of the month.
var mobileWeek3 = prompt("Enter the number of people that viewed your site through a mobile device in week 3.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(mobileWeek3 === ""){
    mobileWeek3 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + mobileWeek3 + ".")
}

// Prompts the user for the number of users that visited their site through a mobile device during the fourth
// week of the month.
var mobileWeek4 = prompt("Enter the number of people that viewed your site through a mobile device in week 4.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(mobileWeek4 === ""){
    mobileWeek4 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + mobileWeek4 + ".")
}

// Prompts the user for the number of users that visited their site through a desktop device during the first
// week of the month.
var desktopWeek1 = prompt("Enter the number of people that viewed your site through a desktop device in week 1.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(desktopWeek1 === ""){
    desktopWeek1 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + desktopWeek1 + ".")
}

// Prompts the user for the number of users that visited their site through a desktop device during the second
// week of the month.
var desktopWeek2 = prompt("Enter the number of people that viewed your site through a desktop device in week 2.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(desktopWeek2 === ""){
    desktopWeek2 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + desktopWeek2 + ".")
}

// Prompts the user for the number of users that visited their site through a desktop device during the third
// week of the month.
var desktopWeek3 = prompt("Enter the number of people that viewed your site through a desktop device in week 3.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(desktopWeek3 === ""){
    desktopWeek3 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + desktopWeek3 + ".")
}

// Prompts the user for the number of users that visited their site through a desktop device during the fourth
// week of the month.
var desktopWeek4 = prompt("Enter the number of people that viewed your site through a desktop device in week 4.");
// If the user enters an empty string, reprompt them. Else, alert them of their entry.
if(desktopWeek4 === ""){
    desktopWeek4 = prompt("Please enter a number.");
}else{
    alert("Your entry was " + desktopWeek4 + ".")
}

// Declared a variable for site traffic, and set that equal to an array.
var siteTraffic = Array();

// Created a multidimensional array, the first array holds all the mobile device data.
siteTraffic[0] = Array();
siteTraffic[0][0] = Number(mobileWeek1);
siteTraffic[0][1] = Number(mobileWeek2);
siteTraffic[0][2] = Number(mobileWeek3);
siteTraffic[0][3] = Number(mobileWeek4);

// Created a multidimensional array, the second array holds all the desktop device data.
siteTraffic[1] = Array();
siteTraffic[1][0] = Number(desktopWeek1);
siteTraffic[1][1] = Number(desktopWeek2);
siteTraffic[1][2] = Number(desktopWeek3);
siteTraffic[1][3] = Number(desktopWeek4);



// Calculations
// ------------

// Adds up all the values in the first array to calculate the total number of users that accessed the site
// through a mobile device in the specified month.
var totalMobile = siteTraffic[0][0] + siteTraffic[0][1] + siteTraffic[0][2] + siteTraffic[0][3];
// Adds up all the values in the second array to calculate the total number of users that accessed the site
// through a desktop device in the specified month.
var totalDesktop = siteTraffic[1][0] + siteTraffic[1][1] + siteTraffic[1][2] + siteTraffic[1][3];
// Adds totalMobile and totalDesktop to calculate the total number of visitors in a month.
var totalVisitors = totalMobile + totalDesktop;

// Calculates the number of days in a specific month by checking the value of month. If the value stored in
// month is September, April, June, or November, then days is set to 30. If February is stored in month, then
// days is set to 28. Else, days is set to 31.
var days;
if(month === "September" || month === "April" || month === "June" || month === "November"){
    days = 30;
}else if(month === "February"){
    days = 28;
}else{
    days = 31;
}

// Calculates the average number of mobile visitors per day.
var averageMobile = totalMobile / days;
// Calculates the average number of desktop visitors per day.
var averageDesktop = totalDesktop / days;
// Calculates the percentage of users that access the site through a mobile device.
var percentageMobile = totalMobile / totalVisitors;
// Calculates the percentage of users that access the site through a desktop device.
var percentageDesktop = totalDesktop / totalVisitors;



// Output
// ------

// Prints the total number of visitors in that specific month to the console.
console.log("You had a total of " +totalVisitors + " visitors in the month of " + month + ".");
// Prints the percentage of mobile users to the console.
console.log("An average of " + averageMobile + " people viewed your site through a mobile device per day.");
// Prints the percentage of desktop user to the console.
console.log("An average of " + averageDesktop + " people viewed your site through a desktop device per day.");
// Ternary operator that prints out how many more mobile users there are if there are more mobile users, else
// it prints out how many more desktop users there are.
(percentageMobile > percentageDesktop) ? console.log((percentageMobile - percentageDesktop) * 100 
+ "% more users viewed your site through a mobile device!") : console.log((percentageDesktop - percentageMobile) 
* 100 + "% more users viewed your site through a desktop device!");
