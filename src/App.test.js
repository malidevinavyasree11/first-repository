import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders count and updates on click', () => {
  render(<App />);

  // Check if the initial count is rendered inside the <h6> tag
  const countElement = screen.getByRole('heading', { level: 6 });  // Target the <h6> tag
  expect(countElement).toHaveTextContent('count: 0');  // Initial value should be 'count: 0'

  // Find the button and click it
  const button = screen.getByRole('button', { name: /clickme/i });  // Find the button with 'clickme' text
  fireEvent.click(button);  // Simulate a click on the button

  // Check if the count updates after clicking the button
  expect(countElement).toHaveTextContent('count: 1');  // After click, count should update to 'count: 1'
});
