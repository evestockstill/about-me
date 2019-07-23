import compareNumbers from './guessnumber.js';
const submitButton = document.getElementById('submitButton');
const triesLeftDisplay = document.getElementById('triesLeft');
const youWin = document.getElementById('youWin');
const tryAgain = document.getElementById('tryAgain');
const numberInput = document.getElementById('number?');
let correctNumber = 6;
let triesLeft = 4;
let guess = ('');
submitButton.addEventListener ('click', () => {
    triesLeft--;
    triesLeftDisplay.textContent = triesLeft;
    const userChoice = parseInt(numberInput.value);
    const result = compareNumbers(userChoice, correctNumber);
    
    if(result === 0) {
        youWin.classList.remove('hidden');
        guess.disabled = true;
    }
    else if(result > 0) {
        tryAgain.classList.remove('hidden');
    }
    else if(result < 0) {
        tryAgain.classList.remove('hidden');

    }
});