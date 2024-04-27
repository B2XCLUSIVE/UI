"use client";
import Image from "next/image";

import { FaComment, FaCommentDots, FaEllipsisV, FaEye } from "react-icons/fa";

function PostContent({ title, tags, categories, createdAt }) {
  return (
    <>
      <div className="w-full p-2 flex items-center border border-gray-100 rounded-se rounded-ss">
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
          <h1 className={` `}>{title}</h1>
        </div>
        <div className="w-6/12 flex items-center gap-2">
          <h1 className={`w-1/6 `}>Tech</h1>
          <div className="flex items-center gap-2 w-1/6">
            <FaEye className={``} />

            <h1 className={``}>734</h1>
          </div>

          <div className="flex items-center gap-2 w-1/6">
            <FaComment className={``} />

            <h1 className={``}>50</h1>
          </div>

          <h1 className={` w-1/6 `}>{createdAt || "1"}</h1>
          <h1 className={` w-1/6 bg-green-500 text-center p-1 rounded-full `}>
            Active
          </h1>
          <div className="w-1/6">
            <FaEllipsisV className={` text-center`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;
