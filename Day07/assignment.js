/*
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

    DO NOT USE AI to FIND ANSWERS. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.
*/

/*
1. Change the RPS Project
Change the if-else to switch-case as asked in the video(at 15:42).
*/


/*
2. Build the Secret Number Guessing Game
Create the project as explained in the video.
Let us play a number guessing game

* You will ask user for a number between 1 to 10. Once user will enter a number, you will tell user if the entered number is lower or higher. With this information, user will change the number and finally guess the right number. You will need to show the number of attemps made by users to reach to this right guess

*/
function startSecretNumberGame () {
    console.log("Welcome to the Secret Number Game. Let's begin");

    // Select the secret number
    const secretNumber = Math.floor(Math.random() * 10 + 1);


    // Get the user's input
    console.log("try to guess a number between 1 and 10.")
    let userInput = prompt("Select a number from 1 to 10");

    // Keeps Prompting until the user enters a valid number
    while (userInput < 0 || userInput > 10 || isNaN(userInput)) {
        userInput = prompt("Invalid Number. Please enter a number from 1 to 10");
    }

    // Prints the Input & Secret Number to the Console
    console.log("User input", userInput);
    console.log("Secret Number", secretNumber);


    // Checks if the UserInput === Secret Number
    let numberOfAttempts = 0;

    if (userInput === secretNumber) {
        console.log(`Congrats! You guessed the number.`);
    } else {
        while (userInput > secretNumber || userInput < secretNumber) {
            if (userInput > secretNumber) {
                userInput = userInput - prompt("Too high. Enter number to subtract");
                console.log("User input", userInput);
            } 
            else if (userInput < secretNumber) {
                userInput = userInput + prompt("Too Low. Enter number to add");
                console.log("User input", userInput);
            }

            // Keeps track of the Number of Attempts
            numberOfAttempts++;
        }
        console.log(`Congrats! You guessed the number in ${numberOfAttempts} attempts.`);
    }


    // Play Again
    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
    
    if (playAgain === "yes") {
        startSecretNumberGame();

    } else {
        console.log("Thanks for Playing! See you next time!");
    }
 
}

// Start Playing
startSecretNumberGame();