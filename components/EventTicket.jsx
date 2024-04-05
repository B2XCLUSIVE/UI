"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";

function EventTicket() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Link
        href={`upcomingevents/1`}
        className={` ${theme}-text p-4 md:p-0 md:flex gap-6 justify-between  cursor-pointer`}
      >
        <div className="flex gap-6 items-center">
          <div className="w-[250px] h-[100px] border-r-4 border-primarycolor hidden md:block">
            <Image
              src={"/alb.jpeg"}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 md:py-4 ">
            <h1 className={`font-bold md:text-xl ${theme}-text`}>
              Lorem Ipsum Proin gravida nibh vel velit auctor aliquet
            </h1>

            <div className="flex gap-4">
              <p className={`${theme}-text md:text-base text-[11px]`}>
                Date: 25th July, 2024
              </p>
              <p className={`${theme}-text md:text-base text-[11px]`}>
                Phone: 1234567890
              </p>
            </div>

            <p className={`${theme}-text md:text-base text-[11px]`}>
              Location: Level 13, 2 Elizabeth St, Melbourne Victoria 3000
              Australia
            </p>
          </div>
        </div>
        <div className="md:p-4 px-4">
          <Button title={"Buy Tickey"} />
        </div>
      </Link>
    </>
  );
}

export default EventTicket;
