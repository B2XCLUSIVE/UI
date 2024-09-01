"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext, useState } from "react";
import { FaDownload, FaHamburger, FaPlay, FaPlus } from "react-icons/fa";
import ArtistSong from "./ArtistSong";
import Link from "next/link";
import pld from "@/public/pld.jpeg";
import axios from "axios";
function ArtistAlbum({
  id,
  title,
  image,
  subTitle,
  audioUrl,
  createdAt,
  publicId,
  artist,
}) {
  const [showPlayer, setShowPlayer] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `https://b2xclusive.onrender.com/api/v1/track/download?type=audio&publicId=${publicId}&id=${id}`,
        {
          responseType: "blob", // Ensure the response is a blob
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", `${title}.mp3`); // You can change the extension based on file type

      document.body.appendChild(link);

      link.click();

      link.parentNode.removeChild(link);
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
                <h1 className="font-bold text-white text-[12px] md:text-[16px]">
                  {title}
                </h1>
                <p className="text-white md:text-bas text-[10px]">
                  {artist.name}
                </p>
                <p className="text-white text-sm">
                  {subTitle?.split(" ").slice(0, 5).join(" ")}
                </p>
              </div>
              <div className="flex gap-3 w-1/6">
                <FaPlay
                  onClick={() => setShowPlayer(!showPlayer)}
                  className="text-lg text-white cursor-pointer md:block "
                />
                <FaDownload
                  onClick={handleDownload}
                  className="text-lg cursor-pointer text-white md:block "
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
