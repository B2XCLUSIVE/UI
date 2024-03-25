"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function CategoriesHeading({ title }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`p-4 bg-gray-900 mt-4 rounded-lg ${theme}-bgg `}>
        <h1 className={`font-bold ${theme}-text`}>{title}</h1>
      </div>
    </>
  );
}

export default CategoriesHeading;
