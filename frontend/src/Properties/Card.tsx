import { Box, Heading } from '@chakra-ui/react';
import { PanInfo, motion } from 'framer-motion';
import { useState } from 'react';
import { CardProps } from './types';

const Card = ({ card, removeCard, active }: CardProps) => {
  const [leaveX, setLeaveX] = useState(0);
  const onDragEnd = (_e: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      setLeaveX(1000);
      removeCard(card, 'like');
    }
    if (info.offset.x < -100) {
      setLeaveX(-1000);
      removeCard(card, 'nope');
    }
  };
  return (
    <>
      {active ? (
        <Box
          as={motion.div}
          position="absolute"
          height="430px"
          width="300px"
          bg="red"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          cursor="grab"
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={onDragEnd}
          initial={{
            scale: 1
          }}
          animate={{
            scale: 1.05,
            rotate: `${card.name.length % 2 === 0 ? 6 : -6}deg`
          }}
          exit={{
            x: leaveX,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
          }}
          data-testid="active-card"
        >
          <Heading>{card.name}</Heading>
        </Box>
      ) : (
        <Box
          position="absolute"
          height="430px"
          width="300px"
          bg="red"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          cursor="grab"
        >
          <Heading>{card.name}</Heading>
        </Box>
      )}
    </>
  );
};

export default Card;
