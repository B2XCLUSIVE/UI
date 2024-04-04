"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import { FaDownload, FaHamburger, FaPlay, FaPlus } from "react-icons/fa";
import ArtistSong from "./ArtistSong";
import Link from "next/link";

function ArtistAlbum() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Link href={"artists/1"} className="flex flex-col gap-4">
        <section className={`${theme}-textw-full`}>
          <div className="h-[300px] relative ">
            <Image
              src={"/albumcover.jpeg"}
              width={1000}
              height={1000}
              alt="artist"
              className="w-full h-full object-cover"
            />
            <div className="bg-[#0000009d] flex justify-between items-center p-4 absolute left-0 right-0 bottom-0">
              <div>
                <h1 className="font-bold text-[14px] md:text-2xl">
                  Behind the Scenes
                </h1>
                <p>Nourmony Ermond Tempour</p>
              </div>

              <FaPlus className="text-lg text-white md:block hidden" />
            </div>
          </div>
        </section>

        <div
          className={`${theme}-bgg p-4 flex gap-4 items-center justify-between pr-8`}
        >
          <div className={`bg-gray-300 p-4 md:block hidden`}>
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
            <FaPlay className="md:block hidden" />
            <FaHamburger className="md:block hidden" />
            <h1 className={`${theme}-text font-bold`}>How deep is your love</h1>
          </div>

          <div className="flex gap-4 items-center">
            <FaDownload className={`${theme}-text`} />
          </div>
        </div>

        <div
          className={`${theme}-bgg flex p-4 gap-4 items-center justify-between pr-8`}
        >
          <div className={`bg-gray-300 p-4 md:block hidden`}>
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
            <FaPlay className="md:block hidden" />
            <FaHamburger className="md:block hidden" />
            <h1 className={`${theme}-text font-bold`}>How deep is your love</h1>
          </div>

          <div className="flex gap-4 items-center">
            <FaDownload className={`${theme}-text`} />
          </div>
        </div>

        <div
          className={`${theme}-bgg flex gap-4 items-center p-4 justify-between pr-8`}
        >
          <div className={`bg-gray-300 p-4 md:block hidden`}>
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
            <FaPlay className="md:block hidden" />
            <FaHamburger className="md:block hidden" />
            <h1 className={`${theme}-text font-bold`}>How deep is your love</h1>
          </div>

          <div className="flex gap-4 items-center">
            <FaDownload className={`${theme}-text`} />
          </div>
        </div>

        <div
          className={`${theme}-bgg p-4 flex gap-4 items-center justify-between pr-8`}
        >
          <div className={`bg-gray-300 md:block hidden p-4`}>
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
            <FaPlay className="md:block hidden" />
            <FaHamburger className="md:block hidden" />
            <h1 className={`${theme}-text font-bold`}>How deep is your love</h1>
          </div>

          <div className="flex gap-4 items-center">
            <FaDownload className={`${theme}-text`} />
          </div>
        </div>
      </Link>
    </>
  );
}

export default ArtistAlbum;
