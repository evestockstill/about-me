const submitButton= document.getElementById("submit");
const yourNumberInput= document.getElementById("yourNumber");
const triesLeft= document.getElementById("triesLeft");
let guessNumber= 0;
let remainingGuess =4;
submitButton.addEventListener("click",grabNumber);
const correctNumber= 5;
function grabNumber () {
    guessNumber= yourNumberInput.value;
}
function compareNumbers(guess, correctNumber) {
    if(guess === correctNumber) {
        return 0;
    } else if(guess < correctNumber) {
        return -1;
    } else {
        return +1;
    }
    

}

