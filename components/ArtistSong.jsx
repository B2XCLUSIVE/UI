"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import { FaDownload, FaHamburger, FaPlay } from "react-icons/fa";

function ArtistSong() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${theme}-bgg flex gap-4 items-center justify-between pr-8`}
      >
        <div className={`bg-gray-300 p-4`}>
          <div className="w-[50px] h-[50px] rounded-full">
            <Image
              src={"/alb.jpeg"}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className={`${theme}-text flex gap-4 items-center`}>
          <FaPlay />
          <FaHamburger />
          <h1 className={`${theme}-text font-bold`}>How deep is your love</h1>
        </div>

        <div className="flex gap-4">
          <h1 className={`${theme}-text`}>Artist</h1>
          <h1 className={`${theme}-text`}>Album</h1>
        </div>

        <div className="flex gap-4 md:block hidden">
          <h1 className={`${theme}-text`}>Record Label</h1>
          <h1 className={`${theme}-text`}>Genre</h1>
        </div>

        <div className="flex gap-4 items-center">
          <h1 className={`${theme}-text md:block hidden`}>21/06/2024</h1>
          <FaDownload className={`${theme}-text`} />
        </div>
      </div>
    </>
  );
}

export default ArtistSong;
