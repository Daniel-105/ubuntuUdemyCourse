// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// numbers.forEach(function (num) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// const doubles = numbers.map(function (el) {
//   return el * 2;
// });

// doubles.forEach(function (num) {
//   console.log(num);
// });

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

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

const movieTitles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});
