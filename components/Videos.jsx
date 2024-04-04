"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaPlay, FaPlayCircle, FaPlus } from "react-icons/fa";

function Videos() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Link href={`/videoshome/1`} className="md:flex w-full">
        <div className="w-full  md:w-1/2 h-[300px] relative">
          <Image
            src={"/alb.jpeg"}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#00000084] absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
            <FaPlayCircle className="text-white text-3xl" />
          </div>
        </div>

        <div className="md:p-8 p-4 w-full md:w-1/2">
          <h1 className={`${theme}-text font-bold text-xl`}>
            All The Red Carpet Looks
          </h1>

          <div className="md:flex">
            <p className={`${theme}-text`}>Arditta Colle -25 July, 2017</p>
            <p className={`${theme}-text`}>4 Comments</p>
          </div>

          <p className="text-gray-600">
            Sed cursus eget risus non vestibulum. Sed in molestie elit, vitae
            condimentum justo....
          </p>
        </div>
      </Link>
    </>
  );
}

export default Videos;
