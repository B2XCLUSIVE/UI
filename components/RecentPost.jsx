"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

function RecentPost() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${theme}-bgg p-3 md:p-4 flex gap-3 md:gap-4  items-center `}
      >
        <div className="w-[100px] h-[100px]">
          <Image
            src={"/albumcover.jpeg"}
            width={1000}
            height={1000}
            alt="all"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className={`${theme}-text font-bold text-[14px] md:text-xl`}>
            Red Hot chilly peppers ready to slow down
          </h1>
          <p className={`${theme}-text text-[14px]`}>26, July 2018</p>
        </div>
      </div>
    </>
  );
}

export default RecentPost;
