// Different ways for writing a function

// first
// function some(x, y) {
//   return x + y;
// }

// second
// const some = function (x, y) {
//   return x + y;
// };

// third
// const some = (x, y) => {
//   return x + y;
// };

// const rollDie = () => {
//   return Math.floor(Math.random() * 10) + 1;
// };

// const greet = (name) => {
//   return `Hey ${name}`;
// };

// const greet = (name) => `Hey ${name}`;

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand by me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
