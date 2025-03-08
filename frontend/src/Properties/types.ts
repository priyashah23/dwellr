// export type Property = {
//   features: string[];
//   id: number;
//   image: string;
//   isFlat: boolean;
//   isNewHome: boolean;
//   location: string | null;
//   name: string;
//   numberOfBedrooms: number;
//   value: number;
// };

export type Content = {
  original: string;
};

export type PricingHistory = {
  batch_creation_date: string;
  price: number;
};

export type PropertyType = 'semi-detached' | 'terraced' | 'detached' | 'flat' | 'bungalow';

export type Property = {
  listing_id: number;
  living_rooms: number;
  feature_list: string[];
  source: string;
  total_bedrooms: number;
  new_home: boolean;
  uuid: string;
  content: Content[];
  branch_id: number;
  property_type: PropertyType;
  tenure: string;
  life_cycle_status: string;
  company_id: number;
  display_address: string;
  source_branch_id: number;
  creation_date: string;
  bathrooms: number;
  property_id: number;
  detailed_description: string;
  group_id: number;
  last_attempted_publish_date: string;
  source_id: number;
  category: string;
  summary_description: string;
  'tenure_details.type': string;
  'derived.parking': string[];
  'derived.outside_space': string[];
  'location.country_code': string;
  'location.town_or_city': string;
  'location.coordinates.latitude': number;
  'location.coordinates.longitude': number;
  'location.area_street_id': number;
  'location.property_number_or_name': number;
  'location.postal_code': string;
  'location.street_name': string;
  'pricing.price': number;
  'pricing.price_qualifier': string;
  'pricing.pricing_history': PricingHistory[];
  'pricing.transaction_type': string;
  'pricing.currency_code': string;
};

export type SwipeType = 'like' | 'nope';

export type PropertyCardProps = {
  property: Property;
  active: boolean;
  removeCard: (swipedCard: Property, swipeType: SwipeType) => void;
};
