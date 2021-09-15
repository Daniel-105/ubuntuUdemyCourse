// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`

//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon)
// }

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const image = document.createElement("img");
  const myDiv = document.createElement("div");
  image.src = `${baseURL}${i}.png`;
  myDiv.append(image);
  myDiv.classList.add("pokemon");
  container.appendChild(myDiv);
  const pokemonNum = document.createElement("span");
  pokemonNum.innerText = `#${i}`;
  myDiv.append(pokemonNum);
}
