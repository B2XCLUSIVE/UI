"use client";
import Image from "next/image";
import Button from "./Button";
import pld from "@/public/pld.jpeg";
import Link from "next/link";
function Event({ id, title, image, location, date }) {
  return (
    <>
      <div className={` flex justify-between`}>
        <div className="h-[100px] w-3/12 hidden md:block">
          <Image
            src={image[0].url || pld}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className=" flex  w-full justify-between md:w-9/12 p-4 items-center">
          <div className="">
            <h1 className={` font-bold text-[14px]`}>{title}</h1>
            <p className={` text-[14px]`}>{location}</p>
          </div>

          <div className="hidden md:block">
            <h1 className="font-bold">{date.split("T")[0]}</h1>
          </div>
          <Link
            href={`/upcomingevents/${id}`}
            className="text-[14px] px-3 py-2 rounded-lg md:py-4 md:px-8 bg-primarycolor text-white"
          >
            Buy Ticket
          </Link>
        </div>
      </div>
    </>
  );
}

export default Event;
