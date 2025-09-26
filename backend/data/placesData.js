const places = [
  {
    id: "1",
    name: "Central Park",
    location: "New York",
    activity: "Walking",
    priceRange: 0,
    price: 0,
    description:
      "A beautiful urban park perfect for walking, jogging, and relaxation.",
    imageUrl:
      "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=400&h=300&fit=crop",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Golden Gate Bridge",
    location: "San Francisco",
    activity: "Sightseeing",
    priceRange: 0,
    price: 0,
    description:
      "Iconic suspension bridge offering spectacular views of the bay.",
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Sky Zone Trampoline Park",
    location: "Los Angeles",
    activity: "Sports",
    priceRange: 2,
    price: 25,
    description:
      "Indoor trampoline park with various activities and fitness programs.",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    rating: 4.5,
  },
  {
    id: "4",
    name: "The Metropolitan Museum",
    location: "New York",
    activity: "Culture",
    priceRange: 3,
    price: 30,
    description:
      "World-renowned art museum with extensive collections from around the globe.",
    imageUrl:
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&h=300&fit=crop",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Michelin Star Restaurant",
    location: "Paris",
    activity: "Dining",
    priceRange: 4,
    price: 150,
    description:
      "Exquisite fine dining experience with innovative French cuisine.",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Yellowstone National Park",
    location: "Wyoming",
    activity: "Hiking",
    priceRange: 1,
    price: 15,
    description:
      "Pristine wilderness with geysers, hot springs, and diverse wildlife.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    rating: 4.8,
  },
  {
    id: "7",
    name: "Broadway Theater",
    location: "New York",
    activity: "Entertainment",
    priceRange: 3,
    price: 85,
    description:
      "Experience world-class theater productions in the heart of Manhattan.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    rating: 4.6,
  },
  {
    id: "8",
    name: "Venice Beach",
    location: "Los Angeles",
    activity: "Beach",
    priceRange: 0,
    price: 0,
    description:
      "Famous beach destination with street performers and vibrant culture.",
    imageUrl:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3201bd?w=400&h=300&fit=crop",
    rating: 4.4,
  },
  {
    id: "9",
    name: "Rock Climbing Gym",
    location: "Denver",
    activity: "Sports",
    priceRange: 2,
    price: 20,
    description: "Indoor climbing facility with routes for all skill levels.",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    rating: 4.3,
  },
  {
    id: "10",
    name: "Louvre Museum",
    location: "Paris",
    activity: "Culture",
    priceRange: 2,
    price: 18,
    description:
      "World's largest art museum featuring the Mona Lisa and countless masterpieces.",
    imageUrl:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop",
    rating: 4.8,
  },
  {
    id: "11",
    name: "Times Square",
    location: "New York",
    activity: "Sightseeing",
    priceRange: 0,
    price: 0,
    description:
      "The bustling heart of NYC with bright lights and endless entertainment.",
    imageUrl:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
    rating: 4.2,
  },
  {
    id: "12",
    name: "Alcatraz Island",
    location: "San Francisco",
    activity: "Culture",
    priceRange: 2,
    price: 45,
    description:
      "Historic island prison with fascinating tours and stunning bay views.",
    imageUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    rating: 4.6,
  },
];

const locations = [
  "All Locations",
  "New York",
  "San Francisco",
  "Los Angeles",
  "Paris",
  "Wyoming",
  "Denver",
];
const activities = [
  "All Activities",
  "Walking",
  "Sightseeing",
  "Sports",
  "Culture",
  "Dining",
  "Hiking",
  "Entertainment",
  "Beach",
];

const priceRanges = [
  { label: "Free", min: 0, max: 0 },
  { label: "$1-$20", min: 1, max: 20 },
  { label: "$21-$50", min: 21, max: 50 },
  { label: "$51-$100", min: 51, max: 100 },
  { label: "$100+", min: 101, max: 999 },
];

export { places, locations, activities, priceRanges };
