import UseState from "./UseState";
import React, { useState, useEffect } from "react";
import "../style/UseEffect.css";

export default function UseEffect() {
  const [input, setInput] = useState("");

  useEffect(() => {}, []);
  return (
    <div className="use-effect">
      <h1>UseEffect Hook</h1>
      <p>
        You’ve likely performed data fetching, subscriptions, or manually
        changing the DOM from React components before. We call these operations
        “side effects” (or “effects” for short) because they can affect other
        components and can’t be done during rendering. The Effect Hook,
        useEffect, adds the ability to perform side effects from a function
        component. It serves the same purpose as componentDidMount,
        componentDidUpdate, and componentWillUnmount in React classes,
      </p>
      <h3>You Typed Text</h3>
      <h4>{input}</h4>
      <input
        onChange={(e) => {
          console.log(e.target.value);
          setInput(e.target.value);
        }}
        placeholder="enter something"
        value={input}
      />
    </div>
  );
}
