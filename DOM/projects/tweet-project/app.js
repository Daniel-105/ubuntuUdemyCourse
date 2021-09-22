const tweetForm = document.querySelector("form");
const usernameInput = tweetForm.elements.username;
const tweetInput = tweetForm.elements.tweet;
const tweets = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  appendElements(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

function appendElements(userName, tweet) {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(usernameInput.value);
  newTweet.append(bTag);
  newTweet.append(` - ${tweetInput.value}`);
  tweets.append(newTweet);
}
