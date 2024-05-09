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
function AllEventOverview() {
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
          `https://b2xclusive.onrender.com/api/v1/post/posts`,
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
          `https://b2xclusive.onrender.com/api/v1/event/events?page=${currentPage}`,
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
  const currentPosts = allEvent.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(allEvent.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <div className="w-full p-2 flex border border-gray-100 rounded-se rounded-ss">
            <div className="w-6/12">
              <h1 className={` font-bold`}>Events</h1>
            </div>
            <div className="w-6/12 flex gap-2">
              <h1 className={`w-3/6 font-bold`}>Date</h1>
              <h1 className={` w-3/6 font-bold`}>Action</h1>
            </div>
          </div>

          {currentPosts?.map((event) => (
            <EventOverview key={event.id} {...event} />
          ))}
        </div>
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

export default AllEventOverview;
