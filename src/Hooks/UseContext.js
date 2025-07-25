Definition: 
- useContext is a React Hook that allows you to access context values directly in a functional component, without needing to use a <Consumer> wrapper.
- It’s used for sharing global data (like themes, user info, language settings, etc.) across components without passing props manually at every level.
- MyContext is the context object created using React.createContext().
- value is the current context value.

**Use useContext when:
- You want to avoid prop drilling (passing props through many layers).
- You need to share global state like:
- Auth status
- Theme settings
- Language preferences
- User data

  SYNTAX:  const value = useContext(MyContext);

THEME CONTEXT

import React, { useContext } from 'react';

// Step 1: Create a context
const ThemeContext = React.createContext('light');

// Step 2: Create a component that uses the context
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? '#333' : '#eee' }}>Theme: {theme}</button>;
}

// Step 3: Provide the context value in a parent component
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

export default App;
