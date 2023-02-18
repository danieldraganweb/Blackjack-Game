let balance = document.querySelector("#balance");
let totalWins = document.querySelector("#wins");
let totalLosses = document.querySelector("#losses");
let bet = document.querySelector("#bet-el");
let message = document.querySelector("#message-el");
let dealerSum = document.querySelector("#dealer-sum");
let playerSum = document.querySelector("#player-sum");
let playerCards = document.querySelector("#player-cards");
let dealerCards = document.querySelector("#dealer-cards");
let betInput = document.querySelector("#bet-input");
let hasBlackJack = false;
let hiddenCard = document.querySelector("#hidden-card");
let isAlive = true;
let canHit = true;
console.log(betInput);

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
window.onload = function () {
  buildDeck();
};
function builtDeck() {
  let deck = [];
  let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  let values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
  for (let value of values.split(",")) {
    for (let suit of suits) {
      deck.push({ value, suit });
    }
  }
  return deck;
}
function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}
let deck = builtDeck();
// shuffleDeck(deck);
// let playerCards = [getRandomCard(), getRandomCard()];
// let dealerCards = [getRandomCard(), getRandomCard()];
// let playerSum = 0;
// let dealerSum = 0;
// let message = "";
// let hasBlackJack = false;
// let isAlive = false;
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// let cardsEl = document.getElementById("cards-el");
// let playerEl = document.getElementById("player-el");
// let dealerEl = document.getElementById("dealer-el");
// let balanceEl = document.getElementById("balance-el");
// function addPlayerBet() {
//   console.log("Bet clicked");
// }
function drawNewCard() {
  console.log(card);
}
function stopDrawing() {
  console.log("Stop drawing");
}
