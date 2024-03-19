import Artist from "@/components/Artist";
import Image from "next/image";
import { FaBackward, FaForward, FaPlus } from "react-icons/fa";

function Artists() {
  return (
    <>
      <section className="bg-primarycolor p-32 flex flex-col items-center">
        <h1 className="font-bold text-6xl">Artists Blogs</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem
          cum repudiandae praesentium. Molestias, voluptatum eaque debitis culpa
          exercitationem rerum?
        </p>
      </section>

      <section className="w-full md:w-5/6 mx-auto py-10">
        <div>
          <h1 className="text-4xl font-bold">
            Find the most recent music release
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            consequatur.
          </p>
        </div>
      </section>
      <section className="bg-gray-900 md:w-5/6 p-8 mx-auto md:grid md:grid-cols-4 gap-8">
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
      </section>

      <div className="flex items-center p-8 justify-between mb-10 w-full md:w-5/6 mx-auto">
        <div className="w-3/4 h-[3px] bg-primarycolor"></div>
        <div className="flex gap-4">
          <FaBackward className="border w-12 h-12 p-2 text-white" />
          <FaForward className="border w-12 h-12 p-2 text-white" />
        </div>
      </div>
    </>
  );
}

export default Artists;
