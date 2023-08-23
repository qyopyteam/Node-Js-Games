const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hangman() {
  const words = ["javascript", "node", "hangman", "developer", "game"];
  const wordToGuess = words[Math.floor(Math.random() * words.length)];
  let guessedLetters = [];
  let attempts = 6;

  function displayWord() {
    let display = "";
    for (const letter of wordToGuess) {
      if (guessedLetters.includes(letter)) {
        display += letter;
      } else {
        display += "_";
      }
    }
    return display;
  }

  function makeGuess() {
    console.log(displayWord());

    if (!displayWord().includes("_")) {
      console.log("Congratulations! You guessed the word.");
      rl.close();
      return;
    }

    if (attempts === 0) {
      console.log(`Sorry, you're out of attempts. The word was '${wordToGuess}'.`);
      rl.close();
      return;
    }

    rl.question("Guess a letter: ", (guess) => {
      guess = guess.toLowerCase();

      if (guess.length !== 1 || !guess.match(/[a-z]/)) {
        console.log("Please enter a valid letter.");
        makeGuess();
      } else if (guessedLetters.includes(guess)) {
        console.log("You've already guessed that letter.");
        makeGuess();
      } else {
        guessedLetters.push(guess);

        if (!wordToGuess.includes(guess)) {
          attempts--;
          console.log(`Wrong guess! You have ${attempts} attempts left.`);
        } else {
          console.log("Correct guess!");
        }

        makeGuess();
      }
    });
  }

  makeGuess();
}

hangman();
