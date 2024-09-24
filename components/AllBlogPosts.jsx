"use client";
import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

import axios from "axios";
function AllBlogPosts() {
  const [allPost, setAllPost] = useState([]);
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
        setAllPost(response?.data?.data);
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
      <div className="w-full flex flex-col gap-4 py-4">
        <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg "></div>

        <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg "></div>
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
  const currentPosts = allPost.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(allPost.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div>
        <div className="p-4 md:p-0 grid gap-4">
          {currentPosts &&
            currentPosts.map((post) => <BlogPost key={post.id} {...post} />)}
        </div>

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
                currentPage === number ? "bg-gray-50" : ""
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
      </div>
    </>
  );
}

export default AllBlogPosts;
