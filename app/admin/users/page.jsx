"use client";

import Followers from "@/components/Followers";
import PostContent from "@/components/PostContent";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function FollowersDashboard() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="md:w-10/12 p-4">
        <h1 className={`${theme}-text my-4`}>Followers (4 of 4 records)</h1>
        <div className="border flex justify-between border-gray-100 rounded-ss rounded-se p-4">
          <h1 className={`${theme}-text font-bold`}>Followers</h1>
          <p className={`${theme}-text font-bold`}>Date</p>
        </div>

        <Followers />
        <Followers />
        <Followers />
        <Followers />
        <Followers />
        <Followers />
      </section>
    </>
  );
}

export default FollowersDashboard;
