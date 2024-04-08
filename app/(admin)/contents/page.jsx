"use client";

import PostContent from "@/components/PostContent";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function Contents() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <section className="w-10/12">
        <h1 className={`${theme}-text my-4`}>Contents (4 of 4 records)</h1>
        <div className="w-full p-2 flex border border-gray-100 rounded-se rounded-ss">
          <div className="w-6/12">
            <h1 className={`${theme}-text font-bold`}>Posts</h1>
          </div>
          <div className="w-6/12 flex gap-2">
            <h1 className={`${theme}-text w-1/6 font-bold`}>Category</h1>
            <h1 className={`${theme}-text w-1/6 font-bold`}>Views</h1>
            <h1 className={`${theme}-text w-1/6 font-bold`}>Comments</h1>
            <h1 className={`${theme}-text w-1/6 font-bold`}>Post Date</h1>
            <h1 className={`${theme}-text w-1/6 font-bold`}>Status</h1>
            <h1 className={`${theme}-text w-1/6 font-bold`}>Action</h1>
          </div>
        </div>
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
      </section>
    </>
  );
}

export default Contents;
