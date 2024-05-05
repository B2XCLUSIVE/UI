"use client";
import Image from "next/image";
import { FaDownload, FaHamburger, FaPlay } from "react-icons/fa";
import Link from "next/link";
import pld from "@/public/pld.jpeg";
function ArtistSong({ title, artist, createdAt, audioUrl }) {
  return (
    <>
      <div className={` flex gap-4 items-center p-4 justify-between pr-8`}>
        <div className={`bg-gray-300 md:block hidden p-4`}>
          <div className="w-[50px] h-[50px] rounded-full">
            <Image
              src={artist?.image?.url || pld}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className={` flex gap-4 items-center`}>
          <h1 className={` font-bold`}>{title}</h1>
        </div>

        <div className="flex gap-4">
          <h1 className={``}>{artist?.name}</h1>
        </div>

        <div className="flex gap-4 items-center">
          <h1 className={` md:block hidden`}>{createdAt.split("T")[0]}</h1>
          <Link href={audioUrl}>
            <FaDownload className={``} />
          </Link>{" "}
        </div>
      </div>
    </>
  );
}

export default ArtistSong;
