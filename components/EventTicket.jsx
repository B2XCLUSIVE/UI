"use client";
import Image from "next/image";
import Link from "next/link";
import pld from "@/public/pld.jpeg";
function EventTicket({ id, title, image, location, date }) {
  return (
    <>
      <Link
        href={`upcomingevents/${id}`}
        className={`  p-4 md:p-0 md:flex gap-6 justify-between  cursor-pointer`}
      >
        <div className="flex gap-6 items-center">
          <div className="w-[250px] h-[100px] border-r-4 border-primarycolor hidden md:block">
            <Image
              src={image.length > 0 ? image[0]?.url : pld}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="p-4 md:py-4 ">
            <h1 className={`font-bold md:text-xl `}>{title}</h1>

            <div className="flex gap-4">
              <p className={` md:text-base text-[11px]`}>
                Date: {date.split("T")[0]}
              </p>
            </div>

            <p
              className={` md:text-base text-[11px] text-primarycolor font-bold`}
            >
              Location: {location}
            </p>
          </div>
        </div>
        <div className="md:p-4 px-4">
          <Link
            href={`/upcomingevents/${id}`}
            className="text-[14px] px-3 py-2 rounded-lg md:py-4 md:px-8 bg-primarycolor text-white"
          >
            Buy Ticket
          </Link>
        </div>
      </Link>
    </>
  );
}

export default EventTicket;
