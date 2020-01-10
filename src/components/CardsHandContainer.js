import React, {useRef, useEffect} from 'react';
import Card from './Card'

function CardsHandContainer({ cards = [] }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef && scrollRef.current && scrollRef.current.scrollTo) {
      scrollRef.current.scrollTo({
        left: (scrollRef.current.scrollWidth - scrollRef.current.offsetWidth),
        behavior: 'smooth'
      });
    }
  }, [cards]);
  return (
    <div ref={scrollRef} className="Cards-Hand-container">
      {
        cards.map((c, i) => (
        <Card key={i} {...c}></Card>
        ))
      }
    </div>
  );
}

export default CardsHandContainer;
