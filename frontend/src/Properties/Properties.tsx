import Main from '../ui/layout/Main';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import PROPERTIES from './data';
import { Property, SwipeType } from './types';
import { useToast } from '@chakra-ui/react';
// import { useQuery } from '@tanstack/react-query';
// import { getProperties } from './api';

const Properties = () => {
  // const { isLoading, isError, data } = useQuery({ queryKey: ['todos'], queryFn: getProperties });

  const [liked, setLiked] = useState(0);
  const [noped, setNoped] = useState(0);
  const toast = useToast();

  const [propeties, setProperties] = useState(PROPERTIES);
  const activeIndex = propeties.length - 1;
  const removeCard = (swipedCard: Property, swipeType: SwipeType) => {
    swipeType === 'like' && setLiked(liked + 1);
    swipeType === 'nope' && setNoped(noped + 1);
    setProperties((current) =>
      current.filter((card) => {
        return card.uuid !== swipedCard.uuid;
      })
    );
    console.log(swipedCard, swipeType, noped, liked);
  };

  useEffect(() => {
    if (liked === 5) {
      toast({
        title: 'Achievement Unlocked',
        description: "You've liked 5 properties so far, you're closer to your dream dwelling!",
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    }
  }, [liked]);

  useEffect(() => {
    if (noped === 5) {
      toast({
        title: 'Achievement Unlocked',
        description: "You've noped 5 properties so far, you might need to adjust your preferences!",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
    }
  }, [noped]);

  return (
    <Main>
      <AnimatePresence>
        {propeties.map((property, index) => (
          <PropertyCard key={property.uuid} active={index === activeIndex} removeCard={removeCard} property={property} />
        ))}
      </AnimatePresence>
    </Main>
  );
};

export default Properties;
