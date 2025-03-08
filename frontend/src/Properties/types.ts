

export type Property = {
  id: number;
  name: string;
};

export type SwipeType = 'like' | 'nope';

export interface CardProps {
  card: Property;
  active: boolean;
  removeCard: (swipedCard: Property, swipeType: SwipeType) => void;
}
