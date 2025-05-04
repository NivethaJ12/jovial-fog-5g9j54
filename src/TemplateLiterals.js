import React, { useState } from "react";

export default function TemplateLiterals() {
  const count = 5;
  const [inpp, setInppp] = useState("");

  function getMessage(count) {
    return `The current count is: ${count}`;
  }

  return (
    <>
      <p>{`this is count: ${count}`}</p>
      <div>{getMessage(count)}</div>
      <form>
        <input value={inpp} onChange={(e) => setInppp(e.target.value)} />
      </form>
    </>
  );
}
