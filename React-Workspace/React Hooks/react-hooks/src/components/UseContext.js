import React, { useContext, createContext } from "react";
import "../style/UseContext.css";
const Theme = {
  dark: {
    foreground: "#eeeeee",
    background: "#222222",
  },
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
};
const ThemeContext = createContext({}); //Need object to create context
export default function UseContext() {
  return (
    <div className="theme-context">
      <ThemeContext.Provider value={Theme.light}>
        <FirstComponent></FirstComponent>
      </ThemeContext.Provider>
    </div>
  );
}

function FirstComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div className="use-context">
      <h1>UseContext Hook</h1>
      <p>
        Accepts a context object (the value returned from React.createContext)
        and returns the current context value for that context. The current
        context value is determined by the value prop of the nearest above the
        calling component in the tree. When the nearest above the component
        updates, this Hook will trigger a rerender with the latest context value
        passed to that MyContext provider. Even if an ancestor uses React.memo
        or shouldComponentUpdate, a rerender will still happen starting at the
        component itself using useContext.
      </p>
      <button
        style={{
          color: theme.foreground,
        }}
      >
        first Component Button
      </button>
    </div>
  );
}
