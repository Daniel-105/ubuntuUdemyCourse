// const subReddits= ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// First way!! (using for loops)
// for (i = 0; i < subReddits.length; i++) {
//     console.log(subReddits[i])
// }

// Second Way!! (using for ....of ... loops)
// for (let subReddit of subReddits){
//     console.log(subReddit)
// }

// Thrird Way!! (Using while loops)
// let i = 0;
// while (i < subReddits.length) {
//     console.log(subReddits[i])
//     i++
// }



// let studentTables = [['Sonia', 'Sofia', 'Renata'], ['Maria', 'Jonh', 'Pedro'], ['Daniel', 'Vera', 'Amy']];

// First way!!! (Using nested loops)
// for (i = 0; i < studentTables.length; i++) {
//     const table = studentTables[i];
//     for (j = 0; j < table.length; j++) {
//         console.log(table[j])
//     }
// }


// Second Way!! (Using for...of...loops) Much easy to read
// for (let table of studentTables) {
//     for (student of table) {
//         console.log(student)
//     }
// }

const numbers = [1,2,3,4,5,6,7,8,9];

for (let indNum of numbers){
    console.log(indNum * indNum)
}