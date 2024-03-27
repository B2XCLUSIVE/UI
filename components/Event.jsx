"use client";
import Image from "next/image";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function Event() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${theme}-bgg  flex justify-between`}>
        <div className="h-[100px] w-3/12 hidden md:block">
          <Image
            src={"/alb.jpeg"}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" flex  w-full justify-between md:w-9/12 p-4 items-center">
          <div className="">
            <h1 className={`${theme}-text font-bold text-[14px]`}>
              Summer Music Festival
            </h1>
            <p className={`${theme}-text text-[14px]`}>LeGaga Romania</p>
          </div>

          <div className="hidden md:block">
            <h1 className="font-bold">26 August</h1>
            <p>6:45pm</p>
          </div>

          <Button title={"Buy Ticket"} />
        </div>
      </div>
    </>
  );
}

export default Event;
