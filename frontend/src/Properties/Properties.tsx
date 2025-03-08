import Main from '../ui/layout/Main';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropertyCard from './PropertyCard';
import PROPERTIES from './data';
import { Property, SwipeType } from './types';

const Properties = () => {
  const [propeties, setProperties] = useState(PROPERTIES);
  const activeIndex = propeties.length - 1;
  const removeCard = (swipedCard: Property, swipeType: SwipeType) => {
    setProperties((current) =>
      current.filter((card) => {
        return card.id !== swipedCard.id;
      })
    );
    console.log(swipedCard, swipeType);
  };

  return (
    <Main>
      <AnimatePresence>
        {propeties.map((property, index) => (
          <PropertyCard
            key={property.name}
            active={index === activeIndex}
            removeCard={removeCard}
            property={property}
          />
        ))}
      </AnimatePresence>
    </Main>
  );
};

export default Properties;
