const getRandomInt = (min, max) => Math.floor(Math.random() * (1 + max - min)) + min;
const cardValues = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const cardTypes = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

const cardDataService = {
  getDeckOfCards: function() {
    const deck = {};
    cardTypes.forEach( type => {
      deck[type] = cardValues.map(value => {
        return {type, value};
      });
    });
    return deck;
  },
  //improvement: better Random cards as chances of few same color card at the end
  pullRandomFromDeck: function(deck = {}) {
    const deckObjKeys = Object.keys(deck);
    const keysLength = deckObjKeys.length;
    let randomCard;
    if (keysLength > 0) {
      let number = keysLength > 1 ? getRandomInt(0, keysLength-1) : 0;
      let randomCardType = deckObjKeys[number];
      if (randomCardType && deck[randomCardType]) {
        const cardsOfType = deck[randomCardType];
        if (cardsOfType && cardsOfType.length > 0) {
          let number2 = cardsOfType.length > 1 ? getRandomInt(0, cardsOfType.length-1) : 0;
          randomCard = cardsOfType.splice(number2, 1);
          if (cardsOfType.length === 0) {
            delete deck[randomCardType];
          }
        }
      }
    }
    return randomCard[0];
  },
  shuffleDeck: function(deck ={}) {
    let shuffledDeck = [];
    while(deck && Object.keys(deck).length > 0) {
      shuffledDeck.push(this.pullRandomFromDeck(deck));
    }
    return shuffledDeck;
  }
}

export default cardDataService;