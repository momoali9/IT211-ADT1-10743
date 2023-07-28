function Card(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  
  Card.prototype.displayValue = function () {
    const faceValues = { 11: 'Jack', 12: 'Queen', 13: 'King', 14: 'Ace' };
    return this.value > 10 ? faceValues[this.value] : this.value;
  };
  
  Card.prototype.displaySuit = function () {
    const suits = { 0: 'Spades', 1: 'Hearts', 2: 'Diamonds', 3: 'Clubs' };
    return suits[this.suit];
  };
  
  const deck = [];
  
  for (let suit = 0; suit < 4; suit++) {
    for (let value = 2; value <= 14; value++) {
      deck.push(new Card(value, suit));
    }
  }
  
  function getRandomHand(deck) {
    const hand = [];
    while (hand.length < 5) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      const randomCard = deck[randomIndex];
      if (!hand.includes(randomCard)) {
        hand.push(randomCard);
      }
    }
    return hand;
  }
  
  function displayHand(hand) {
    const handList = document.getElementById('hand');
    handList.innerHTML = '';
  
    hand.forEach(card => {
      const cardItem = document.createElement('li');
      cardItem.textContent = `${card.displayValue()} of ${card.displaySuit()}`;
      handList.appendChild(cardItem);
    });
  }

  function dealHand() {
    const hand = getRandomHand(deck);
    displayHand(hand);
  }
  
  dealHand();
  