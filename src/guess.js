import compareNumbers from '../src/guessnumber.js';
const submitButton = document.getElementById('submitButton');
const triesLeftDisplay = document.getElementById('triesLeft');
const youWin = document.getElementById('youWin');
const gameOver = document.getElementById('gameOver');
const tryAgain = document.getElementById('tryAgain');
const number = document.getElementById('number?');
let correctNumber = 6;
let triesLeft = 4;

triesLeftDisplay.textContent = triesLeft;

submitButton.addEventListener('click', () => {

    let guess = number.value;
    triesLeft += -1 > 0;
    let result = compareNumbers(guess, correctNumber);
    triesLeftDisplay.textContent = 'triesLeft;' + triesLeft;

    // numberDisplay.textContent = guessNumber(guess);
    if(result === 0) {
        youWin.classList.remove('hidden');
        guess.disabled = true;
        gameOver.remove ('hidden');
    }
    else if(result === -1) {
        tryAgain.classList.remove('hidden');
    }
    else if(result === +1) {
        tryAgain.classList.remove('hidden');
    }

});