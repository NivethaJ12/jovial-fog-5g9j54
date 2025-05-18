import React, { useState } from "react";
import "./styles.css";
import Welcome from "./Welcome";
import TemplateLiterals from "./TemplateLiterals";
import TodoList from "./TodoList";
import ToggleButton from "./ToggleButton";
import ArrayClick from "./ArrayClick";
import Counter from "./Counter";
import Palindrm from "./Palindrm";
import ReverseAString from "./JavascriptCod/ReverseAString";
import LargestNUM from "./JavascriptCod/LargestNUM";
import OccuranceString from "./JavascriptCod/OccuranceString"
import IsAnagram from "./JavascriptCod/IsAnagram";

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
      {/* <ArrayClick /> */}
      {/* <Counter /> */}
      {/* <Palindrm /> */}
      {/* <ReverseAString /> */}
      {/* <OccuranceString /> */}
      {/* <LargestNUM /> */}
      <IsAnagram />
    </div>
  );
}
