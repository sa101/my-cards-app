import React from 'react';
import Card from './Card'

function CardsContainer({ cards = [], showCards = true}) {

  const CardView = showCards ? Card : (() => <div className="Back-Of-Card"></div>);
  return (
    <div className="Cards-container">
      {
      cards.length > 0 ? <CardView {...cards[0]}></CardView> : null
      }
    </div>
  );
}

export default CardsContainer;
