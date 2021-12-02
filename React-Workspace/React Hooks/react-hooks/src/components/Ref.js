import React, { useState, useEffect, useRef } from "react";

export default function Ref() {
  const [text, setText] = useState("");

  const renderCount = useRef(0);
  const querySelector = useRef(0);

  let x = 1;
  useEffect(() => {
    renderCount.current += 1;
  });
  const focus = () => {
    console.log(querySelector);
    querySelector.current.focus();
  };
  return (
    <div>
      <h1>UseRef Hook</h1>
      <p>Render Count: {renderCount.current}</p>
      <p>
        useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initialValue). The returned object
        will persist for the full lifetime of the component.
      </p>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        ref={querySelector} // create a link to DOM
        placeholder="search..."
        value={text}
      />
      <br />
      <p>search text: {text}</p>
      <br />
      <button onClick={focus}> focus</button>
    </div>
  );
}
