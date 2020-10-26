//variables for user input - message type

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];
var favorites = [];
var currentMessage;

//👀section for querySelectors 👀:
var bodyForBackgroundChange = document.querySelector("body");
var affirmationMessageSelection = document.querySelector("#affirmation");
var mantraMessageSelection = document.querySelector("#mantra");
var recieveMessageButton = document.querySelector(".recieve-message");
var chosenMessage = document.querySelector(".chosen-message");
var logo = document.querySelector(".logo");
var loader = document.querySelector(".loader");
var clearMessage =document.querySelector(".clear-message");
// var favoriteButton = document.querySelector(".favorite-message");
// var viewFavoritesButton = document.querySelector(".view-favorites");
// var mainScreen = document.querySelector(".main-screen");
// var favoritesScreen = document.querySelector(".favorites-screen");
// var displayFavorites = document.querySelector(".favorites-array");

//👂🏼section for eventListeners👂🏼:

recieveMessageButton.addEventListener("click", displayRandomMessage);
clearMessage.addEventListener("click", clearDisplay);
// favoriteButton.addEventListener("click", addToFavorites);
// viewFavoritesButton.addEventListener("click", viewFavoritesScreen);


//👉🏼section for functions and event handlers 👈🏼:

//randomize the messages:
function getRandomMessage(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function showHide(show, hide) {
  show.classList.remove("hidden");
  hide.classList.add("hidden");
};

function hide(hide) {
  hide.classList.add("hidden");
};

function show(show) {
  show.classList.remove("hidden");
};

//recieve randomized affirmation or mantra:
function retrieveMessage() {
  if (affirmationMessageSelection.checked) {
    bodyForBackgroundChange.style.background = "linear-gradient(#0575E6, #00F260)";
    return getRandomMessage(affirmations);
  } else if (mantraMessageSelection.checked) {
    bodyForBackgroundChange.style.background = "linear-gradient(#108dc7, #ef8e38)";
    return getRandomMessage(mantras);
  } else {
    return "Please select a message type!!";
  };
};

//add and remove hidden to elements

function showMessage() {
  showHide(chosenMessage, loader);
  currentMessage = retrieveMessage();
  chosenMessage.innerHTML = "";
  chosenMessage.innerHTML += `${currentMessage}`;
  show(clearMessage);
  // show(favoriteButton);
};


//display message and favorite button, hide logo, loading animation when recieve message button is clicked:
function displayRandomMessage() {
  showHide(loader, logo);
  hide(chosenMessage);
  // hide(favoriteButton);
  var timer;
  timer = setTimeout(showMessage, 1500);
};

function clearDisplay() {
  showHide(logo,chosenMessage);
  hide(clearMessage);
}

//add quote to favorite array
// function addToFavorites() {
//   if (!favorites.includes(currentMessage)) {
//     favorites.push(currentMessage);
//     show(viewFavoritesButton);
//   };
// };

// view favorites
// function viewFavoritesScreen() {
//   showHide(favoritesScreen, mainScreen);
//   // bodyForBackgroundChange.style.background = "linear-gradient(#108dc7, #ef8e38)";
//   displayFavorites.innerText = favorites;
// };







//
