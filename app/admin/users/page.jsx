"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import pld from "@/public/pld.jpeg";
import AllArtistOverview from "@/components/AllArtistOverview";
import AllUsers from "@/components/AllUser";

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
      <div className="w-full md:10/12">
        <div className="p-2 w-full flex flex-col gap-2">
          <h1 className="text-xl ">All Users</h1>
          <div className="h-72">
            <div className="w-full p-2 flex border border-gray-100 rounded-se rounded-ss">
              <div className="w-7/12">
                <h1 className={` text-xs`}>Users</h1>
              </div>
              <h1 className={` w-3/12 text-xs`}>Date</h1>

              <h1 className={` w-2/12 text-xs`}>Action</h1>
            </div>

            <AllUsers />
          </div>
        </div>

        <div className="p-2 w-full flex flex-col gap-2">
          <h1 className="text-xl ">Comments</h1>
          <div className="h-72">
            <div className="w-full p-2 flex border border-gray-100 rounded-se rounded-ss">
              <div className="w-7/12">
                <h1 className={` text-xs`}>Comments</h1>
              </div>
              <h1 className={` w-3/12 text-xs`}>Date</h1>

              <h1 className={` w-2/12 text-xs`}>Action</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowersDashboard;
