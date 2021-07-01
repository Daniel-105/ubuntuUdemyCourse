// const userInput = prompt("Enter you name");

// if (userInput) {
//     console.log("Truphy");
// } else {
//     console.log("Falsy");
// }

const password = prompt("Enter a password");

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid Password");
} else {
    alert("Invalid Password")
}