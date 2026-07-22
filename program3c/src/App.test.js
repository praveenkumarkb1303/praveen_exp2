import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button event example', () => {
  render(<App />);
  const headingElement = screen.getByText(/button event example/i);
  const buttonElement = screen.getByRole('button', { name: /click me/i });

  expect(headingElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
