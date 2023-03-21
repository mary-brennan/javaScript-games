
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNum;


function checkGuess(number) {
    if (number > secretNum) {
        console.log('Too High!');
        return false;
    }
    if (number < secretNum) {
        console.log('Too Low!');
        return false;
    }
    else {
        console.log('CORRECT!');
        return true;
    }
}

function askGuess() {
    rl.question('Enter a guess: ', numb => {
        let number = Number(numb);
        if (checkGuess(number)) {
            console.log('You Win!');
            rl.close();
        }
        else {
            askGuess();
        }
    });
}

function askRange() {
    rl.question("Enter a max ", max => {
        let mx= Number(max);
        rl.question("Enter a min", min => {
            let mn =Number(min);
            console.log("I'm thinking of a number between "+mn+" and "+ mx);
            secretNum = randomInRange(mn, mx);
           askGuess();
        });
    });
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() *(max -min +1)+ min);
}
askRange();

//askGuess();
