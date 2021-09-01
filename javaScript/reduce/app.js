// const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// total = 0;
// for (price of prices) {
// total += price;
// }

// const total = prices.reduce((total, prices) => {
//   return total + prices;
// });

// const maxPrice = prices.reduce((currPrice, maxPrice) => {
//   if (currPrice < maxPrice) {
//     return maxPrice;
//   }
//   return currPrice;
// });

// const minPrice = prices.reduce((currPrice, min) => {
//   if (currPrice > min) {
//     return min;
//   }
//   return currPrice;
// });

// const movies = [
//   {
//     title: "Amadeus",
//     score: 99,
//     year: 1984,
//   },
//   {
//     title: "Sharknado",
//     score: 35,
//     year: 2013,
//   },
//   {
//     title: "13 Going On 30",
//     score: 70,
//     year: 2004,
//   },
//   {
//     title: "Stand by me",
//     score: 85,
//     year: 2013,
//   },
//   {
//     title: "Waterworld",
//     score: 62,
//     year: 1995,
//   },
//   {
//     title: "Jingle All The Way",
//     score: 71,
//     year: 1996,
//   },
//   {
//     title: "Parasite",
//     score: 95,
//     year: 2019,
//   },
//   {
//     title: "Nothing Hill",
//     score: 77,
//     year: 1999,
//   },
//   {
//     title: "Alien",
//     score: 90,
//     year: 1979,
//   },
// ];

// const highMovie = movies.reduce((currMovie, bestMovie) => {
//   if (currMovie.score < bestMovie.score) {
//     return bestMovie;
//   }
//   return currMovie;
// });

// const bestMovieTitle = `The best movie of all time is ${highMovie.title} with ${highMovie.score} points`;

// It is possible for reduce to start on a value that you decide
// like 100!
// With out it total is 120 but with the initial value is 220
const numbers = [1, 2, 5, 4, 8, 7, 8, 85];

const total = numbers.reduce((sum, num) => {
  return sum + num;
}, 100);
