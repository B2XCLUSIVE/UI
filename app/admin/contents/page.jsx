"use client";

import PostContent from "@/components/PostContent";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";

import { FaBlog, FaComment, FaEye, FaUser } from "react-icons/fa";
import axios from "axios";
import ArtistContent from "@/components/ArtistContent";
import MusicOverview from "@/components/MusicOverview";
import EventOverview from "@/components/EventOverview";
import VideoOverview from "@/components/VideoOverview";
import AllArtistOverview from "@/components/AllArtistOverview";
import AllMusicOverview from "@/components/AllMusicOverview";
import AllVideosOverview from "@/components/AllVideosOverview";
import AllEventOverview from "@/components/AllEventOverview";
function Contents() {
  const { showSideBar } = useContext(ThemeContext);
  const [allPosts, setallPosts] = useState([]);
  const [allArtist, setAllArtist] = useState([]);
  const [allMusic, setAllMusic] = useState([]);
  const [allVideo, setAllVideo] = useState([]);
  const [allEvent, setallEvent] = useState([]);
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
        const response = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/post/posts?page=${currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setallPosts(response?.data?.data);

        const artistResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/artist/artists`,
        );
        setAllArtist(artistResponse?.data?.data);

        const musicResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/track/audios`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setAllMusic(musicResponse?.data?.data);

        const videoResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/track/videos`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setAllVideo(videoResponse?.data?.data);

        const eventResponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/event/events`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setallEvent(eventResponse?.data?.data);
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
      <section className={`${showSideBar ? "w-10/12" : "w-full"} p-4 `}>
        <h1 className={` my-4 text-2xl font-bold `}>Contents</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Blogs</h1>
              <FaBlog className={``} />
            </div>

            <div>
              <div className="flex">
                <h1 className={`font-bold text-2xl`}>423</h1>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Music</h1>
              <FaUser className={``} />
            </div>

            <div>
              <div className="flex">
                <h1 className={` font-bold text-2xl`}>20</h1>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Videos</h1>
              <FaEye className={``} />
            </div>

            <div>
              <div className="flex">
                <h1 className={` font-bold text-2xl`}>408</h1>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Events</h1>
              <FaComment className={``} />
            </div>

            <div>
              <div className="flex">
                <h1 className={` font-bold text-2xl`}>50</h1>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`text-[10px] md:text-base`}>Total Artist</h1>
              <FaComment className={``} />
            </div>

            <div>
              <div className="flex">
                <h1 className={` font-bold text-2xl`}>50</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-8 p-4">
          <div className="md:w-8/12">
            <div className="w-full p-2 flex border border-gray-100 rounded-se rounded-ss">
              <div className="w-5/12">
                <h1 className={` font-bold`}>Blogs</h1>
              </div>
              <div className="w-7/12 flex gap-2">
                <h1 className={` w-1/6 font-bold`}>Category</h1>

                <h1 className={` w-1/6 font-bold`}>Comments</h1>
                <h1 className={` w-1/6 font-bold`}>Date</h1>
                <h1 className={` w-1/6 font-bold`}>Status</h1>
                <h1 className={` w-2/6 font-bold`}>Action</h1>
              </div>
            </div>
            {currentPosts?.map((post) => (
              <PostContent key={post.id} {...post} />
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
          <div className="w-4/12">
            <AllArtistOverview />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <AllMusicOverview />
          <AllVideosOverview />
          <AllEventOverview />
        </div>
      </section>
    </>
  );
}

export default Contents;
