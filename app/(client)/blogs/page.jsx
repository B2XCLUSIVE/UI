"use client";
import BlogPost from "@/components/BlogPost";
import CategoriesHeading from "@/components/CategoriesHeading";
import RecentPost from "@/components/RecentPost";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "react-toastify";

import useSWR from "swr";
import TopPlaylist from "@/components/TopPlaylist";
import { useEffect, useState } from "react";
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
import { VscLoading } from "react-icons/vsc";
import AllBlogPosts from "@/components/AllBlogPosts";
import HomeRecentPost from "@/components/HomeRecentPost";

function Blogs() {
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
          <div>
            <AllBlogPosts />
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
            <div>
              <HomeRecentPost />
            </div>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
