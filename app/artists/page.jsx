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

      <section className="md:w-5/6 p-8 mx-auto gap-2 flex justify-center ">
        <div className="border  p-2 ">
          <p>PREV</p>
        </div>

        <div className="border  p-2 ">
          <p>1</p>
        </div>

        <div className="border  p-2 ">
          <p>2</p>
        </div>

        <div className="border  p-2 ">
          <p>3</p>
        </div>

        <div className="border  p-2 ">
          <p>4</p>
        </div>

        <div className="border  p-2 ">
          <p>...</p>
        </div>

        <div className="border  p-2 ">
          <p>NEXT</p>
        </div>
      </section>
    </>
  );
}

export default Artists;
