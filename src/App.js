import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
export const Theme = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("lightblue");
  return (
    <>
      <Theme.Provider value={{ backgroundColor: theme }}>
        <Counter initialValue={0} />
        <CounterHooks initialValue={0} />
        <button
          onClick={() =>
            setTheme(prevTheme => {
              return prevTheme === "lightblue" ? "red" : "lightblue";
            })
          }
        >
          Change button color
        </button>
      </Theme.Provider>
    </>
  );
}
