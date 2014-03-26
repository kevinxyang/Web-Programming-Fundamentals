// Kevin Yang
// Functions - Wacky
// March 24, 2014
// ====================



// Rock, Paper, Scissors...!
// =========================



// Givens
// ------

// Prompts the user for the number of games he or she would like to play.
var games = Number(prompt("How many games would you like to play?", "Please enter an odd number."));

// Checks to see that it is an odd number of games.
if (games % 2 == 0){
	games = Number(prompt("Please enter an ODD number."));
}

// Creates an array that will hold all the users moves.
var gamesArray = Array();

// For each game, prompt the user for his or her "move".
for (var i = 0; i < games; i++){
	gamesArray[i] = prompt("Rock, Paper, Scissors... SHOOT!", "Rock");

	// If it's not a valid move, reprompt the user.
	if (gamesArray[i] != "Rock" && gamesArray[i] != "Paper" && gamesArray[i] != "Scissors"){
		gamesArray[i] = prompt("Please enter a VALID value.", "Rock");
	}
}



// Functions
// ---------

var computerMoves = function(){
	var moves = Array();
	moves[0] = "Rock";
	moves[1] = "Paper";
	moves[2] = "Scissors";

	var movesChosen = Array();

	for (var i = 0; i < games; i++){
		movesChosen[i] = moves[Math.floor(Math.random() * moves.length)];
	}
	
	return movesChosen;

}

var simulator = function(gamesArray, computerMoves){
	var wins = 0;
	var losses = 0;
	var ties = 0;
	var resultsArray = Array();

	for (var i = 0; i < games; i++){
		console.log("------------ " + "Game " + (i + 1) + " ------------");
		if (gamesArray[i] == movesChosen[i]){
			console.log("You both chose " + gamesArray[i] + ", it's a tie!");
			ties++;
		}
		else if (gamesArray[i] == "Rock"){
			if (movesChosen[i] == "Scissors"){
				console.log("Rock beats Scissors, you win!");
				wins++;
			} else {
				console.log("Rock loses to Paper, you lose!");
				losses++;
			}
		}
		else if (gamesArray[i] == "Paper"){
			if (movesChosen[i] == "Rock"){
				console.log("Paper beats Rock, you win!");
				wins++;
			} else {
				console.log("Paper loses to Scissors, you lose!");
				losses++;
			}
		}
		else if (gamesArray[i] == "Scissors"){
			if (movesChosen[i] == "Paper"){
				console.log("Scissors beats Paper, you win!");
				wins++;
			} else {
				console.log("Scissors loses to Rock, you lose!");
				losses++;
			}
		}
		//console.log("Player: " + gamesArray[i]);
		//console.log("Computer: " + movesChosen[i]);
	}
	console.log(" ");
	console.log("-----------------");
	console.log("Total Wins: " + wins);
	console.log("Total Losses: " + losses);
	console.log("Total Ties: " + ties);

	resultsArray[0] = wins;
	resultsArray[1] = losses;
	resultsArray[2] = ties;

	return resultsArray;

}



// Calculations
// ------------

movesChosen = computerMoves();
resultsArray = simulator(gamesArray, computerMoves);



// Output
// ------

console.log("-----------------");
console.log(" ");
(resultsArray[1] >= resultsArray[0]) ? console.log("You lose!") : console.log("You win!");

// End
