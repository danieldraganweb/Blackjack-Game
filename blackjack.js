let suits = ["hearts", "diamonds", "spades", "clubs"];
let values = [
  "ace",
  "king",
  "queen",
  "jack",
  "ten",
  "nine",
  "eight",
  "seven",
  "six",
  "five",
  "four",
  "three",
  "two",
];
let hand = dealHand(deck, 2);
let score = scoreHand(hand);
console.log(hand);
console.log(score);

// Path: deck.js
let deck = createDeck();
console.log(deck);

// Path: deck.js
function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx],
      };
      deck.push(card);
    }
  }
  return deck;
}

// Path: deck.js

function dealHand(deck, numberOfCards) {
  let hand = [];
  for (let i = 0; i < numberOfCards; i++) {
    hand.push(deck.pop());
  }
  return hand;
}

// Path: deck.js

function scoreHand(hand) {
  let score = 0;
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    score += getCardNumericValue(card);
  }
  return score;
}

// Path: deck.js

function getCardNumericValue(card) {
  switch (card.value) {
    case "ace":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return 10;
  }
}

// Path: deck.js

function getCardString(card) {
  return card.value + " of " + card.suit;
}

// Path: deck.js

function showStatus() {
  if (gameOver) {
    showStatus = "Game Over";
  } else {
    showStatus = "You have: " + score + " points";
  }
}

// Path: deck.js

function checkForEndOfGame() {
  showStatus();
  if (gameOver) {
    let restart = confirm("Game Over. Do you want to play again?");
    if (restart) {
      gameOver = false;
      playerWon = false;
      deck = createDeck();
      shuffleDeck(deck);
      dealerCards = [getNextCard(), getNextCard()];
      playerCards = [getNextCard(), getNextCard()];
    } else {
      alert("Thanks for playing Blackjack!");
    }
  }
}

// Path: deck.js

function getNextCard() {
  return deck.shift();
}

// Path: deck.js

function getCardNumericValue(card) {
  switch (card.value) {
    case "ace":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return 10;
  }
}

// Path: deck.js

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === "ace") {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

// Path: deck.js

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

// Path: deck.js

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

// Path: deck.js

function showStatus() {
  if (gameOver) {
    if (playerWon) {
      showStatus = "You win!";
    } else {
      showStatus = "Dealer wins!";
    }
  } else {
    showStatus = "You have: " + playerScore + " points";
  }
}

// Path: deck.js

function checkForEndOfGame() {
  updateScores();

  if (gameOver) {
    let restart = confirm("Game Over. Do you want to play again?");
    if (restart) {
      gameOver = false;
      playerWon = false;
      deck = createDeck();
      shuffleDeck(deck);
      dealerCards = [getNextCard(), getNextCard()];
      playerCards = [getNextCard(), getNextCard()];
    } else {
      alert("Thanks for playing Blackjack!");
    }
  }
}

// Path: deck.js

function showStatus() {
  if (gameOver) {
    if (playerWon) {
      showStatus = "You win!";
    } else {
      showStatus = "Dealer wins!";
    }
  } else {
    showStatus = "You have: " + playerScore + " points";
  }
}

// Path: deck.js

function checkForEndOfGame() {
  updateScores();

  if (gameOver) {
    let restart = confirm("Game Over. Do you want to play again?");
    if (restart) {
      gameOver = false;
      playerWon = false;
      deck = createDeck();
      shuffleDeck(deck);
      dealerCards = [getNextCard(), getNextCard()];
      playerCards = [getNextCard(), getNextCard()];
    } else {
      alert("Thanks for playing Blackjack!");
    }
  }
}

// Path: deck.js

function showStatus() {
  if (gameOver) {
    if (playerWon) {
      showStatus = "You win!";
    } else {
      showStatus = "Dealer wins!";
    }
  } else {
    showStatus = "You have: " + playerScore + " points";
  }
}
