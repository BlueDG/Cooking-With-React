import React, { useState, useContext } from "react";
import { Theme } from "./App";
export default function CounterHooks({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const color = useContext(Theme);
  return (
    <div>
      <button
        style={color}
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        +
      </button>
      <span>{count}</span>
      <button
        style={color}
        onClick={() => setCount(prevCount => prevCount - 1)}
      >
        -
      </button>
    </div>
  );
}
