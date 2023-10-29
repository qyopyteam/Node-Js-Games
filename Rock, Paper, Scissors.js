const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors() {
  const choices = ["rock", "paper", "scissors"];

  rl.question("Choose rock, paper, or scissors: ", (userChoice) => {
    userChoice = userChoice.toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(`Computer chose: ${computerChoice}`);

    if (!choices.includes(userChoice)) {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
    } else if (userChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("Computer wins! :)");
    }

    rl.close();
  });
}

rockPaperScissors();
