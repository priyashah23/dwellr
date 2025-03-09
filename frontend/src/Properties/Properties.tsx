import Main from '../ui/layout/Main';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropertyCard, { cardStyles } from './PropertyCard';
import PROPERTIES from './listing_data';
import QUESTIONS from '../pop_up_questions'
import { Property, SwipeType } from './types';
import { Box, Flex, Heading, IconButton,  Tooltip, useToast } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { useQuery } from '@tanstack/react-query';
import { getProperty } from '../api';

const Properties = () => {
  // const { isLoading, isError, data } = useQuery({ queryKey: ['getProperty'], queryFn: getProperty });

  // console.log(data);

  const [liked, setLiked] = useState(0);
  const [noped, setNoped] = useState(0);
  const [swiped, setSwiped] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0)
  const toast = useToast();

  const [propeties, setProperties] = useState(PROPERTIES);
  const activeIndex = propeties.length - 1;
  const removeCard = (swipedCard: Property, swipeType: SwipeType) => {
    setSwiped(swiped + 1);
    setHasAnswered(false);
    swipeType === 'like' && setLiked(liked + 1);
    swipeType === 'nope' && setNoped(noped + 1);
    setProperties((current) =>
      current.filter((card) => {
        return card.uuid !== swipedCard.uuid;
      })
    );
    console.log(swipedCard, swipeType, noped, liked);
  };

  const questionTime = swiped > 2 && swiped % 3 == 0;
  const showQuestion = questionTime && !hasAnswered;

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
        isClosable: true
      });
    }
  }, [noped]);

  return (
    <Main>
      {showQuestion ? (
        <Box __css={cardStyles()}>
          <Heading color="textTitle" size="lg">
            {QUESTIONS[questionIndex].question}
          </Heading>
          <Flex justifyContent="space-between" width="60%" mt={12}>
            <Tooltip label="Yes" fontSize="md">
              <IconButton
                icon={<CheckIcon />}
                aria-label="Yes"
                size="lg"
                bg="functionalSuccess"
                _hover={{bg: 'green'}}
                color="white"
                onClick={() => {
                  setHasAnswered(true)
                  setQuestionIndex(questionIndex + 1)
                }}
              />
            </Tooltip>
            <Tooltip label="No" fontSize="md">
              <IconButton
                icon={<CloseIcon />}
                aria-label="Yes"
                size="lg"
                bg="functionalFailureContrast"
                _hover={{bg: 'red'}}
                color="white"
                onClick={() => {
                  setHasAnswered(true)
                  setQuestionIndex(questionIndex + 1)
                }}
              />
            </Tooltip>
          </Flex>
        </Box>
      ) : (
        <AnimatePresence>
          {propeties.map((property, index) => (
            <PropertyCard
              key={property.uuid}
              active={index === activeIndex}
              removeCard={removeCard}
              property={property}
            />
          ))}
        </AnimatePresence>
      )}
    </Main>
  );
};

export default Properties;
