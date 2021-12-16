import React, { useState } from "react";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Product from "./Components/Products/Product";
import Users from "./Components/Users/Users";
import "./App.css";
import Pagination from "./Components/Pagination/Pagination";
import ContactUs from "./Components/ContactUs/ContactUs";
import Routing from "./Components/Routing/Routing";
import Child from "./Components/hooks/context/Child";

// const name = "React Js";
export const ThemeContext = React.createContext();
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <Header />
      <Routing />
      <h2>Theme - {theme}</h2>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Child />
      </ThemeContext.Provider>
    </div>
  );
};

// };

export default App;
