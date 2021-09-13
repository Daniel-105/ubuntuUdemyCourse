// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

// for (link of allLinks) {
//   link.style.color = "red";
// }

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const letters = document.querySelectorAll("span");
// for (let letter of letters) {
//   for (i = 0; i < colors.length; i++) {
//     letter.style.color = "colors[i]";
//   }
// }
// for (let i = 0; i < letters.length; i++) {
//   for (let i = 0; i < colors.length; i++) {
//     letters.style.color = "colors[i]";
//   }
// }

window.getComputedStyle("span") = 'red';
