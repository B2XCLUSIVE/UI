"use client";
import Image from "next/image";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { FaComment, FaCommentDots, FaEllipsisV, FaEye } from "react-icons/fa";

function PostContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="w-full p-2 flex items-center border border-gray-600 rounded-se rounded-ss">
        <div className="w-6/12 flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full">
            <Image
              src={"/alb.jpeg"}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className={`${theme}-text `}>The Legend of the new Artists</h1>
        </div>
        <div className="w-6/12 flex items-center gap-2">
          <h1 className={`${theme}-text w-1/6 `}>Tech</h1>
          <div className="flex items-center gap-2 w-1/6">
            <FaEye className={`${theme}-text`} />

            <h1 className={`${theme}-text`}>734</h1>
          </div>

          <div className="flex items-center gap-2 w-1/6">
            <FaComment className={`${theme}-text`} />

            <h1 className={`${theme}-text `}>50</h1>
          </div>
          <h1 className={`${theme}-text w-1/6 `}>11/4/2024</h1>
          <h1
            className={`${theme}-text w-1/6 bg-green-500 text-center p-1 rounded-full `}
          >
            Active
          </h1>
          <div className="w-1/6">
            <FaEllipsisV className={`${theme}-text text-center`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;
