import { useState } from 'react';
import './App.css';
import {
  COUNTER_ACTIONS,
  nextCounterValue,
  type CounterAction,
} from './counter';

export default function App() {
  const [value, setValue] = useState<number>(0);

  function dispatch(action: CounterAction): void {
    setValue((currentValue) => nextCounterValue(currentValue, action));
  }

  return (
    <main className="page">
      <h1>Counter</h1>
      <output className="counter-value" aria-live="polite">
        Current value: {value}
      </output>
      <div className="controls" role="group" aria-label="Counter controls">
        <button type="button" onClick={() => dispatch(COUNTER_ACTIONS.INCREASE)}>Increase</button>
        <button type="button" onClick={() => dispatch(COUNTER_ACTIONS.DECREASE)}>Decrease</button>
        <button type="button" onClick={() => dispatch(COUNTER_ACTIONS.RESET)}>Reset</button>
      </div>
    </main>
  );
}
