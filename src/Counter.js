import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClickDec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClickDec}>Decrement</button>
    </>
  );
};

export default Counter;
