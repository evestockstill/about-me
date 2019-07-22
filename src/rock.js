import shoot from './get-throw.js';

const shootButton = document.getElementById('shoot-button');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const rockImage = document.getElementById('rock-image');

let wins = 0;
let losses = 0;

shootButton.addEventListener('click', () => {
    const hand = shoot();
    computerImage(hand);
    const usersChoice = fetchUsersChoice();
   
    const tie = usersChoice === hand;
    const win = usersChoice === 'rock' && hand === 'scissors' || usersChoice === 'paper' && hand === 'rock' || usersChoice === 'scissors' && hand === 'paper';
    const loss = usersChoice === 'paper' && hand === 'scissors' || usersChoice === 'rock' && hand === 'paper' || usersChoice === 'scissors' && hand === 'rock';
    
    if(win) {
        message.textContent = 'You Win!!';
        wins++;
        winCount.textContent = wins;
    }
    else if(loss) {
        message.textContent = 'You Lost!!';
        losses++;
        lossCount.textContent = losses;
    }
    else if(tie) {
        message.textContent = 'We tied, shoot again';
    }
});

function computerImage(hand){
    const src = 'assets/' + hand + '.png';
    rockImage.classList.remove('invisible');
    rockImage.src = src;
}
function fetchUsersChoice() {
    const userButton = document.querySelector('input:checked');
    return userButton.value;
}