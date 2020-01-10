import React from 'react';
import './styles/Card.css';

const cardIconMap = {
  Diamonds: '♦',
  Hearts:	'♥',
  Clubs: '♣',
  Spades:	'♠'
}
function Card({value, type}) {
  return (
    <div className="Card-container">
      <div className={`topL-Corner ${type}`}>
        <p>{value}</p>
        <p>{cardIconMap[type]}</p>
      </div>
      <div className={`bottomR-Corner ${type}`}>
        <p>{value}</p>
        <p>{cardIconMap[type]}</p>
      </div>
    </div>
  );
}

export default Card;
