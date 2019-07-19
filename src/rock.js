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
    
    const tie = usersChoice.value === hand;
    const win = usersChoice.value === 'rock' && hand === 'scissors' || usersChoice.value === 'paper' && hand === 'rock' || usersChoice.value === 'scissors' && hand === 'paper';
    const loss = usersChoice.value === 'paper' && hand === 'scissors' || usersChoice.value === 'rock' && hand === 'paper' || usersChoice.value === 'scissors' && hand === 'rock';
    
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