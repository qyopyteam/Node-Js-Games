const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function guessTheNumber() {
  const numberToGuess = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  function makeGuess() {
    rl.question("Guess a number between 1 and 100: ", (guess) => {
      attempts++;

      if (isNaN(guess)) {
        console.log("Please enter a valid number.");
        makeGuess();
      } else {
        guess = parseInt(guess);

        if (guess < numberToGuess) {
          console.log("Higher!");
          makeGuess();
        } else if (guess > numberToGuess) {
          console.log("Lower!");
          makeGuess();
        } else {
          console.log(`Congratulations You guessed the number in ${attempts} attempts. :)`);
          rl.close();
        }
      }
    });
  }

  makeGuess();
}

guessTheNumber();
