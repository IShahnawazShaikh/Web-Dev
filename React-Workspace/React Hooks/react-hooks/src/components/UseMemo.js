import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [num, setNum] = useState(1);
  const [isTrue, setIsTrue] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);
  //value of fibnonnci is memoized and will not call until dependency is not changed, when click to change
  //color it will se previous is already calculate so it will not calculate again

  return (
    <div>
      <h1>UseMemo Hook</h1>
      <p>
        Returns a memoized value. Pass a “create” function and an array of
        dependencies. useMemo will only recompute the memoized value when one of
        the dependencies has changed. This optimization helps to avoid expensive
        calculations on every render.
      </p>
      <h3
        style={{ color: isTrue ? "white" : "green" }}
        onClick={() => {
          setIsTrue(!isTrue);
        }}
      >
        Click : It will Re-render
      </h3>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
      <p>{`Fibonacci of ${num} is ${fib}`}</p>
    </div>
  );
}

const fibonacci = (n) => {
  console.log("fib", n);
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
