"use client";
import Image from "next/image";
import pld from "@/public/pld.jpeg";
function RecentPost({ id, title, image, updatedAt }) {
  const imageUrl = image && image.length > 0 ? image[0]?.url : pld;

  return (
    <>
      <div className={` p-3 md:p-4 flex gap-3 md:gap-4  items-center `}>
        <div className="w-1/2 rounded-lg h-[100px]">
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt="all"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        <div className="flex flex-col items-start">
          <p className="text-white py-1 font-bold text-[10px]  px-3 bg-blue-500 rounded-full">
            Trending
          </p>
          <h1 className={` font-bold text-[14px] md:text-xl`}>{title}</h1>
          <p className={` text-[14px]`}>{updatedAt?.split("T")[0]}</p>
        </div>
      </div>
    </>
  );
}

export default RecentPost;
