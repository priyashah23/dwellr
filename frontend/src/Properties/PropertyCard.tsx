import { Box, Heading, defineStyle, Image, Text, Flex, Badge } from '@chakra-ui/react';
import { PanInfo, motion } from 'framer-motion';
import { useState } from 'react';
import { PropertyCardProps, Property } from './types';

const formatCurrency = (amount: number) =>
  amount.toLocaleString('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });

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
    background: isActive ? 'white' : 'graphicBackgroundAccentDark',
    borderRadius: 'md',
    border: '1px solid',
    borderColor: isActive ? 'cardDefaultBorderDefault' : 'cardDefaultBorderDefault',
    padding: 4,
    gap: 2
  });

const PropertyDetails = ({ property }: { property: Property }) => {
  return (
    <>
      <Heading color="textTitle" size="lg">
        {property.name}
      </Heading>

      <Box borderRadius="inherit" border="inherit" position="relative">
        <Image src={property.image} pointerEvents="none" borderRadius="inherit" border="inherit" />
        <Badge
          fontSize="sm"
          position="absolute"
          float="left"
          left="2"
          top="2"
          bg="brandPrimary"
          color="badgeLevel1Text"
        >
          {property.isFlat ? 'Flat' : 'House'}
        </Badge>
      </Box>

      <Text color="textBody" fontSize="xl">
        {formatCurrency(property.value)}
      </Text>

      <Flex gap={2} flexWrap="wrap">
        {property.features.map((feature) => (
          <Badge
            key={feature}
            fontSize="sm"
            bg="badgeLevel4Background"
            color="badgeLevel4Text"
            border="1px solid"
            borderColor="badgeLevel4Border"
          >
            {feature}
          </Badge>
        ))}
        {property.isNewHome && (
          <Badge fontSize="sm" bg="badgeNewHomeBackground" color="badgeNewHomeText">
            New home
          </Badge>
        )}
      </Flex>
    </>
  );
};

const PropertyCard = ({ property, removeCard, active, ...props }: PropertyCardProps) => {
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
          {...props}
        >
          <PropertyDetails property={property} />
        </Box>
      ) : (
        <Box __css={cardStyles()} {...props}>
          <PropertyDetails property={property} />
        </Box>
      )}
    </>
  );
};

export default PropertyCard;
