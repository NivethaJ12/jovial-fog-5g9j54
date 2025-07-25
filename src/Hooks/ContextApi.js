Definition:   
  The Context API is a feature in React that allows you to share data globally across components without passing props manually through every level of the component tree (known as prop drilling).
    - It is ideal for managing global state like:
    - Theme (light/dark)
    - User authentication
    - Language settings
    - Application-wide counters or settings



##Steps to Implement a Counter with Context API
- Create a Context
- Create a Provider Component
- Use useState or useReducer to manage the counter
- Consume the context in child components
🧾 Example: Counter with Context API and useState
1. Create the Context
// CounterContext.js
import React from 'react';

const CounterContext = React.createContext();

export default CounterContext;


2. Create the Provider
// CounterProvider.js
import React, { useState } from 'react';
import CounterContext from './CounterContext';

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;

3. Use the Context in a Component

// CounterDisplay.js
import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterDisplay() {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterDisplay;

4. Wrap Your App with the Provider

// App.js
import React from 'react';
import CounterProvider from './CounterProvider';
import CounterDisplay from './CounterDisplay';

function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
}

export default App;

