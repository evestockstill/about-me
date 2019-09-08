

function compareNumbers(userChoice, correctNumber) {
    
    if(userChoice === correctNumber) {
        return 0;
    } else if(userChoice < correctNumber) {
        return -1;
    } else {
        return 1;
    }
    

}

export default compareNumbers;