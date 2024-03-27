"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const getFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const value = localStorage.getItem("theme") || "light";
    return value; // Return the retrieved value from local storage or fallback to "light"
  } else {
    return "light"; // Fallback in case localStorage is not available
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [showAuth, setShowAuth] = useState(false);

  const authDisplay = () => {
    setShowAuth(!showAuth);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle, showAuth, authDisplay }}>
      {children}
    </ThemeContext.Provider>
  );
};
