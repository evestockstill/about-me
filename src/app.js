import isYes from '../src/is-yes.js';
const quizButton = document.getElementById('quiz');
// const score = document.getElementById('quiz-outcome');

quizButton.onclick = function() {
    alert('Hello, thanks for taking the quiz');
    const answer1 = prompt('Do I like to play pool?');
    if(answer1 === true) {
        alert('Yes I do!');
    }
    else {
        alert('Read about me again');
    }
    const answer2 = prompt('Do I love my Dog?');
    if(answer2 === true) {
        alert('Correct!');
    } else {
        alert('guess again');
    }
    const answer3 = prompt('Do I enjoy camping?');
    if(answer3 === true) {
        alert('Of Course');
    }
    else {
        alert('try again');
    }
};
        

        


