"use client";
import ArtistAlbum from "@/components/ArtistAlbum";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function Musics() {
  const [allMusic, setAllMusic] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const musicResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/track/audios?page=${currentPage}`,
        );
        setAllMusic(musicResponse?.data?.data);
      } catch (error) {
        console.log("error fethcing posts", error.message);
      }
    };

    fetchdata();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allMusic.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(allMusic.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <SectionHeader
        title={"Musics"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit labore eaque ducimus qui corporis expedita, quis possimus et corrupti."
        }
      />

      <section className="w-full md:w-5/6 mx-auto p-4">
        <div className="flex gap-4 w-full">
          <div className="md:w-4/6 rounded-full flex items-center z-10 border">
            <input
              type="text"
              placeholder="Search here"
              className={`  w-11/12 bg-transparent p-4 text-white outline-none `}
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
      <section className="w-full p-2 md:w-5/6 md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentPosts?.map((music) => (
          <ArtistAlbum key={music.id} {...music} />
        ))}
      </section>
      <div className="flex justify-center mt-4">
        {/* Previous button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="border text-[10px] md:text-base border-gray-500 text-gray-500 px-2 md:px-4 md:py-2 rounded-md mr-2"
        >
          Previous
        </button>
        {/* Page number buttons */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`border border-gray-500 text-primarycolor md:text-base text-[10px] px-4 py-2 rounded-md mx-1 ${
              currentPage === number ? "bg-black" : ""
            }`}
          >
            {number}
          </button>
        ))}
        {/* Next button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-primarycolor text-white px-4 py-2 md:text-base text-[10px] rounded-md ml-2"
        >
          Next
        </button>{" "}
      </div>
    </>
  );
}

export default Musics;
