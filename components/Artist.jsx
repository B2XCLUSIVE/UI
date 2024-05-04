import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import pld from "@/public/pld.jpeg";

function Artist({ id, name, image, bio }) {
  return (
    <>
      <Link
        href={`/artists/${id}`}
        className=" h-[170px] md:h-[500px] relative"
      >
        <Image
          src={image ? image?.url : pld}
          width={1000}
          height={1000}
          alt="artist"
          className="w-full h-full object-cover"
        />
        <div className="bg-[#0000009d] flex justify-between items-center p-4 absolute left-0 right-0 bottom-0">
          <div>
            <h1 className="font-bold text-white text-[11px] md:text-2xl">
              {name}
            </h1>
            <p className="text-[11px] text-white">
              {bio.split(" ").slice(0, 6).join(" ")}.....
            </p>
          </div>

          <FaPlus className="text-lg md:block hidden text-white" />
        </div>
      </Link>
    </>
  );
}

export default Artist;
