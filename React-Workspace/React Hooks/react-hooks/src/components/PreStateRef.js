import React, { useState, useRef, useEffect } from "react";

export default function PreStateRef() {
  const [text, seText] = useState("");
  const prevName = useRef();
  useEffect(() => {
    prevName.current = text;
    console.log("use-effect", text);
  });
  return (
    <div>
      <h1>Previous State UseRef</h1>
      <input
        placeholder="enter text"
        value={text}
        onChange={(e) => {
          seText(e.target.value);
          console.log("onchange: ", text);
        }}
      />
      <br />
      <p>Current typed: {text}</p>
      <p>Previos typed: {prevName.current}</p>
    </div>
  );
}
