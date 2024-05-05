"use client";
import Image from "next/image";

import pld from "@/public/pld.jpeg";
import Link from "next/link";

function BlogPost({ id, title, subtitle, image, updatedAt, author }) {
  const imageUrl = image && image.length > 0 ? image[0]?.url : pld;

  return (
    <>
      <div className={` flex `}>
        <div className="p-4 flex flex-col gap-2 md:w-2/3 w-full">
          <div className="flex gap-2 items-center">
            <div className="w-[20px] h-[20px]">
              <Image
                src={"/alb.jpeg"}
                width={1000}
                height={1000}
                alt="jpe"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className={` md:text-base text-[11px]`}>{author.userName}</p>
            <p
              className={`text-primarycolor font-bold md:text-base text-[11px]`}
            >
              Follow
            </p>
          </div>
          <h1 className={` text-sm md:text-xl font-bold`}>{title}</h1>
          <p className={`text-[10px] md:text-base`}>{subtitle}</p>
          <div className="flex  items-center md:gap-4 gap-2">
            <p className={` md:text-base text-[11px]`}>
              {updatedAt?.split("T")[0]}
            </p>
            <p className={` md:text-base text-[11px]`}>6 Mins read</p>

            <p className="text-white py-1 font-bold text-[10px]  px-3 bg-green-500 rounded-full">
              Trending
            </p>
            <Link
              href={`blogs/${id}`}
              className="text-primarycolor text-[10px] md:text-base"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-1/3 h-[150px] md:h-[150px]">
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default BlogPost;
