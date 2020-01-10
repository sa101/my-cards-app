import React from 'react';
import './styles/Footer.css';

function Footer({onShuffle, onDealCard, onReset, disableShuffle, disableDeal}) {
  return (
    <div className="Footer-container">
      <button onClick={onShuffle} disabled={disableShuffle}>Shuffle</button>
      <button onClick={onDealCard} disabled={disableDeal}>Deal</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Footer;
