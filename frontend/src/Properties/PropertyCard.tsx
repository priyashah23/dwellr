import { Box, Heading, defineStyle, Image, Text } from '@chakra-ui/react';
import { PanInfo, motion } from 'framer-motion';
import { useState } from 'react';
import { PropertyCardProps, Property } from './types';

const formatCurrency = (amount: number) => amount.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });

const cardStyles = (isActive = false) =>
  defineStyle({
    position: 'absolute',
    height: '430px',
    width: '300px',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'grab',
    background: isActive ? 'cardFeaturedBackgroundDefault' : 'cardPremiumBackgroundDefault',
    borderRadius: 'md',
    border: '1px solid',
    borderColor: isActive ? 'cardFeaturedBorderDefault' : 'cardPremiumBorderDefault'
  });

const PropertyDetails = ({ property }: { property: Property }) => {
  return (
    <>
      <Heading color="textBody">{property.name}</Heading>
      <Image src={property.image} />
      <Text color="textBody2">{formatCurrency(property.value)}</Text>
    </>
  );
};

const PropertyCard = ({ property, removeCard, active }: PropertyCardProps) => {
  const [leaveX, setLeaveX] = useState(0);
  const onDragEnd = (_e: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      setLeaveX(1000);
      removeCard(property, 'like');
    }
    if (info.offset.x < -100) {
      setLeaveX(-1000);
      removeCard(property, 'nope');
    }
  };
  return (
    <>
      {active ? (
        <Box
          as={motion.div}
          __css={cardStyles(true)}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={onDragEnd}
          initial={{
            scale: 1
          }}
          animate={{
            scale: 1.05,
            rotate: `${property.name.length % 2 === 0 ? 6 : -6}deg`
          }}
          exit={{
            x: leaveX,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
          }}
          data-testid="active-card"
        >
          <PropertyDetails property={property} />
        </Box>
      ) : (
        <Box __css={cardStyles()}>
          <PropertyDetails property={property} />
        </Box>
      )}
    </>
  );
};

export default PropertyCard;
