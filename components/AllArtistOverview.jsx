"use client";

import { useContext, useEffect, useState } from "react";

import axios from "axios";
import ArtistContent from "@/components/ArtistContent";
function AllArtistOverview() {
  const [allArtist, setAllArtist] = useState([]);
  const [token, setToken] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  useEffect(() => {
    const fetchPost = async () => {
      const storedToken = localStorage.getItem("b2exclusiveadmin");
      if (storedToken) {
        const cleanedToken = storedToken.replace(/^['"](.*)['"]$/, "$1");
        setToken(cleanedToken);
      } else {
        console.error("Bearer token not found");
      }
      try {
        const artistResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/artist/artists?page=${currentPage}`,
        );
        setAllArtist(artistResponse?.data?.data);
      } catch (error) {
        console.log("error fethcing posts", error.message);
      }
    };

    fetchPost();
  }, [currentPage, token]);

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
      <div>
        <div className="w-full p-2 flex border border-gray-100 rounded-se rounded-ss">
          <div className="w-5/12">
            <h1 className={` font-bold`}>Artist</h1>
          </div>
          <div className="w-7/12 flex gap-2">
            <h1 className={` w-2/6 font-bold`}>Date</h1>
            <h1 className={` w-2/6 font-bold`}>Status</h1>

            <h1 className={` w-3/6 font-bold`}>Action</h1>
          </div>
        </div>
        {currentPosts?.map((post) => (
          <ArtistContent key={post.id} {...post} />
        ))}
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
      </div>
    </>
  );
}

export default AllArtistOverview;
