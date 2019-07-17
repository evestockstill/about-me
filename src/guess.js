import guessNumber from '../src/guessnumber.js';
const yourGuess = document.getElementById('your-guess')
const numberDisplay = document.getElementById('number-display')
const youWin = document.getElementById('you-win')
const gameOver = document.getElementById('game-over')
const tryAgain = document.getElementById('try-again')


let guess = 0;
numberDisplay.addEventListener('submit', () => {
    guess += 1;
    numberDisplay.textContent = guessNumber(guess);
    if (guess === 6) {
        youWin.classList.remove('hidden');
        yourGuess.disabled = true;
    }
    if else {
        guess < 6
        tryAgain.classList.remove('hidden');
    }
   else {
        gameOver.classList.remove('hidden');








    })





// function guessNumber(guess) {
//     let result = '';
//     for(let i = 0; i < guess; i++) {
//         result += '6';
//     }
//     return result;
// }

// export default guessNumber;

// function isYes(answer) {
//     if(answer === 'yes') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// export default isYes;