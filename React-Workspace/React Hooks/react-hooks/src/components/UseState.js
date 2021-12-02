import React, { useState } from "react";
import "../style/UseState.css";

export default function UseState() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="use-state">
      <h1>UseState Hook</h1>
      <p>
        Use State allow you to add react state to function component. React will
        preserve this state between re-render.
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click: {`value changed: ${counter}`}
      </button>
    </div>
  );
}
