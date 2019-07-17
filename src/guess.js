import compareNumbers from '../src/guessnumber.js';
const press = document.getElementById('press');
const triesLeftDisplay = document.getElementById('tries-left');
const youWin = document.getElementById('you-win');
const gameOver = document.getElementById('game-over');
const tryAgain = document.getElementById('try-again');
const number = document.getElementById('number?');
let triesLeft = 4;
triesLeftDisplay.textContent = triesLeft;

press.addEventListener('click', () => {

    let yourGuess = number.value;
    triesLeft += -1;
    triesLeftDisplay.textContent = triesLeft;
    let result = compareNumbers(yourGuess, 6);
console.log (result);

    // numberDisplay.textContent = guessNumber(guess);
    if (result === 0) {
        youWin.classList.remove('hidden');
        yourGuess.disabled = true;
        console.log ('you win');
    }
    if else (result == -1) {
        tryAgain.classList.remove('hidden');
    }
    if else (result == +1) {
        gameOver.classList.remove('hidden');
    };

});