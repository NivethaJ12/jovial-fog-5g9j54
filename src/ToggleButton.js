import React, { useState } from "react";

const ToggleButton = () => {
  const [state, setState] = useState(false);
  const handleclick = () => {
    setState(!state);
  };
  return (
    <div style={{ marginTop: "70px", textAlign: "left" }}>
      <div style={{ marginBottom: "20px", height: "10px" }}>
        {state ? <p>toggle</p> : ""}
      </div>
      <button onClick={handleclick}>Toggle Click!</button>
    </div>
  );
};
export default ToggleButton;
