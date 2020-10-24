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


//👀section for querySelectors 👀:

var affirmationMessageSelection = document.querySelector("#affirmation");
var mantraMessageSelection = document.querySelector("#mantra");
var recieveMessageButton = document.querySelector(".recieve-message");
var chosenMessage = document.querySelector(".chosen-message");
var logo = document.querySelector(".logo");
var displayField = document.querySelector(".display-field");


//👂🏼section for eventListeners👂🏼:

recieveMessageButton.addEventListener("click", displayRandomMessage);

//👉🏼section for functions and event handlers 👈🏼:

//randomize the messages:
function randomizeMessages(array) {
  return array[Math.floor(Math.random() * array.length)];
};

//recieve randomized affirmation:
var randomAffirmation = randomizeMessages(affirmations);
//recieve randomized mantra:
var randomMantra = randomizeMessages(mantras);

//add hide logo to class in order to hide and then show message
function hideLogo() {
  logo.classList.add("hidden");
};
function chooseMessage() {
  if(affirmationMessageSelection.checked) {
    return randomAffirmation;
  } else if(mantraMessageSelection.checked) {
    return randomMantra;
  };
};
function showMessage() {
  chosenMessage.classList.remove("hidden");
  var messageShown = chooseMessage();
  chosenMessage.innerHTML = "";
  chosenMessage.innerHTML += `${messageShown}`;
}
//display message and hide logo:
function displayRandomMessage() {
  hideLogo();
  showMessage();
};


















//
