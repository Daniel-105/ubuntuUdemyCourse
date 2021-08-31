// console.log("Hello!");
// setTimeout(() => {
//   console.log("...are you still there");
// }, 3000);

// const id = setInterval(() => {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
//   setTimeout(() => {
//     console.log(clearInterval(id));
//   }, 10000);
// }, 1000);

// const count = () => {
//   for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
// };

// function validUserNames(usernames) {
//   const filtered = usernames.filter((n) => {
//     n.lenght > 10;
//   });
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const evenNum = numbers.filter((n) => {
  return n % 2 === 0;
});
