import { render, screen } from '@testing-library/react';
import ContactUs from '../Contact';
import React from 'react';
import '@testing-library/jest-dom';


it('should render contact us form', () => {
  render(<ContactUs />);
  const heading = screen.getByRole('heading', { name: /contact us/i });
  expect(heading).toBeInTheDocument();
});
test('should render name input', () => {
  render(<ContactUs />);
  const nameInput = screen.getByLabelText(/name/i);
  expect(nameInput).toBeInTheDocument();
});
test('should render email input', () => {
  render(<ContactUs />);    
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
});
test('should render message textarea', () => {
    render(<ContactUs />);
    const messageTextarea = screen.getByLabelText(/message/i);
    expect(messageTextarea).toBeInTheDocument();
  });
test('should render submit button', () => {
  render(<ContactUs />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
});
test('should submit form with valid inputs', () => {
  render(<ContactUs />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageTextarea = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
   
});

//     render(<ContactUs />);
//   });

//   test('renders contact form heading', () => {
//     const heading = screen.getByRole('heading', { name: /contact us/i });
//     expect(heading).toBeInTheDocument();
//   });

//   test('renders name input field', () => {
//     const nameInput = screen.getByLabelText(/name/i);
//     expect(nameInput).toBeInTheDocument();
//   });

//   test('renders email input field', () => {
//     const emailInput = screen.getByLabelText(/email/i);
//     expect(emailInput).toBeInTheDocument();
//   });

//   test('renders message textarea', () => {
//     const messageTextarea = screen.getByLabelText(/message/i);
//     expect(messageTextarea).toBeInTheDocument();
//   });

//   test('renders submit button', () => {
//     const button = screen.getByRole('button', { name: /submit/i });
//     expect(button).toBeInTheDocument();
//   });
// });
