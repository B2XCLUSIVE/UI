"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

function Post({ image, title, subtitle, createdAt }) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="border flex justify-between border-gray-100  p-2">
        <div className="flex gap-2 items-center">
          <div className="w-[40px] h-[40px] rounded-full">
            <Image
              src={image[0]?.url}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div>
            <h1 className={`${theme}-text md:text-base text-[12px] `}>
              {title?.split(" ").slice(0, 5).join(" ")}
            </h1>
            <p className="text-green-500 md:text-base text-[11px] ">
              {subtitle?.split(" ").slice(0, 7).join(" ")}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <h1 className={`${theme}-text md:text-base text-[12px] `}>100k</h1>
          <h1 className={`${theme}-text md:text-base text-[12px]`}>
            {createdAt?.split("T")[0]}
          </h1>
        </div>
      </div>
    </>
  );
}

export default Post;
