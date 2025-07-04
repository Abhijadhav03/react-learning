const mockRestaurantData = [
  {
    id: 1,
    name: 'Restaurant 1',
    cuisine: 'Italian',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Restaurant 2',
    cuisine: 'Chinese',
    rating: 4.0,
  },
  {
    id: 3,
    name: 'Restaurant 3',
    cuisine: 'Indian',
    rating: 4.8,
  },
];

export default mockRestaurantData;
export const mockRestaurantDataWithDiscount = [
  {
    id: 1,
    name: 'Restaurant 1',
    cuisine: 'Italian',
    rating: 4.5,
    discount: {
      header: '20% OFF',
      description: 'Get 20% off on your first order',
    },
  },
  {
    id: 2,
    name: 'Restaurant 2',
    cuisine: 'Chinese',
    rating: 4.0,
    discount: {
      header: '15% OFF',
      description: 'Enjoy 15% off on all dishes',
    },
  },
  {
    id: 3,
    name: 'Restaurant 3',
    cuisine: 'Indian',
    rating: 4.8,
    discount: {
      header: '25% OFF',
      description: 'Flat 25% off on orders above $50',
    },
  },
];
export const mockRestaurantDataWithNoDiscount = [
  {
    id: 1,
    name: 'Restaurant 1',
    cuisine: 'Italian',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Restaurant 2',
    cuisine: 'Chinese',
    rating: 4.0,
  },
  {
    id: 3,
    name: 'Restaurant 3',
    cuisine: 'Indian',
    rating: 4.8,
  },
];
export const mockRestaurantDataWithEmptyDiscount = [
  {
    id: 1,
    name: 'Restaurant 1',
    cuisine: 'Italian',
    rating: 4.5,
    discount: {},
  },
  {
    id: 2,
    name: 'Restaurant 2',
    cuisine: 'Chinese',
    rating: 4.0,
    discount: {},
  },
  {
    id: 3,
    name: 'Restaurant 3',
    cuisine: 'Indian',
    rating: 4.8,
    discount: {},
  },
];
export const mockRestaurantDataWithInvalidDiscount = [
  {
    id: 1,
    name: 'Restaurant 1',
    cuisine: 'Italian',
    rating: 4.5,
    discount: {
      header: null,
      description: null,
    },
  },
  {
    id: 2,
    name: 'Restaurant 2',
    cuisine: 'Chinese',
    rating: 4.0,
    discount: {
      header: undefined,
      description: undefined,
    },
  },
  {
    id: 3,
    name: 'Restaurant 3',
    cuisine: 'Indian',
    rating: 4.8,
    discount: {
      header: '',
      description: '',
    },
  },
];