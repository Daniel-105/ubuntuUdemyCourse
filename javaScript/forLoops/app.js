// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }


// This is a infinit loop! DO NOT USE THIS!!!
// for (let i = 1; i >= 0; i++) {
//     console.log(i)
// }

// let weddingList = ['maria', 'tiago', 'Inês', 'Daniel',
//  'Nuno Jesus',
//   'Paizinho',
//    'Mãezinha']

// weddingList.splice(0, 2, 'Maria', 'Tiago');

// for (let i = 0; i < weddingList.length; i++) {
//     console.log(i, weddingList[i]);

// }

// for (let i = 6; i >= 0; i--) {
//     console.log(i, weddingList[i])
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i <= 3; i++) {
//     console.log(people[i].toUpperCase())
// }

// for (let i = 10; i >= 10 && i <= 20; i++) {
//     console.log(`i is:${i}`)
//     for (j = 1; j <= 5; j++) {
//         console.log(`       j is: ${j}`)
//     }
// }



// const seatingChart = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erica']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     // for(let j = i + 1; j < 10; j++) {
//     //     console.log(i, j)
//     // }
//     console.log(i)
// } 


// Program to represent the total number
// let total = 0;

// for(let i = 0; i <= 20; i++) {
//   total +=  i;
// }

// console.log(total);

// loop an array

// let fruits = ['mango', 'banana', 'apple', 'cherry', 'orange'];

// for (let i = 0; i < fruits.length; i++ ) {
//     console.log(fruits[i])
// }

// loop an array inside another

let studentTables = [['Sonia', 'Sofia', 'Renata'], ['Maria', 'Jonh', 'Pedro'], ['Daniel', 'Vera', 'Amy']];

for (i = 0; i < studentTables.length; i++) {
    const table = studentTables[i];
    for (j = 0; j < table.length; j++) {
        console.log(table[j])
    }
}