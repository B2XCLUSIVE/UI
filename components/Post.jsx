"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

function Post() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="border flex justify-between border-gray-100  p-2">
        <div className="flex gap-2 items-center">
          <div className="w-[40px] h-[40px] rounded-full">
            <Image
              src={"/alb.jpeg"}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h1 className={`${theme}-text md:text-base text-[12px] `}>
              This ia blog.....
            </h1>
            <p className="text-green-500 md:text-base text-[11px] ">tag</p>
          </div>
        </div>

        <div className="flex gap-4">
          <h1 className={`${theme}-text md:text-base text-[12px] `}>100k</h1>
          <h1 className={`${theme}-text md:text-base text-[12px]`}>
            2 days ago
          </h1>
        </div>
      </div>
    </>
  );
}

export default Post;
