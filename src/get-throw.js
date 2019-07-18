export default function shoot() {
    const randomNumber = Math.random ();
    const rpc = getsRockPaperScissorsFromNumber (randomNumber);
    return rpc;
}
export function getsRockPaperScissorsFromNumber(randomNumber) {
    if(randomNumber < 0.33) {
        return 'rock';    
    } else if(randomNumber > 0.66)
        return 'paper';
    
    else {
        return 'scissors';
    }
}