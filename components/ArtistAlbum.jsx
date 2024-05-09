"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { FaDownload, FaHamburger, FaPlay, FaPlus } from "react-icons/fa";
import ArtistSong from "./ArtistSong";
import Link from "next/link";
import pld from "@/public/pld.jpeg";
function ArtistAlbum({
  id,
  title,
  image,
  subTitle,
  audioUrl,
  createdAt,
  artist,
}) {
  const [showPlayer, setShowPlayer] = useState(false);
  const handleDownload = async () => {
    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${title}.mp3`;
      anchor.click();

      // Clean up by revoking the URL object
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download audio:", error);
      // Handle error
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <section className={``}>
          <div className="h-[300px] relative ">
            <Image
              src={image?.url || pld}
              width={1000}
              height={1000}
              alt="artist"
              className="w-full h-full object-cover"
            />
            <div className="bg-[#0000009d] flex justify-between items-center p-4 absolute left-0 right-0 bottom-0">
              <div>
                <h1 className="font-bold text-white text-[10px] md:text-[16px]">
                  {title}
                </h1>
                <p className="text-white">{artist.name}</p>
                <p className="text-white text-sm">
                  {subTitle?.split(" ").slice(0, 5).join(" ")}
                </p>
              </div>
              <div className="flex gap-3 w-1/6">
                <FaPlay
                  onClick={() => setShowPlayer(!showPlayer)}
                  className="text-lg text-white cursor-pointer md:block hidden"
                />
                <FaDownload
                  onClick={handleDownload}
                  className="text-lg cursor-pointer text-white md:block hidden"
                />
              </div>
            </div>
          </div>
        </section>
        {showPlayer ? (
          <audio className="bg-white" src={audioUrl} controls />
        ) : (
          ""
        )}{" "}
      </div>
    </>
  );
}

export default ArtistAlbum;
