"use client";

import { useEffect, useState } from "react";
import PostContent from "./PostContent";

import axios from "axios";
function AllOverviewPost() {
  const [allPosts, setallPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/post/posts?page=${currentPage}`,
        );
        setallPosts(response?.data?.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setError(error.message || "Error fetching posts");
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [currentPage]);

  if (error)
    return (
      <div>
        <p className="text-red-500 font-bold">Error Fetching Posts</p>
      </div>
    );
  if (isLoading)
    return (
      <div className="w-full flex flex-col  gap-2 py-2">
        <div className="h-10 w-full bg-gray-200 animate-pulse rounded-lg "></div>

        <div className="h-10 w-full bg-gray-200 animate-pulse rounded-lg "></div>
        <div className="h-10 w-full bg-gray-200 animate-pulse rounded-lg "></div>
        <div className="h-10 w-full bg-gray-200 animate-pulse rounded-lg "></div>
        <div className="h-10 w-full bg-gray-200 animate-pulse rounded-lg "></div>
      </div>
    );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div>
        {currentPosts?.map((post) => (
          <PostContent key={post.id} {...post} />
        ))}

        <div className="flex justify-center mt-4 gap-2">
          {/* Previous button */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="border text-[10px] md:text-xs border-gray-500 text-gray-500 p-1 rounded-md"
          >
            Previous
          </button>
          {/* Page number buttons */}
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`border border-gray-500 text-primarycolor md:text-xs text-[10px] py-1 px-2 rounded-md ${
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
            className="bg-primarycolor text-white p-1 md:text-xs text-[10px] rounded-md"
          >
            Next
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default AllOverviewPost;