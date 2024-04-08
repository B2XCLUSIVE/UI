"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";

function BlogPost() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Link href={"blogs/1"} className={` flex`}>
        <div className="p-4 flex flex-col gap-2 w-2/3">
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
            <p className={`${theme}-text`}>George Washnington</p>
            <p className={`text-primarycolor font-bold`}>Follow</p>
          </div>
          <h1 className={`${theme}-text text-sm md:text-xl font-bold`}>
            Rock &apos;n Roll Really Is The
          </h1>
          <p className={`${theme}-text text-[10px] md:text-base`}>
            This is Photoshop&apos;s version of Lorem Ipsum.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <p className={`${theme}-text`}>March 6 2024</p>
            <p className={`${theme}-text`}>6 Mins read</p>

            <p className="text-white py-1 font-bold text-[10px]  px-3 bg-green-500 rounded-full">
              Trending
            </p>
            <Link
              href={"/blogs/1"}
              className="text-primarycolor text-[10px] md:text-base"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="w-1/3 h-[150px] md:h-[150px]">
          <Image
            src={"/alb.jpeg"}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </Link>
    </>
  );
}

export default BlogPost;
