export interface Place {
  id: string;
  name: string;
  location: string;
  activity: string;
  priceRange: number;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
}

export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export interface Filters {
  location: string;
  activity: string;
  priceRange: [number, number];
}

export interface SearchResultsProps {
  places: Place[];
  loading: boolean;
}

export interface FilterBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onSearch: () => void;
}

export interface ResultCardProps {
  place: Place;
}
