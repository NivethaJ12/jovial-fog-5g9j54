import React, { useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleAdd = () => {
    // setTask((prev) => [...prev, input]);
    if (input.trim() === "") return;
    setTask([...task, { text: input, completed: false }]);
    setInput("");
  };
  const handleDelete = (indexToDelete) => {
    setTask(task.filter((_, index) => index !== indexToDelete));
    // setTask((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };
  const toggleComplete = (indexToToggle) => {
    const updatedTasks = task.map((t, index) =>
      index === indexToToggle ? { ...t, completed: !t.completed } : t
    );
    setTask(updatedTasks);
  };

  return (
    <>
      <h2>📝Today's Pras List </h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
        style={{ padding: "4px 0", marginRight: "5px" }}
      />
      <button onClick={handleAdd}>Add</button>
      <div
        style={{
          border: "2px solid #ccc",
          borderRadius: "8px",
          marginTop: "20px",
          marginbotton: "20px",
        }}
      >
        <ol>
          {task.map((t, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                borderBottom: "1px solid #ddd",
                marginBottom: "5px",
              }}
            >
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleComplete(index)}
                style={{ marginRight: "10px" }}
              />
              <span
                style={{
                  textDecoration: t.completed ? "line-through" : "none",
                }}
              >
                {index + 1}. {t.text}
              </span>

              <button
                onClick={() => handleDelete(index)}
                style={{
                  marginLeft: "10px",
                  marginBottom: "5px",
                  marginRight: "100px",
                  right: "-70px",
                  position: "absolute",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Del
              </button>
            </li>
          ))}
        </ol>
        <div style={{ color: "#777" }}>
          {task.length === 0 ? "No task added yet" : ""}{" "}
        </div>
      </div>
    </>
  );
}
