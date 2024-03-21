import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaPlayCircle, FaPlus } from "react-icons/fa";

function Videos() {
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

        <div className="p-8 w-full md:w-1/2">
          <h1 className="font-bold text-xl">
            All The Red Carpet Looks From The 2017 Music Awards
          </h1>

          <div className="flex">
            <p>Arditta Colle -25 July, 2017</p>
            <p>4 Comments</p>
          </div>

          <p className="text-gray-600">
            Sed cursus eget risus non vestibulum. Sed in molestie elit, vitae
            condimentum justo. Aenean vulputate leo metus, sed imperdiet lorem
            fermentum et metus, sed imperdiet .
          </p>
        </div>
      </Link>
    </>
  );
}

export default Videos;
