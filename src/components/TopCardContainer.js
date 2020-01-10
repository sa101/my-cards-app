import React from 'react';
import CardsContainer from './CardsContainer'
import './styles/Card.css';

function TopCardContainer({ Spades, Hearts, Diamonds, Clubs }) {
  return (
    <div className="Top-Card-container">
      <CardsContainer key="Spades" cards={Spades}></CardsContainer>
      <CardsContainer key="Hearts" cards={Hearts}></CardsContainer>
      <CardsContainer key="Diamonds" cards={Diamonds}></CardsContainer>
      <CardsContainer key="Clubs" cards={Clubs}></CardsContainer>
    </div>
  );
}

export default TopCardContainer;
