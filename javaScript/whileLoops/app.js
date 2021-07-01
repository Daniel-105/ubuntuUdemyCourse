// let count = 0;

// while (count <= 10) {
//     console.log(count);
//     count++;
// }

// const password = 'aTuaTiaDe4';

// let guess = prompt('Type the secret password');

// while (guess !== password) {
//     guess = prompt('Type the secret password');
// }
// console.log('CONGRATS!!')

// let maxNum = parseInt(prompt('Enter your maximum number:'));


// while (!maxNum) {

//     maxNum = parseInt(prompt('Enter a valid number:'));
// }

// const targetNum = Math.floor((Math.random() * maxNum)) + 1;

// let guess = prompt('Enter your guess');
// let attemps = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attemps++
//     if (guess > targetNum) {
//         guess = prompt('Too high. Guess again');
//     } else {
//         guess = prompt('Too low. Guess again');  
//     }
// }
// if (guess === 'q') {
//     console.log('OK, You quit')
// } else {
//     console.log(`You got it! It took you ${attemps} guesses. The number is ${targetNum}`)
// }







let maxNum = parseInt(prompt('Please enter you max number:'));

while (!maxNum) {
    maxNum = parseInt(prompt('Please enter you max number:'))
}

let targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = prompt('Enter your guess:');
let attemps = 1;

while (parseInt(guess) !== targetNum) {
    attemps++
    if (guess === 'q') break
    else if (guess > targetNum) {
        guess = prompt('Too high! Try again:');
    } else {
        guess = prompt('Too low! Try again:');
    }
}

if (guess === 'q') {
    console.log('You have quit')
} else {
    console.log(`Congratulations! The number was ${targetNum}!`);
console.log(`It took you ${attemps} guesses!`);
}



