"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      // Initialize theme from localStorage or default to "dark"
      return localStorage.getItem("theme") || "dark";
    }
  });

  const [user, setUser] = useState(() => {
    // Initialize user from localStorage or default to null
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("b2exclusiveuser");
      return storedUser ? JSON.parse(storedUser) : null;
    }
  });

  const [adminUser, setadminUser] = useState(() => {
    // Initialize user from localStorage or default to null
    if (typeof window !== "undefined") {
      const storedadminUser = localStorage.getItem("b2exclusiveadmin");
      return storedadminUser ? JSON.parse(storedadminUser) : null;
    }
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
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    // Store user in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("b2exclusiveuser", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    // Store user in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("b2exclusiveuadmin", JSON.stringify(adminUser));
    }
  }, [adminUser]);

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
        adminUser,
        setadminUser,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
