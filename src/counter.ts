export const COUNTER_ACTIONS = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
  RESET: 'reset',
} as const;

export type CounterAction =
  (typeof COUNTER_ACTIONS)[keyof typeof COUNTER_ACTIONS];

// Ограничение в одном переходе делает бонус одинаковым для клика и теста.
export function nextCounterValue(
  value: number,
  action: CounterAction,
): number {
  switch (action) {
    case COUNTER_ACTIONS.INCREASE:
      return value + 1;
    case COUNTER_ACTIONS.DECREASE:
      return Math.max(0, value - 1);
    case COUNTER_ACTIONS.RESET:
      return 0;
    default:
      return value;
  }
}
