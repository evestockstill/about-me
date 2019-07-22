import compareNumbers from './src/guessnumber.js';
const submitButton = document.getElementById('submitButton');
const triesLeftDisplay = document.getElementById('triesLeft');
const youWin = document.getElementById('youWin');
const gameOver = document.getElementById('gameOver');
const tryAgain = document.getElementById('tryAgain');
const numberInput = document.getElementById('number?');
let correctNumber = 6;
let triesLeft = 4;

triesLeftDisplay.textContent = triesLeft;

submitButton.addEventListener('click', () => {

    let guess = numberInput.value;
    triesLeft = 4;
    // let  = compareNumbers(guess, correctNumber);
    // triesLeftDisplay.textContent = (triesLeft);

    numberInput.textContent = guess;
    if(guess === correctNumber) {
        youWin.classList.remove('hidden');
        guess.disabled = true;
        gameOver.remove ('hidden');
    }
    else if(guess < correctNumber) {
        tryAgain.classList.remove('hidden');
    }
    else if(guess > correctNumber) {
        tryAgain.classList.remove('hidden');
       
    }

});

