"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import pld from "@/public/pld.jpeg";

function FollowersDashboard() {
  const [allUsers, setAllUsers] = useState([]);

  const [token, setToken] = useState("");
  const role = "user";

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const fetchPost = async () => {
    try {
      const storedToken = localStorage.getItem("b2exclusiveadmin");
      if (storedToken) {
        const cleanedToken = storedToken.replace(/^['"](.*)['"]$/, "$1");
        setToken(cleanedToken);

        const usersResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/users/allUsers?role=${role}`,
          {
            headers: {
              Authorization: `Bearer ${cleanedToken}`,
            },
          },
        );
        setAllUsers(usersResponse.data.data);
      } else {
        console.error("Bearer token not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allUsers.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(allUsers.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section className="md:w-10/12 p-4">
        <div>
          <h1 className={`my-4`}>Followers (4 of 4 records)</h1>
          <div className="border flex justify-between border-gray-100 rounded-ss rounded-se p-4">
            <h1 className={` font-bold`}>Followers</h1>
            <p className={` font-bold`}>Date</p>
          </div>

          {currentPosts.slice(0, 5).map((user) => (
            <div
              key={user.id}
              className="border flex justify-between border-gray-100 p-2"
            >
              <div className="flex gap-2 items-center">
                <div className="w-[40px] h-[40px] rounded-full">
                  <Image
                    src={user.image || pld}
                    width={1000}
                    height={1000}
                    alt="user"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className={`md:text-base text-[12px]`}>
                    {user.userName}
                  </h1>
                  <p className="text-green-500 md:text-base text-[12px]">
                    {user.email}
                  </p>
                </div>
              </div>
              <p className={`md:text-base text-[12px]`}>
                {user.createdAt.split("T")[0]}
              </p>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            {/* Pagination buttons */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="border border-gray-500 text-gray-500 px-4 py-2 rounded-md mr-2"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`border border-gray-500 text-primarycolor px-4 py-2 rounded-md mx-1 ${
                    currentPage === number ? "bg-black text-white" : ""
                  }`}
                >
                  {number}
                </button>
              ),
            )}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-primarycolor text-white px-4 py-2 rounded-md ml-2"
            >
              Next
            </button>
          </div>
        </div>

        <div>
          <h1 className={` my-4`}>Comments </h1>
          <div className="border flex justify-between border-gray-100 rounded-ss rounded-se p-4">
            <h1 className={` font-bold`}>Followers</h1>
            <p className={` font-bold`}>Date</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FollowersDashboard;
