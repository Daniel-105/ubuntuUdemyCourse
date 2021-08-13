// function greet(firstName, lastName) {
//     console.log(`Hello, ${firstName} ${lastName[0]}.`)
// }
// greet("António", "Esdrubal")

// function nums() {
//     for (i = 0; i < 10; i++) {
//         for (j = 0; j < 10; j++) {
//             console.log(i, j)
//         }
//     }
//     console.log(1,0,0)
// }

// nums()

// function repeat(message, times) {
//     let result = '';
//     for(let i = 0; i < times; i++) {
//      result += message;

//     }
//     console.log(result)
// }
// repeat("hello", 4)

// function isSnakeEyes(dice1, dice2){
//     if (dice1 === 1 && dice2 === 1) {
//     console.log("Snake Eyes!")
// } else {
//     console.log("Not Snake Eyes!")
// }
// }
// isSnakeEyes(6,6)

// Attempt 1
// function lastElement([x,y,z]) {
//     if (z) {
//         return z
//     } else if (y) {
//         return y
//     } else if (x) {
//         return x
//     }
//     else {
//         return null
//     }
// }

// Attemp 2

// let result = [];

// function lastElement(value) {
//   result.push(value);
//   return result[result.length-1]
// }
// lastElement(4)

// attempt 3 (This is the one)

// function lastElement(value) {
//   if (value.length === 0) {
//     return null;
//   } else {
//     let lastNum = value[value.length - 1];
//     return lastNum;
//   }
// }

// function capitalize(word) {
//   let capWord = word[0].toUpperCase() + word.slice(1)
//   return capWord
// }

// capitalize(3)

// let total = 0;
// function sumArray(num) {
//   for (var i = 0; i < num.length; i++) {
//     total += parseInt(num[i]);
//   }
//   return total;
// }

// function returnDay(num) {
//   if (num < 1 || num > 7) {
//     return null;
//   } else if (num === 1) {
//     return "Monday";
//   } else if (num === 2) {
//     return "Tuesday";
//   } else if (num === 3) {
//     return "Wednesday";
//   } else if (num === 4) {
//     return "Thursday";
//   } else if (num === 5) {
//     return "Friday";
//   } else if (num === 6) {
//     return "Saturday";
//   } else if (num === 7) {
//     return "Sunday";
//   }
// }

// SCOPE

// In this exemple, the word that will be printed will be "cat".
// A function works like a bubble. The stuff inside the function
// only works if the function is called.

// let animal = "dog";

// function myPet() {
//   let animal = "cat"
//   console.log(animal)
// }

// myPet()

// // This way we'll see "dog"
// let animal = "dog"; //

// function myPet() {
//   let animal = "cat"
//   console.log(animal)
// }

// console.log(animal)

// A const can be reassigned because a function works like a bubble

// const animal = "dog";

// function myPet() {
//   const animal = "cat";
//   console.log(animal);
// }

// Function in another functions

// let func = function () {
//   return "a tua mãe é que é!!";
// };

// function message(msg) {
//   console.log(`esta é a tua mensagem ${func()}`);
// }

// a program to check if a number is between 1 and 10

// const isBetween = function (num) {
//   return num >= 1 && num <= 10;
// };

// With this I can store in a variable the min and max I want and then call the variable
// with a number to check if the  nnumber is between nim and max

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const math = {
//   square(num) {
//     return num ** 2;
//   },
//   cube(num) {
//     return num ** 3;
//   },
// };

// codewars practice

function sentenceCased() {
  let firstWord = arguments.slice(0, 3),
    secondWord = arguments.slice(4, 7),
    thirdWord = arguments.slice(8, 15),
    forthWord = arguments.slice(16, 18),
    fifthWord = arguments.slice(19, 23),
    sixthWord = arguments.slice(24, 26),
    seventhWord = arguments.slice(27, 30),
    eighthWord = arguments.slice(31, 35),
    ninethWord = arguments.slice(36, 42),
    tenthWord = arguments.slice(43, 47);

  let firstWordCap = firstWord[0].toUpperCase() + firstWord.slice(1),
    secondWordCap = secondWord[0].toUpperCase() + secondWord.slice(1),
    thirdWordCap = thirdWord[0].toUpperCase() + thirdWord.slice(1),
    forthWordCap = forthWord[0].toUpperCase() + forthWord.slice(1),
    fifthWordCap = fifthWord[0].toUpperCase() + fifthWord.slice(1),
    sixthWordCap = sixthWord[0].toUpperCase() + sixthWord.slice(1),
    seventhWordCap = seventhWord[0].toUpperCase() + seventhWord.slice(1),
    eighthWordCap = eighthWord[0].toUpperCase() + eighthWord.slice(1),
    ninethWordCap = ninethWord[0].toUpperCase() + ninethWord.slice(1),
    tenthWordCap = tenthWord[0].toUpperCase() + tenthWord.slice(1);

  const fullSent =
    firstWordCap +
    " " +
    secondWordCap +
    " " +
    thirdWordCap +
    " " +
    forthWordCap +
    " " +
    fifthWordCap +
    " " +
    sixthWordCap +
    " " +
    seventhWordCap +
    " " +
    eighthWordCap +
    " " +
    ninethWordCap +
    " " +
    tenthWordCap;

  return fullSent;
}
