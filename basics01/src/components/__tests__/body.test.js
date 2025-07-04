import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from '../body';

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mocked data' }),
  })
);  
// Mocking the fetch API to avoid network calls during tests
// This is necessary to ensure the component can render without actual API calls
// and to simulate the expected data structure
// This is a simple mock that returns a resolved promise with mocked data
// The mock can be extended to simulate different scenarios as needed


test('should render body component', () => {
  render(<Body />);
  
  const bodyElement = screen.getByText(/body content/i);
  expect(bodyElement).toBeInTheDocument();
});
