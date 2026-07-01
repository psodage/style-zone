import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar and verify cart button does not show price', () => {
  render(<App />);
  const homeLink = screen.getByText(/HOME/i);
  expect(homeLink).toBeInTheDocument();

  const cartButton = screen.getByRole('button', { name: /shopping cart/i });
  expect(cartButton).toBeInTheDocument();
  
  // Verify that the price is not present on the cart button
  expect(cartButton).not.toHaveTextContent('₹4,999');
});

