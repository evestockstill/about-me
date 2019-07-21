import compareNumbers from '../src/mynumberguessed.js';
const submitButton= document.getElementById("submit");
const yourNumberInput= document.getElementById("yourNumber");
const triesLeft= document.getElementById("triesLeft");
let guessNumber = 0;
let remainingGuess = 4;
submitButton.addEventListener('click', grabNumber);
const correctNumber = 5;
let compareResult = compareNumbers;
function grabNumber() {
    guessNumber = yourNumberInput.value;
}
if (compareResult === 0){
    print 
}


