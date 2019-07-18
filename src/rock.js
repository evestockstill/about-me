import { shoot } from './get-throw.js';
const shootButton = document.getElementById('shoot-button');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const myHand = document.getElementById('my-hand');
let wins = 0;
let losses = 0;
// let rock = 0;
// let paper = 1;
// let scissors = 2;
shootButton.addEventListener('click', () => {
    const side = shoot();
    rockImage.classList.remove('invisible');
    const src = 'assets/sides' + side + 'jpg';
    rockImage.src = src;
    const sideButton = document.querySelector('input:checked');
})

const won = sideButton.value === side;

if (won) {
    message.textContent = 'You Win!!';
    wins++;
    winCount.textContent = wins;
}
else if(loss) {
    message.textContent = 'You Lost!!';
    losses++;
    lossCount.textContent = losses;

}
else {
    message.textContent = 'We tied, shoot again';
};

