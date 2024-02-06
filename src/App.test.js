import React from 'react';
import { screen, render } from '@testing-library/react';
import WebPage from './App';

test('renders learn react link', () => {
  render(<WebPage />);
  const linkElement = screen.getByText(/save to reload/i);
  expect(linkElement).toBeInTheDocument();
});
