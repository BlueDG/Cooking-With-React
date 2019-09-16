import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("lightblue");
  return (
    <>
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        Counter with a Class
        <Counter initialCount={0} />
        Counter with Hooks
        <CounterHooks initialCount={0} />
        <button
          onClick={() =>
            setTheme(prevTheme => {
              return prevTheme === "lightblue" ? "pink" : "lightblue";
            })
          }
        >
          Toggle Theme
        </button>
      </ThemeContext.Provider>
    </>
  );
}
