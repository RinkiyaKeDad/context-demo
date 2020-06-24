import React, { useContext } from 'react';
import { CounterContext } from '../context/counter-context';

const CounterButtons = () => {
  const [count, setCount] = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
};

export default CounterButtons;
