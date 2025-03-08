import Main from '../ui/layout/Main';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Card from './Card';
import PROPERTIES from './data';
import { Property, SwipeType } from './types';

const Properties = () => {
  const [cards, setCards] = useState(PROPERTIES);
  const activeIndex = cards.length - 1;
  const removeCard = (swipedCard: Property, swipeType: SwipeType) => {
    setCards((current) =>
      current.filter((card) => {
        return card.id !== swipedCard.id;
      })
    );
    console.log(swipedCard, swipeType)
  };

  return (
    <Main>
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card key={card.name} active={index === activeIndex} removeCard={removeCard} card={card} />
        ))}
      </AnimatePresence>
    </Main>
  );
};

export default Properties;
