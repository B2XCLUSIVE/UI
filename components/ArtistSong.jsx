"use client";
import Image from "next/image";
import { FaDownload, FaHamburger, FaPlay } from "react-icons/fa";
import Link from "next/link";
import pld from "@/public/pld.jpeg";
import { useState } from "react";
function ArtistSong({ title, artist, createdAt, audioUrl, duration }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = audioUrl;
    anchor.download = `${title}.mp3`;
    anchor.click();
  };
  return (
    <>
      <div>
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
            <FaPlay
              className="cursor-pointer "
              onClick={() => setShowPlayer(!showPlayer)}
            />
            <h1 className={` font-bold`}>{title}</h1>
          </div>

          <div className="flex gap-4">
            <h1 className={``}>{artist?.name}</h1>
            <h1 className={``}>{duration || "00:00"}</h1>
          </div>

          <div className="flex gap-4 items-center">
            <h1 className={` md:block hidden`}>{createdAt.split("T")[0]}</h1>
          </div>
        </div>
        {showPlayer ? (
          <audio className="bg-white" src={audioUrl} controls />
        ) : (
          ""
        )}{" "}
      </div>{" "}
    </>
  );
}

export default ArtistSong;
