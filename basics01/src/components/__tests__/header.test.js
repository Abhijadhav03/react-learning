import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../header';
import { Provider } from 'react-redux';
import store from '../../context/store';
import { BrowserRouter } from 'react-router-dom';
test('should load the header component', () => {
  render(<Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>);
  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);
  expect(loginButton).toBeInTheDocument();
});



