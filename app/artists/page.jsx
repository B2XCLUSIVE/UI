"use client";
import Artist from "@/components/Artist";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import { FaBackward, FaForward, FaPlus } from "react-icons/fa";

function Artists() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader title={"Artists Blogs"} desc={"hsyhhs"} />

      <section className="w-full md:w-5/6 mx-auto py-10 px-8">
        <div>
          <h1
            className={`${theme}-text md:text-left text-center text-4xl font-bold`}
          >
            Find the most recent music release
          </h1>
          <p className={`${theme}-text`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            consequatur.
          </p>
        </div>
      </section>
      <section
        className={`${theme}-bgg md:w-5/6 p-8 mx-auto  grid grid-cols-2 md:grid-cols-4 gap-8`}
      >
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
      </section>

      <section className="md:w-5/6 p-8 mx-auto gap-2 flex justify-center ">
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
    </>
  );
}

export default Artists;
