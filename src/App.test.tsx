import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {


  // Arrange 
  render(<App />);

  // Act
  const txt_UserName = screen.getAllByPlaceholderText("UserName")
  const linkElement = screen.getByText(/learn react/i);

  // Assert
  expect(txt_UserName).toContainHTML("Rupesh");
  expect(linkElement).toBeInTheDocument();
});
