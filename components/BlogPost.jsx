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
      <Link href={"blogs/1"} className={`${theme}-bgg`}>
        <div className="w-full h-[150px] md:h-[300px]">
          <Image
            src={"/alb.jpeg"}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex flex-col gap-4">
          <h1 className={`${theme}-text text-sm md:text-xl font-bold`}>
            Rock &apos;n Roll Really Is The
          </h1>
          <p className={`${theme}-text text-[10px] md:text-base`}>
            This is Photoshop&apos;s version of Lorem Ipsum.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <Link
              href={"/blogs/1"}
              className="text-primarycolor text-[10px] md:text-base"
            >
              Read More
            </Link>

            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full">
                <Image
                  src={"/alb.jpeg"}
                  width={1000}
                  height={1000}
                  alt="alb"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className={`${theme}-text text-[10px]`}>
                <p className={`${theme}-text font-bold  md:text-base `}>
                  Ethern Carris
                </p>
                <p className={`${theme}-text`}>Author</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogPost;
