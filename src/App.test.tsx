import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('uses useState-driven buttons and never displays a negative value', async () => {
  const user = userEvent.setup();
  render(<App />);

  const value = screen.getByRole('status');
  expect(value).toHaveTextContent('Current value: 0');

  await user.click(screen.getByRole('button', { name: 'Increase' }));
  await user.click(screen.getByRole('button', { name: 'Increase' }));
  expect(value).toHaveTextContent('Current value: 2');

  await user.click(screen.getByRole('button', { name: 'Decrease' }));
  await user.click(screen.getByRole('button', { name: 'Decrease' }));
  await user.click(screen.getByRole('button', { name: 'Decrease' }));
  expect(value).toHaveTextContent('Current value: 0');

  await user.click(screen.getByRole('button', { name: 'Increase' }));
  await user.click(screen.getByRole('button', { name: 'Reset' }));
  expect(value).toHaveTextContent('Current value: 0');
});

test('groups the counter controls under an accessible label', () => {
  render(<App />);

  const controls = screen.getByRole('group', { name: 'Counter controls' });
  expect(controls).toContainElement(screen.getByRole('button', { name: 'Increase' }));
  expect(controls).toContainElement(screen.getByRole('button', { name: 'Decrease' }));
  expect(controls).toContainElement(screen.getByRole('button', { name: 'Reset' }));
});
