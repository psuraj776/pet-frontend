import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SelectRole from '../SelectRole';

test('renders SelectRole component', () => {
  render(
    <Router>
      <SelectRole />
    </Router>
  );
  const roleText = screen.getByText(/Select Your Role/i);
  expect(roleText).toBeInTheDocument();
  const vetButton = screen.getByText(/Vet/i);
  expect(vetButton).toBeInTheDocument();
  const petButton = screen.getByText(/Pet/i);
  expect(petButton).toBeInTheDocument();
});

