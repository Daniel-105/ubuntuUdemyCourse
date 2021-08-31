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
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand by me",
    score: 85,
    year: 2013,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Nothing Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

// const movieTitles = movies.map(function (movie) {
//   return movie.title.toUpperCase();
// });

// const goodMovies = movies.filter((movie) => {
//   return movie.score > 80;
// });
// const goodTitles = goodMovies.map((m) => m.title);

// We can short this

// const goodMovies = movies.filter((m) => m.score > 80).map((m) => m.title);

// const badMovies = movies.filter((m) => m.score < 70);

// const recentMovies = movies.filter((m) => m.year > 2010);

// // const oldMovies = movies.filter((m) => m.year < 1990);

// const oldMovies = movies.filter(function (m) {
//   return m.year < 1990;
// });

// function validUserNames(strings) {
//   return strings.filter((name) => name.length < 10);
// }

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// const examsPassed = exams.every((pass) => pass > 80);

// const someExamsPassed = exams.some((pass) => pass > 80);

const recentMovies = movies.some((rm) => rm.year > 2015);
