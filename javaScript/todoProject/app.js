let list = [];

let wish = prompt('What would you like to do?');

while (wish !== 'quit'){

let i = 0
while (wish === 'new'){

    let newItem = list.push(prompt('Enter new todo'))
    let wish = prompt('What would you like to do?');
    // if (wish === 'list') {
    //     console.log(list)
    //     let wish = prompt('What would you like to do?');
    // }
    i++
    if (wish !== 'new') break
} 

if (wish === 'list'){
    console.log(list.length[i])
}
}

console.log('YOU HAVE QUIT THE APP')
