import React, { useState } from 'react';

import { CounterContext } from './context/counter-context';
import CounterDisplay from './components/counter-display';
import CounterButtons from './components/counter-buttons';

const App = () => {
  var [count, setCount] = useState(0);
  console.log(count);
  return (
    <CounterContext.Provider value={[count, setCount]}>
      <h1>Title</h1>
      <CounterDisplay />
      <CounterButtons />
    </CounterContext.Provider>
  );
};

export default App;
