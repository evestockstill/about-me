export default function shoot() {
    const randomNumber = Math.floor(Math.random() * 3) + 0;
    const rpc = getsRockPaperScissorsFromNumber (randomNumber);
    return rpc;
}
export function getsRockPaperScissorsFromNumber(randomNumber) {
    if(randomNumber === 0) {
        return 'rock';    
    } else if(randomNumber === 1) {
        return 'paper';
    }
    else if(randomNumber === 2) {
        return 'scissors';
    }
}
