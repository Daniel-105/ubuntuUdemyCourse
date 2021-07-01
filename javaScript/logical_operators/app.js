// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//     console.log("Valid Password");
// } else {
//     alert("Invalid password")
// }

// const age = prompt('Enter your age, please');

// if (age > 0 && age <= 5) {
//     console.log("You're a baby you enter for free")
// } else if (age > 5 && age <= 10 || age > 65 && age < 120) {
//     console.log('You pay $10');
// } else if (age > 10 && age <= 65) {
//     console.log('You are an adult, you pay $20');
// } else {
//     alert("Invalid age");
// }

const userInput = prompt("Enter you name");

if (userInput) {
    console.log("Congratulations")
} else if (!userInput) {
    alert("Enter a valid name");
    prompt("Enter you name");
}