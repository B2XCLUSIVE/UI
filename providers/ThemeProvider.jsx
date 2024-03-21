"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={theme === "light" ? "bg-gray-950" : "bg-white"}>
        {children}
      </div>
    </>
  );
}

export default ThemeProvider;
