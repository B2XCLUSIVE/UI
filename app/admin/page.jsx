"use client";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { FaBlog, FaComment, FaEye, FaUser } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";
import Post from "@/components/Post";
import Followers from "@/components/Followers";
import Charts from "@/components/Charts";
import pld from "@/public/pld.jpeg";

function Overview() {
  const { showSideBar } = useContext(ThemeContext);
  const [allPosts, setAllPosts] = useState([]);
  const [allArtist, setAllArtist] = useState([]);
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

        const postResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/post/posts?page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${cleanedToken}`,
            },
          },
        );
        setAllPosts(postResponse.data.data);

        const artistResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/artist/artists`,
          {
            headers: {
              Authorization: `Bearer ${cleanedToken}`,
            },
          },
        );
        setAllArtist(artistResponse.data.data);

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
      <section
        className={`${showSideBar ? "w-10/12" : "w-full"} p-4  md:p-8 flex flex-col gap-4`}
      >
        <h1 className={`text-3xl font-bold`}>Overview</h1>

        {/* Render total counts */}
        <div className="grid grid-cols-2 p-2 md:grid-cols-4 gap-4">
          {/* Total Posts */}
          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Posts</h1>
              <FaBlog className={``} />
            </div>
            <div>
              <div className="flex">
                <h1 className={`font-bold text-2xl`}>{allPosts.length}</h1>
              </div>
              <p className="text-gray-300 text-[9px] md:text-[11px]">
                Of all time
              </p>
            </div>
          </div>

          {/* Total Users */}
          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Users</h1>
              <FaUser className={``} />
            </div>
            <div>
              <div className="flex">
                <h1 className={` font-bold text-2xl`}>{allUsers.length}</h1>
              </div>
              <p className="text-gray-300 text-[9px] md:text-[11px]">
                Of all time
              </p>
            </div>
          </div>

          {/* Total Artists */}
          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Artists</h1>
              <FaEye className={``} />
            </div>
            <div>
              <div className="flex">
                <h1 className={`font-bold text-2xl`}>{allArtist.length}</h1>
              </div>
              <p className="text-gray-300 text-[9px] md:text-[11px]">
                Of all time
              </p>
            </div>
          </div>

          {/* Total Events */}
          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Events</h1>
              <FaComment className={``} />
            </div>
            <div>
              <div className="flex">
                <h1 className={` font-bold text-2xl`}>50</h1>
              </div>
              <p className="text-gray-300 text-[9px] md:text-[11px]">
                Of all time
              </p>
            </div>
          </div>
        </div>

        {/* Render charts and recent user content */}
        <section className="w-full md:flex gap-4">
          <div className="md:w-3/5">
            <Charts />
          </div>
          <div className="w-full md:w-2/5 rounded-lg">
            <h1 className={`font-bold`}>Recent 5 Users</h1>
            <div className="border flex justify-between border-gray-100 rounded-ss rounded-se p-4">
              <h1 className={` font-bold`}>Users</h1>
              <p className={` font-bold`}>Date</p>
            </div>
            {allUsers.slice(0, 5).map((user) => (
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
          </div>
        </section>

        {/* Render recent posts and artists */}
        <section className="md:flex-row flex flex-col gap-4">
          <div className="w-full md:w-4/6">
            <h1 className={`font-bold`}>Recent 5 Posts</h1>
            <div className="border flex justify-between border-gray-100 rounded-se rounded-ss p-4">
              <h1 className={` font-bold`}>Post Title</h1>
              <div className="flex gap-8">
                <h1 className={``}>Views</h1>
                <h1 className={``}>Date</h1>
              </div>
            </div>
            {currentPosts?.map((post) => (
              <Post key={post.id} {...post} />
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
          <div className="w-full md:w-2/6 rounded-lg">
            <h1 className={`font-bold`}>Recent 5 Artists</h1>
            <div className="border flex justify-between border-gray-100 rounded-ss rounded-se p-4">
              <h1 className={` font-bold`}>Artist</h1>
              <p className={` font-bold`}>Date</p>
            </div>
            {allArtist.slice(0, 5).map((artist) => (
              <Followers key={artist.id} {...artist} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Overview;
