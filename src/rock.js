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
    rockImage.classList.remove('invisible');
    const src = 'assets/' + hand + '.png';
    rockImage.src = src;
    const userButton = document.querySelector('input:checked');

    const tie = userButton.value === hand;
    const win = userButton.value === 'rock' && hand === 'paper' || userButton.value === 'paper' && hand === 'rock' || userButton.value === 'scissors' && hand === 'paper';
    const loss = userButton.value === 'paper' && hand === 'rock' || userButton.value === 'rock' && hand === 'paper' || userButton.value === 'paper' && hand === 'scissors';
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
