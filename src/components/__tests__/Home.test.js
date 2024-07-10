import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home';

test('renders Home component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );
  const linkElement = screen.getByText(/Welcome to Pet Vet Store/i);
  expect(linkElement).toBeInTheDocument();
  const buttonElement = screen.getByText(/Continue/i);
  expect(buttonElement).toBeInTheDocument();
});

