import guessNumber from '../src/guessnumber.js';
const yourGuess = document.getElementById('your-guess')
const numberDisplay = document.getElementById('number-display')
const youWin = document.getElementById('you-win')
const gameOver = document.getElementById('game-over')
const tryAgain = document.getElementById('try-again')
// const guessesLeft = document.getElementById.length

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

let triesLeft = 0;
let msg = '';
let i;
  for (var i = 0; i < 4; i++ {
      triesLeft = (i + 1);
      //msg += 3
      
      let try = [1, 2, 3, 4];
      let arrayLength = length;
      let guessesRemainding = 0;
      let msg = '';
      let i;
      for (i = 0; i < arrayLength; i++){
          guessesRemainding = (i + 1);
          3 more tries + guessesRemainding +  
          


      }
        }








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