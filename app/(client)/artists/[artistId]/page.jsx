"use client";

import ArtistSong from "@/components/ArtistSong";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaDownload,
  FaHamburger,
  FaPlay,
  FaPlus,
  FaRegPlayCircle,
} from "react-icons/fa";
import axios from "axios";
import pld from "@/public/pld.jpeg";
import { VscLoading } from "react-icons/vsc";
import AudioPlayer from "@/components/AudioPlayer";

function SingleMusics({ params }) {
  const { artistId } = params;

  const [artist, setArtist] = useState("");
  const [audios, setAudios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const fetchdata = async () => {
    const response = await axios.get(
      `https://b2xclusive.onrender.com/api/v1/artist/${artistId}`,
    );

    setArtist(response?.data?.data);
    const audiosresponse = await axios.get(
      `https://b2xclusive.onrender.com/api/v1/track/audios?artistId=${artistId}&page=${currentPage}`,
    );
    setAudios(audiosresponse?.data?.data);
    console.log(audios);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = audios?.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total number of pages
  const totalPages = Math.ceil(audios.length / postsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (!artist) {
    return (
      <div className="w-full flex justify-center mt-20 ">
        <VscLoading className="text-xl animate-spin" />
      </div>
    ); // Add a loading state if blog is null
  }

  return (
    <>
      <SectionHeader title={artist.name} desc={artist.bio} />

      <section className={`  p-4 w-full md:w-5/6 md:mx-auto `}>
        <div className="h-[300px] relative">
          <Image
            src={artist ? artist?.image?.url : pld}
            width={1000}
            height={1000}
            alt="artist"
            className="w-full h-full object-cover"
          />
          <div className="bg-[#0000009d] flex justify-between items-center p-4 absolute left-0 right-0 bottom-0">
            <div>
              <h1 className="font-bold text-2xl text-white">{artist.name}</h1>
              <p className="text-white">
                {artist?.bio?.split(" ").slice(0, 12).join(" ")}
              </p>
            </div>

            <FaPlus className="text-lg text-white" />
          </div>
        </div>
      </section>

      <section
        className={` p-2 w-full md:w-5/6 md:mx-auto flex flex-col gap-4 `}
      >
        {currentPosts.map((audio) => (
          <div key={audio.id}>
            <ArtistSong key={audio.id} {...audio} />
          </div>
        ))}

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
      </section>
    </>
  );
}

export default SingleMusics;
