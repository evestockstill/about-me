import shoot from './get-throw.js';
const shootButton = document.getElementById('shoot-button');
const message = document.getElementById('message');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');

let wins = 0;
let losses = 0;

shootButton.addEventListener('click', () => {
    const side = shoot();
    rockImage.classList.remove('invisable');
    const src = 'assets/sides' + side + 'jpg';
    rockImage.src = src;
    const sideButton = document.querySelector('input:checked');
})