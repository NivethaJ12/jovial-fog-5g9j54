useReducer is a React Hook used for managing complex state logic in functional components. It’s an alternative to useState, especially useful when:
      The state has multiple sub-values.
      The next state depends on the previous one.
      You want to centralize state updates in one place (like a reducer function).
reducer: A function that takes the current state and an action, and returns the new state.
initialState: The initial value of the state.
state: The current state value.
dispatch: A function to send actions to the reducer.

      Syntax
const [state, dispatch] = useReducer(reducer, initialState);

import React, { useReducer } from 'react';

// Step 1: Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Step 2: Create the component
function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counter;
