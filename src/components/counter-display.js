import React, { useContext } from 'react';
import { CounterContext } from '../context/counter-context';

const CounterDisplay = () => {
  const [count] = useContext(CounterContext); //array destructuring
  console.log(`hello ${count}`);
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <h1>{count}</h1>
    </div>
  );
};
export default CounterDisplay;
