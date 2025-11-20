/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
*/

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rockPaperScissorsGame() {
    console.log("Welcome to the Rock 🪨, Paper 🧻, or Scissors ✂️ Game! Let's Get Started ");

    // Prompt the User To Choose Their Input
    const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️:");
    let userChoice = userChoicePrompt.toLowerCase();


    // Computer's Input is Chosen
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) 
        computerChoice = "rock";
    else if (randomNumber === 2)
        computerChoice = "paper";
    else if (randomNumber === 3)
        computerChoice = "scissors";

    // Show User & Computer Choice
    console.log("User selected", userChoice);
    console.log("Computer selected", computerChoice);

    // Compare Inputs Between User & Computer
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You the User Win, yay");
    } else if (userChoice === computerChoice) {
        console.log("No one wins");
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors"&& userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock")
    ) {
        console.log("Oh No......The Computer Wins!!");
    } else {
        console.log("Please check the input. Not correct")
    }

    // Play Again Instead of Represhing 
    const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if (playAgain === "yes") {
        rockPaperScissorsGame();
    } else {
        console.log("Thanks for Playing! See you next time!");
    }
    
}

// Start This Game 
rockPaperScissorsGame();