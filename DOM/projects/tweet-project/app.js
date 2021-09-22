// const tweetForm = document.querySelector("form");
// const usernameInput = tweetForm.elements.username;
// const tweetInput = tweetForm.elements.tweet;
// const tweets = document.querySelector("#tweets");

// tweetForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   appendElements(usernameInput.value, tweetInput.value);
//   usernameInput.value = "";
//   tweetInput.value = "";
// });

// function appendElements(userName, tweet) {
//   const newTweet = document.createElement("li");
//   const bTag = document.createElement("b");
//   bTag.append(usernameInput.value);
//   newTweet.append(bTag);
//   newTweet.append(` - ${tweetInput.value}`);
//   tweets.append(newTweet);
// }

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productInput = form.elements.product;
  const qtyInput = form.elements.qty;
  const list = document.querySelector("#list");

  appendItem(qtyInput.value, productInput.value);

  productInput.value = "";
  qtyInput.value = "";
});

function appendItem(qty, product) {
  const listItem = document.createElement("li");
  listItem.append(qty);
  listItem.append(` ${product}`);
  list.append(listItem);
}
