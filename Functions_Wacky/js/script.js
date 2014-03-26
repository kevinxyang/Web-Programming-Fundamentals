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

// A function that randomly generates the computers moves.
var computerMoves = function(){
    // An array of "possible" computer moves.
    var moves = Array();
    moves[0] = "Rock";
    moves[1] = "Paper";
    moves[2] = "Scissors";

    // An array that holds the computers moves.
    var movesChosen = Array();

    // For each game, randomly choose a possible move for the computer.
    for (var i = 0; i < games; i++){
        movesChosen[i] = moves[Math.floor(Math.random() * moves.length)];
    }
    
    // Returns the array of moves.
    return movesChosen;

}

// A function that "simulates" each game by comparing the player's move with the computer's move.
var simulator = function(gamesArray, computerMoves){
    // Declared variables for wins, losses, and ties. We will increment them. Default set to 0.
    var wins = 0;
    var losses = 0;
    var ties = 0;
    // An array that will eventually hold the above variables, after we've incremented them.
    var resultsArray = Array();

    // For each game, compare the moves.
    for (var i = 0; i < games; i++){
        console.log("------------ " + "Game " + (i + 1) + " ------------");
        // If the player's move and the computer's move are the same, then increment ties by 1.
        if (gamesArray[i] == movesChosen[i]){
            console.log("You both chose " + gamesArray[i] + ", it's a tie!");
            ties++;
        }
        // Else if, the player chooses Rock...
        else if (gamesArray[i] == "Rock"){
            // and the computer chooses Scissors, then increment wins by 1.
            if (movesChosen[i] == "Scissors"){
                console.log("Rock beats Scissors, you win!");
                wins++;
            // else, increment losses by 1.
            } else {
                console.log("Rock loses to Paper, you lose!");
                losses++;
            }
        }
        // Else if, the player chooses Paper...
        else if (gamesArray[i] == "Paper"){
            // and the computer chooses Rock, increment wins by 1.
            if (movesChosen[i] == "Rock"){
                console.log("Paper beats Rock, you win!");
                wins++;
            // else, increment losses by 1.
            } else {
                console.log("Paper loses to Scissors, you lose!");
                losses++;
            }
        }
        // Else if, the player choose Scissors...
        else if (gamesArray[i] == "Scissors"){
            // and the computer chooses Paper, increment wins by 1.
            if (movesChosen[i] == "Paper"){
                console.log("Scissors beats Paper, you win!");
                wins++;
            // else, increment losses by 1.
            } else {
                console.log("Scissors loses to Rock, you lose!");
                losses++;
            }
        }
    }
    // Print the totals to console.
    console.log(" ");
    console.log("-----------------");
    console.log("Total Wins: " + wins);
    console.log("Total Losses: " + losses);
    console.log("Total Ties: " + ties);

    // Add results to the results array.
    resultsArray[0] = wins;
    resultsArray[1] = losses;
    resultsArray[2] = ties;

    // Return the results array.
    return resultsArray;

}



// Calculations
// ------------

// Call the function computerMoves.
movesChosen = computerMoves();
// Call the function simulator.
resultsArray = simulator(gamesArray, computerMoves);



// Output
// ------

console.log("-----------------");
console.log(" ");
// A ternary that prints you lose if total losses are greater than or equal to wins, otherwise
// it prints you win! Remember ties go to the computer :D.
(resultsArray[1] >= resultsArray[0]) ? console.log("You lose!") : console.log("You win!");

// End

// End
