"use client";

import ArtistSong from "@/components/ArtistSong";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import {
  FaDownload,
  FaHamburger,
  FaPlay,
  FaPlus,
  FaRegPlayCircle,
} from "react-icons/fa";
import axios from "axios";
import pld from "@/public/pld.jpeg";

function ArtistMusics({ params }) {
  const { artistId } = params;

  const { theme } = useContext(ThemeContext);
  const [artist, setArtist] = useState("");
  const fetchdata = async () => {
    const response = await axios.get(
      `https://b2xclusive.onrender.com/api/v1/artist/${artistId}`,
    );

    setArtist(response?.data?.data);
    console.log(artist);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <SectionHeader title={artist.name} desc={artist.bio} />

      <section className={` ${theme}-text p-4 w-full md:w-5/6 md:mx-auto `}>
        <div className="h-[300px] relative">
          <Image
            src={artist ? artist?.image?.url : pld}
            width={1000}
            height={1000}
            alt="artist"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#0000009d] flex justify-between items-center p-4 absolute left-0 right-0 bottom-0">
            <div>
              <h1 className="font-bold text-2xl text-white">{artist.name}</h1>
              <p className="text-white">
                {artist?.bio?.split(" ").slice(0, 12).join(" ")}
              </p>
            </div>

            <FaPlus className="text-lg text-white" />
          </div>
        </div>
      </section>

      <section
        className={` p-2 w-full md:w-5/6 md:mx-auto flex flex-col gap-4 `}
      >
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <ArtistSong />
        <section
          className={`p-4 md:p-8 mx-auto gap-2 flex justify-center ${theme}-text `}
        >
          <div className={`border  p-2 `}>
            <p className={`${theme}-text`}>PREV</p>
          </div>

          <div className="border  p-2 ">
            <p className={`${theme}-text`}>1</p>
          </div>

          <div className="border  p-2 ">
            <p className={`${theme}-text`}>2</p>
          </div>

          <div className="border  p-2 ">
            <p className={`${theme}-text`}>3</p>
          </div>

          <div className="border  p-2 ">
            <p className={`${theme}-text`}>4</p>
          </div>

          <div className="border  p-2 ">
            <p className={`${theme}-text`}>...</p>
          </div>

          <div className="border  p-2 ">
            <p className={`${theme}-text`}>NEXT</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default ArtistMusics;
