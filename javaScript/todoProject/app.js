let list = [];

let wish = prompt('What would you like to do?');

let i = 0
while (wish !== 'quit'){
    wish = prompt('What would you like to do?');
i++
    if (wish === 'new'){
        let newItem = list.push(prompt('Enter new todo'))
        let wish = prompt('What would you like to do?');
    } else if (wish === 'list') {
        console.log(list)
        let wish = prompt('What would you like to do?');
    }
    
    
} 

if (wish === 'list'){
    console.log(list.length[i])
}


console.log('YOU HAVE QUIT THE APP')

// for (i = 0; wish === 'new'; i++) {
//     let newItem = list.push(prompt('Enter new todo'))
//     let wish = prompt('What would you like to do?');
//     if (wish !== 'new') break
// }
// console.log('*******************************')
// if (wish === 'list') {
//     console.log(list[i])
// }


// let i = 0;
// if (wish ==='new') {
//     while (wish) {
//         i++
//     let newItem = list.push(prompt('Enter new todo'))
//     let wish = prompt('What would you like to do?');
//     }
// } else if (wish === 'list') {
//     console.log(list[i])
// }



