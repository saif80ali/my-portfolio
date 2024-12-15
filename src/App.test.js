import { render, screen } from '@testing-library/react';
import App from './App';

test('verify portfolio name', () => {
  render(<App />);
  const linkElement = screen.getByText(/saif ali/i);
  expect(linkElement).toBeInTheDocument();
});
