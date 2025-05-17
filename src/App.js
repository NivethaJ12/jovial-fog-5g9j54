import React, { useState } from "react";
import "./styles.css";
import Welcome from "./Welcome";
import TemplateLiterals from "./TemplateLiterals";
import TodoList from "./TodoList";
import ToggleButton from "./ToggleButton";
import ArrayClick from "./ArrayClick";

export default function App() {
  const [state, setState] = useState("");
  const [togState, setTogState] = useState(false);

  const handleChange = () => {
    setState("Hello Text");
  };

  return (
    <div className="App">
      {/* <div>{state}</div>
      <button onClick={() => setTogState(!togState)}>Toggle</button>
      {togState ? <p>this is tog message</p> : <p>this is not tog message</p>}
      <button onClick={handleChange}>Click me!</button>
      <Welcome name="Alice" age="25" />
      <TemplateLiterals /> */}
      {/* <TodoList /> */}
      {/* <ToggleButton /> */}
      <ArrayClick />
    </div>
  );
}
