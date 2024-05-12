import AllArtists from "@/components/AllArtists";
import SectionHeader from "@/components/SectionHeader";
import { FaSearch } from "react-icons/fa";

function Artists() {
  return (
    <>
      <SectionHeader title={"Artists Blogs"} desc={"hsyhhs"} />

      <section className="w-full md:w-5/6 mx-auto py-10 px-8">
        <div>
          <h1
            className={`md:text-left text-center text-lg md:text-4xl font-bold`}
          >
            Find the most recent music release
          </h1>
          <p className={` text-center md:text-left`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            consequatur.
          </p>
        </div>
      </section>

      <section className="w-full md:w-5/6 mx-auto p-4">
        <div className="flex gap-4 w-full">
          <div className="md:w-4/6 rounded-full flex items-center z-10 border ">
            <input
              type="text"
              placeholder="Search here"
              className={` w-11/12 bg-transparent p-4 text-white outline-none `}
            />
            <button className="rounded-full bg-primarycolor flex items-center md:text-base text-[12px] py-2 gap-1 px-4 mr-2">
              <FaSearch /> Search
            </button>
          </div>

          <div className="w-2/6 p-4 bg-transparent outline-none border rounded-lg">
            <select
              name=""
              id=""
              className="w-full bg-transparent outline-none"
            >
              <option value="">Filter</option>
              <option value="">Realesed Date</option>
              <option value="">Artist</option>
            </select>
          </div>
        </div>
      </section>

      <AllArtists />
    </>
  );
}

export default Artists;
