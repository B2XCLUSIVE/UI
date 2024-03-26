"use client";

import ArtistSong from "@/components/ArtistSong";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import {
  FaDownload,
  FaHamburger,
  FaPlay,
  FaPlus,
  FaRegPlayCircle,
} from "react-icons/fa";

function ArtistMusics() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader
        title={"Dwayne Johnson's musics"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aliquid reprehenderit fugiat officiis, eaque dolorem voluptatum beatae, necessitatibus est voluptas nemo impedit ut quam eligendi cumque in placeat dolores laudantium!"
        }
      />

      <section className={` ${theme}-text p-4 w-full md:w-5/6 md:mx-auto `}>
        <div className="h-[300px] relative">
          <Image
            src={"/albumcover.jpeg"}
            width={1000}
            height={1000}
            alt="artist"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#0000009d] flex justify-between items-center p-4 absolute left-0 right-0 bottom-0">
            <div>
              <h1 className="font-bold text-2xl">Behind the Scenes</h1>
              <p>Nourmony Ermond Tempour</p>
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
        <section className=" p-8 mx-auto gap-2 flex justify-center ">
          <div className="border  p-2 ">
            <p>PREV</p>
          </div>

          <div className="border  p-2 ">
            <p>1</p>
          </div>

          <div className="border  p-2 ">
            <p>2</p>
          </div>

          <div className="border  p-2 ">
            <p>3</p>
          </div>

          <div className="border  p-2 ">
            <p>4</p>
          </div>

          <div className="border  p-2 ">
            <p>...</p>
          </div>

          <div className="border  p-2 ">
            <p>NEXT</p>
          </div>
        </section>
      </section>
    </>
  );
}

export default ArtistMusics;
