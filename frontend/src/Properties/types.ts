export type Property = {
  features: string[];
  id: number;
  image: string;
  isFlat: boolean;
  isNewHome: boolean;
  location: string | null;
  name: string;
  numberOfBedrooms: number;
  value: number;
};

export type SwipeType = 'like' | 'nope';

export type PropertyCardProps = {
  property: Property;
  active: boolean;
  removeCard: (swipedCard: Property, swipeType: SwipeType) => void;
};
