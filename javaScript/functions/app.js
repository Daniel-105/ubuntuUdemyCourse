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

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } else if (num === 1) {
    return "Monday";
  } else if (num === 2) {
    return "Tuesday";
  } else if (num === 3) {
    return "Wednesday";
  } else if (num === 4) {
    return "Thursday";
  } else if (num === 5) {
    return "Friday";
  } else if (num === 6) {
    return "Saturday";
  } else if (num === 7) {
    return "Sunday";
  }
}
