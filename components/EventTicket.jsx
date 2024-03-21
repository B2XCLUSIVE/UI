import Image from "next/image";
import Link from "next/link";

function EventTicket() {
  return (
    <>
      <Link
        href={`upcomingevents/1`}
        className="flex gap-6 justify-between hover:bg-gray-900 cursor-pointer"
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
            <h1 className="font-bold text-xl">
              Lorem Ipsum Proin gravida nibh vel velit auctor aliquet
            </h1>

            <div className="flex gap-4">
              <p>Date: 25th July, 2024</p>
              <p>Phone: 1234567890</p>
            </div>

            <p>
              Location: Level 13, 2 Elizabeth St, Melbourne Victoria 3000
              Australia
            </p>
          </div>
        </div>
        <button className="py-4 px-8 bg-primarycolor text-white">
          Buy Ticket
        </button>
      </Link>
    </>
  );
}

export default EventTicket;
