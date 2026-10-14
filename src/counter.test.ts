import { COUNTER_ACTIONS, nextCounterValue } from './counter';

test('increases the current value by one', () => {
  expect(nextCounterValue(4, COUNTER_ACTIONS.INCREASE)).toBe(5);
});

test('decreases a positive value by one', () => {
  expect(nextCounterValue(4, COUNTER_ACTIONS.DECREASE)).toBe(3);
});

test('implements the bonus by keeping zero at zero when decreasing', () => {
  expect(nextCounterValue(0, COUNTER_ACTIONS.DECREASE)).toBe(0);
});

test('resets any value to zero and ignores an unknown action', () => {
  expect(nextCounterValue(17, COUNTER_ACTIONS.RESET)).toBe(0);
  // @ts-expect-error Проверяем защиту от некорректного JavaScript-вызова во время выполнения.
  expect(nextCounterValue(17, 'unknown')).toBe(17);
});
