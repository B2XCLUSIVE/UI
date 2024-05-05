"use client";
import Artist from "@/components/Artist";
import SectionHeader from "@/components/SectionHeader";
import { FaBackward, FaForward, FaPlus, FaSearch } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

function Artists() {
  const [allArtist, setALlArtist] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://b2xclusive.onrender.com/api/v1/artist/artists`,
      );
      setALlArtist(response?.data?.data);
      console.log(allArtist);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allArtist.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(allArtist.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
      <section
        className={` md:w-5/6 p-8 mx-auto  grid grid-cols-2 md:grid-cols-4 gap-8`}
      >
        {currentPosts?.map((data) => (
          <Artist key={data.id} {...data} />
        ))}
      </section>

      <div className="flex justify-center mt-4">
        {/* Previous button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="border border-gray-500 text-gray-500 px-4 py-2 rounded-md mr-2"
        >
          Previous
        </button>
        {/* Page number buttons */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`border border-gray-500 text-primarycolor px-4 py-2 rounded-md mx-1 ${
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
          className="bg-primarycolor text-white px-4 py-2 rounded-md ml-2"
        >
          Next
        </button>{" "}
      </div>
    </>
  );
}

export default Artists;
