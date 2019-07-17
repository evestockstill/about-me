import compareNumbers from '../src/guessnumber.js';
const press = document.getElementById('press');
const triesLeftDisplay = document.getElementById('tries-left');
// const youWin = document.getElementById('you-win');
// const gameOver = document.getElementById('game-over');
// const tryAgain = document.getElementById('try-again');

let triesLeft = 4;
triesLeftDisplay.textContent = triesLeft;

press.addEventListener('click', () => {


    triesLeft += -1;
    triesLeftDisplay.textContent = triesLeft;
    const result = compareNumbers(guess, correctNumber);
});

numberDisplay.textContent = guessNumber(guess);
    if(guess === 0) {
        youWin.classList.remove('hidden');
        yourGuess.disabled = true;
    }
    if else (guess < 6) {
        tryAgain.classList.remove('hidden');
    }
   else (guess > 6) {
    gameOver.classList.remove('hidden');
   };

