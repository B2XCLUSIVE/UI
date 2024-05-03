"use client";
import BlogPost from "@/components/BlogPost";
import CategoriesHeading from "@/components/CategoriesHeading";
import RecentPost from "@/components/RecentPost";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "react-toastify";

import TopMusic from "@/components/TopMusic";
import TopPlaylist from "@/components/TopPlaylist";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import axios from "axios";

function Blogs() {
  const [allPost, setAllPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/post/posts?page=${currentPage}`,
        );
        setAllPost(response?.data?.data);
        console.log(allPost);
      } catch (error) {
        console.error("Failed to fethc blog post", error.message);
        toast.error(
          error?.response?.data?.message || "Failed to fecthblog post",
          {
            position: "top-center",
          },
        );
      }
    };

    fetchData();
  }, [allPost, currentPage]);

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
      <SectionHeader
        title={"Trending Stories"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quae dolores? Unde similique beatae aspernatur dolore corporis tempore exercitationem."
        }
      />

      <section className="w-full md:w-5/6 mx-auto p-4">
        <div className="flex gap-4 w-full">
          <div className="md:w-4/6 rounded-full flex items-center z-10 border">
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

      <section className=" md:w-5/6 md:p-8 mx-auto md:flex md:gap-8">
        <div className="w-full md:w-3/5">
          <div className="p-4 grid gap-4">
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
        </div>
        <div className=" p-4 md:w-2/5">
          {/* TOP ARTIST SECTION */}
          <h1 className={`font-bold`}>Discover more of what matters to you</h1>

          <div className="flex flex-wrap gap-2 py-2">
            <p className="text-white py-1 font-bold text-[14px]  px-3 bg-primarycolor rounded-full">
              Music
            </p>
            <p className="text-white py-1 font-bold text-[14px]  px-3 bg-primarycolor rounded-full">
              Trending Blogs
            </p>
            <p className="text-white py-1 font-bold text-[14px]  px-3 bg-primarycolor rounded-full">
              Top Videos
            </p>
            <p className="text-white py-1 font-bold text-[14px]  px-3 bg-primarycolor rounded-full">
              New release
            </p>
            <p className="text-white py-1 font-bold text-[14px]  px-3 bg-primarycolor rounded-full">
              Top Videos
            </p>
            <p className="text-white py-1 font-bold text-[14px]  px-3 bg-primarycolor rounded-full">
              Trending Stories
            </p>
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* TOP PLAYLIST SECTION */}
          <CategoriesHeading title={"Top Playlists"} />

          <div className="grid grid-cols-2 md:flex md:flex-col gap-2">
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* GET CONNECTED */}
          <CategoriesHeading title={"Get Connected"} />

          <div className="flex justify-between p-4">
            <FaFacebook className={`text-3xl `} />
            <FaTwitter className={` text-3xl `} />
            <FaLinkedin className={`text-3xl `} />
            <FaYoutube className={` text-3xl `} />
            <FaInstagram className={` text-3xl `} />
            <FaPinterest className={` text-3xl `} />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* Recent post section */}
          <CategoriesHeading title={"Recent Posts"} />

          <div className=" flex flex-col gap-1 pt-4 ">
            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
