"use client";
import ArtistAlbum from "@/components/ArtistAlbum";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function Musics() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader
        title={"Musics"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit labore eaque ducimus qui corporis expedita, quis possimus et corrupti."
        }
      />

      <section className="w-full p-2 md:w-5/6 md:mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
      </section>
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
    </>
  );
}

export default Musics;
