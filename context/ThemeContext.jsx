"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [showAuth, setShowAuth] = useState(false);

  const authDisplay = () => {
    setShowAuth(!showAuth);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle, showAuth, authDisplay }}>
      {children}
    </ThemeContext.Provider>
  );
};
