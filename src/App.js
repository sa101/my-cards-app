import React, {useCallback, useState} from 'react';
import cardData from './data/cardData';
import './App.css';
import TopCardContainer from './components/TopCardContainer';
import CardsContainer from './components/CardsContainer';
import CardsHandContainer from './components/CardsHandContainer';
import Footer from './components/footer';

function App() {
  const [deckOfCards, setDeckOfCards] = useState(cardData.getDeckOfCards());
  const [shuffledCards, setShuffledCards] = useState([]);
  const [handOfCards, setHandOfCards] = useState([]);
  const [disableShuffle, setDisableShuffle] = useState(false);
  const [disableDeal, setDisableDeal] = useState(true);

  // Improvement can be done by using useReducer hook for manipulating comlex State data
  const handleShuffle = useCallback(() => {
    setShuffledCards(cardData.shuffleDeck(deckOfCards));
    setDeckOfCards([]);
    setDisableShuffle(true);
    setDisableDeal(false);
  },[deckOfCards]);
  const handleDealCard = useCallback(() => {
    if (shuffledCards.length > 0) {
      const card = shuffledCards.splice(0,1);
      setShuffledCards([].concat(shuffledCards));
      setHandOfCards(handOfCards.concat(card[0]));
    } else {
      setDisableDeal(true);
    }
  },[handOfCards, shuffledCards]);
  const handleReset = useCallback(() => {
    setHandOfCards([]);
    setShuffledCards([]);
    setDeckOfCards(cardData.getDeckOfCards());
    setDisableShuffle(false);
    setDisableDeal(true);
  },[]);
  const { Spades, Hearts, Diamonds, Clubs } = deckOfCards;
  return (
    <div className="App">
      <TopCardContainer
        Spades={Spades}
        Hearts={Hearts}
        Diamonds={Diamonds}
        Clubs={Clubs}
      />
      <div className="Shuffled-container">
        <CardsContainer cards={shuffledCards} showCards={false}></CardsContainer>
      </div>
      <CardsHandContainer cards={handOfCards}></CardsHandContainer>
      <Footer
        disableShuffle={disableShuffle}
        disableDeal={disableDeal}
        onShuffle={handleShuffle}
        onDealCard={handleDealCard}
        onReset={handleReset} ></Footer>
    </div>
  );
}

export default App;
