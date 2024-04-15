"use client";
import ArtistAlbum from "@/components/ArtistAlbum";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";

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

      <section className="w-full md:w-5/6 mx-auto p-4">
        <div className="flex gap-4 w-full">
          <div className="md:w-4/6 rounded-full flex items-center z-10 border">
            <input
              type="text"
              placeholder="Search here"
              className={` ${theme}-text w-11/12 bg-transparent p-4 text-white outline-none `}
            />
            <button className="rounded-full bg-primarycolor flex items-center md:text-base text-[12px] py-2 gap-1 px-4 mr-2">
              <FaSearch /> Search
            </button>
          </div>

          <div className="w-2/6 p-4 bg-transparent outline-none border rounded-lg">
            <select
              name=""
              id=""
              className="w-full bg-transparent outline-none"
            >
              <option value="">Filter</option>
              <option value="">Realesed Date</option>
              <option value="">Artist</option>
            </select>
          </div>
        </div>
      </section>
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
