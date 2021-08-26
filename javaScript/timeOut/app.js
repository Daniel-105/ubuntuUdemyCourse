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

const count = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
};

function validUserNames(usernames) {
  const filtered = usernames.filter((n) => {
    n.lenght > 10;
  });
}
