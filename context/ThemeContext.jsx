"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "dark"
    return localStorage.getItem("theme") || "dark";
  });

  const [user, setUser] = useState(() => {
    // Initialize user from localStorage or default to null
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const [showAuth, setShowAuth] = useState(false);
  const [signin, setSignin] = useState(false);

  const profileOptions = () => {
    setSignin((prevSignin) => !prevSignin);
  };

  const authDisplay = () => {
    setShowAuth((prevShowAuth) => !prevShowAuth);
  };

  useEffect(() => {
    // Store theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,
        showAuth,
        authDisplay,
        user,
        setUser,
        signin,
        profileOptions,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
