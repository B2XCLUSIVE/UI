"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaPlayCircle, FaPlus } from "react-icons/fa";

function Videos({ id, title, artist, subtitle, createdAt }) {
  return (
    <>
      <Link
        href={`/videoshome/${id}`}
        className="md:flex md:items-center <gap-4></gap-4> w-full"
      >
        <div className="w-full  md:w-1/2 h-[300px] md:h-[150px] relative">
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

        <div className=" p-4 w-full md:w-1/2">
          <h1 className={` font-bold text-xl`}>{title}</h1>

          <div className="md:flex">
            <p className={``}>
              {artist?.name} - {createdAt?.split("T")[0]}
            </p>
          </div>

          <p className="text-gray-600">
            {subtitle
              ? subtitle?.split(" ").slice(0, 8).join(" ")
              : "a little about the album goes here"}{" "}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Videos;
