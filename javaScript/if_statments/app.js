// let random = Math.random();
// if (random < 0.8) {
//     console.log("You number is less than 0.8");
//     console.log(random);
// }

// const dayOfWeek = prompt("Enter you day").toLowerCase();

// if (dayOfWeek === "monday")  {
//     console.log("Shit! Today is Monday") 
// } else if (prompt("saturday")) {
//     console.log("Great! Today  I'll rest!")
// } else {
//     console.log("MEH");
// }
// } else if (dayOfWeek === "Tuesday") {
//     console.log("MEH")
// } else if (dayOfWeek === "Wednesday") {
//     console.log("MEH")
// } else if (dayOfWeek === "Thrusday") {
//     console.log("MEH")
// }


// const age = prompt("Insere a tua idade");
// if (age < 5) {
//     console.log("Dude, go home!")
// } else if (age <= 10) {
//     console.log("You are too young!")
// } else if (age <= 17) {
//     console.log("You are almost there! But wait a little bit longer")
// } else if (age >= 18) {
//     console.log("Welcome a board")
// }

// const num = 14785236993;

// if (num % 2 === 0) {

// console.log("Your number is pair by two")
// } else if (num % 2 ==! 0) {
//     console.log("You're fucked")
// }

// const age = 90;
// if (age < 5) {
//     console.log("You are a baby. You get in for free")
// } else if (age < 10) {     
//     console.log("You are a child! You pay 10$")
// } else if (age < 65) {
//     console.log("You are a child! You pay 20$")
// } else {
//     console.log("You are a senior! You pay 10$")
// }

// const num = Math.random();

// if (num < 0.5) {
//     console.log("Sorry!! Your number is less than 0.5");
// } else {
//     console.log("Great!! Your number is greater or equal than 0.5");
// }
// console.log(num);

const password = prompt("Enter your new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1){
        console.log("Valid Password!");
    } else {
        console.log("No spaces please!");
    }
} else {
    console.log("Too short");
}


