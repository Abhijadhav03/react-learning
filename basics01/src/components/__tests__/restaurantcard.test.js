it('should render restaurant card', () => {
  render(<RestaurantCard />);
  const restaurantName = screen.getByText(/restaurant name/i);
  expect(restaurantName).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import mockRestaurantData from './mockRestaurantData';

