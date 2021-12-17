import React, { useContext } from "react";
import { ThemeContext } from "../../../App";
// ThemeContext

function GrandChild() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  //   console.log(data);
  return (
    <div>
      <h2>Grand Child-{theme}</h2>
      <button
        className="btn btn-info"
        onClick={() => {
          toggleTheme();
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default GrandChild;
