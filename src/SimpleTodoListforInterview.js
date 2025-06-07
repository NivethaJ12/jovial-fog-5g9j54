import React, { useState } from "react";

export default function Todointerview() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    setTodo([...todo, task]); // ...todo - copies current array item and in last "task"  -adds the new current task value
    setTask(""); // once added resetting the field to empty
  };

  const handleRemove = (indexToRm) => {
    const updatedTodo = todo.filter((_, index) => index !== indexToRm); // unserscore refers to the item of task getting added that remains same as adding so here put as _
    setTodo(updatedTodo);
    //.filter() creates a new array by including only the items that pass a test.
    // Here, we're saying:
    // "Include every item except the one whose index matches indexToRemove"
    // _ is used for the item itself (we're not using it here, so _ is a convention for unused variable).
    // index is the current item’s index while filtering.
  };
  return (
    <>
      <input
        value={task}
        type="text"
        placeholder="entervalue"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemove(index)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
