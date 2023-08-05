import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Title, ContainerHome, InputSearch, InputFile, CardGenerator } from './components';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Text");
  expect(linkElement).toBeInTheDocument();
});


