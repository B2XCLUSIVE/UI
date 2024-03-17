import Image from "next/image";
import Link from "next/link";
import { FaBook } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className="herosection">
        <p>The B2EXCLUSIVE Blog</p>
        <h1 className="text-4xl font-extrabold text-center">
          Stories, Thoughts <br /> Ideas and More
        </h1>

        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, non
          optio. Ipsa culpa quibusdam necessitatibus!
        </p>

        <div className="flex gap-4">
          <Link
            className="py-1 px-4 rounded-full border border-white"
            href={"#"}
          >
            Continue
          </Link>
          <Link
            className="py-1 px-4 rounded-full border border-white"
            href={"#"}
          >
            Explore
          </Link>
        </div>
      </section>

      <section className="md:w-[90%] mx-auto md:flex gap-4 p-4">
        <div className="w-full h-48 relative">
          <Image
            src={"/pod.jpeg"}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="music"
          />

          <div className="absolute top-6 left-6 text-white flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Trending Topics</h1>
            <p>Nigeria</p>
            <FaBook className="text-2xl" />
          </div>
        </div>
        <div className="w-full h-48 relative">
          <Image
            src={"/music.jpeg"}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="music"
          />

          <div className="absolute top-6 left-6 text-white flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Trending Topics</h1>
            <p>Nigeria</p>
            <FaBook className="text-2xl" />
          </div>
        </div>
        <div className="w-full relative bg-black">
          <Image
            src={"/pod.jpeg"}
            className="w-full h-48 object-cover"
            width={1000}
            height={1000}
            alt="music"
          />

          <div className="absolute top-6 left-6 text-white flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Trending Topics</h1>
            <p>Nigeria</p>
            <FaBook className="text-2xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
