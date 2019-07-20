import compareNumbers from '../src/guessnumber.js';
const press = document.getElementById('press');
const triesLeftDisplay = document.getElementById('tries-left');
const youWin = document.getElementById('you-win');
const gameOver = document.getElementById('game-over');
const tryAgain = document.getElementById('try-again');
const number = document.getElementById('number?');
let correctNumber = 6;
let triesLeft = 4;
triesLeftDisplay.textContent = triesLeft;

press.addEventListener('click', () => {

    let yourGuess = number.value;
    triesLeft += -1 > 0;
    let result = compareNumbers(yourGuess, correctNumber);
    triesLeftDisplay.textContent = 'triesLeft;' + triesLeft;

    // numberDisplay.textContent = guessNumber(guess);
    if(result === 0) {
        youWin.classList.remove('hidden');
        yourGuess.disabled = true;
        gameOver.remove ('hidden');

    }
    else if(result === -1) {
        tryAgain.classList.remove('hidden');
    }
    else if(result === +1) {
        tryAgain.classList.remove('hidden');
    }

});