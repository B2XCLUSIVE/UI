"use client";
import AlbumCover from "@/components/AlbumCover";
import CategoriesHeading from "@/components/CategoriesHeading";
import Event from "@/components/Event";
import RecentPost from "@/components/RecentPost";
import Top40 from "@/components/Top40";
import TopMusic from "@/components/TopMusic";
import TopPlaylist from "@/components/TopPlaylist";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import useSWR from "swr";
import { useContext, useEffect, useState } from "react";
import {
  FaBackward,
  FaBook,
  FaFacebook,
  FaForward,
  FaInstagram,
  FaLinkedin,
  FaMicrophone,
  FaMusic,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import axios from "axios";

export default function Home() {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://b2xclusive.onrender.com/api/v1/post/posts",
        );
        setAllPost(response?.data?.data);
        console.log(allPost);
      } catch (error) {
        console.error("Failed to fethc blog post", error.message);
        toast.error(error?.response?.data?.message || "Failed to upload post", {
          position: "top-center",
        });
      }
    };

    fetchData();
  }, [allPost]);
  return (
    <main>
      <ToastContainer />

      <section className="herosection p-8 md:p-36 relative">
        <div className="bg-[#000] opacity-35 w-full h-full absolute top-0 left-0 right-0 bottom-0"></div>

        <h1 className="text-4xl text-white font-extrabold text-center z-10">
          Stories, Thoughts Ideas and More
        </h1>
        <p className="z-10">
          Ignite Your Curiosity and Imagination Through Captivating Stories and
          Inspiring Insights. Explore, Learn, and Discover with Us!
        </p>

        <div className="w-full md:w-5/6 rounded-full flex items-center z-10 border border-white">
          <input
            type="text"
            placeholder="Search here"
            className="w-11/12 bg-transparent p-4 text-white outline-none"
          />
          <button className="rounded-full bg-primarycolor flex items-center md:text-base text-[12px] py-2 gap-1 px-4 mr-2">
            <FaSearch /> Search
          </button>
        </div>
        <div className="flex flex-wrap z-10 md:gap-4 gap-2 justify-center ">
          <Link
            className="py-1 text-white flex items-center text-[10px] md:text-base gap-1 px-4 rounded-full border border-white"
            href={"#"}
          >
            <FaSearch />
            Trending Music
          </Link>
          <Link
            className="py-1 text-white flex items-center gap-1 px-4 rounded-full md:text-base text-[10px] border border-white"
            href={"#"}
          >
            <FaSearch />
            Viral Videos
          </Link>
          <Link
            className="py-1 text-white flex items-center gap-1 px-4 rounded-full md:text-base text-[10px] border border-white"
            href={"#"}
          >
            <FaSearch />
            Trending Topics
          </Link>
        </div>
      </section>

      <section className="md:w-5/6 mx-auto grid grid-cols-3 gap-4 p-4">
        <div className="w-full h-48 relative">
          <Image
            src={"/talk.jpeg"}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="music"
          />

          <div className="absolute top-6 left-6 flex flex-col">
            <h1 className="font-bold text-white text-xl">The Top 50</h1>
            <p className="text-white">Trending Discussions</p>
            <FaBook className="text-white text-2xl" />
          </div>
        </div>
        <div className="w-full h-48 relative">
          <Image
            src={"/pod.jpeg"}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="music"
          />

          <div className="absolute top-6 left-6 flex flex-col">
            <h1 className="font-bold text-xl text-white">
              Trending Discussions
            </h1>
            <p className="text-white">Latests Gists</p>
            <FaMicrophone className=" text-white text-2xl" />
          </div>
        </div>
        <div className="w-full relative bg-black">
          <Image
            src={"/music.jpeg"}
            className="w-full h-48 object-cover"
            width={1000}
            height={1000}
            alt="music"
          />

          <div className="absolute top-6 left-6 flex flex-col">
            <h1 className="font-bold text-xl text-white">Trending Musics</h1>
            <p className="text-white">Nigeria</p>
            <FaMusic className="text-2xl text-white" />
          </div>
        </div>
      </section>

      <section className="w-full md:w-5/6 mx-auto md:flex p-4 gap-6">
        <div className="w-full md:w-3/4">
          {/* NEW ALBUM SECTION */}
          <CategoriesHeading title={"New Album releases"} />

          <div className="grid gap-4 grid-cols-2 md:py-4 md:flex md:gap-4">
            <AlbumCover />
            <AlbumCover />
            <AlbumCover />
            <AlbumCover />
          </div>

          <div className="flex items-end justify-between mb-10">
            <div className="w-3/4 h-[3px] bg-primarycolor"></div>
            <div className="flex gap-4">
              <FaBackward className={`border w-12 h-12 p-2 `} />
              <FaForward className={`border w-12 h-12 p-2 `} />
            </div>
          </div>

          {/* UPCOMING EVENTS SECTION*/}
          <CategoriesHeading title={"Upcoming Events"} />

          <div className="flex flex-col gap-4 my-4">
            <Event />
            <Event />
            <Event />
          </div>

          <div className="flex items-end justify-between mb-10">
            <div className="w-3/4 h-[3px] bg-primarycolor"></div>
            <div className="flex gap-4">
              <FaBackward className={`border w-12 h-12 p-2 `} />
              <FaForward className={`border w-12 h-12 p-2 `} />
            </div>
          </div>

          {/* RECENT POST SECTION */}
          <CategoriesHeading title={"Recent Posts"} />

          <div className="grid md:grid-cols-2 gap-4 p-4">
            {allPost &&
              allPost
                ?.slice(0, 6)
                .map((post) => <RecentPost key={post.id} {...post} />)}
          </div>

          {/* TOP 40 section */}
          <CategoriesHeading title={"Top 40"} />

          <div className="py-4 grid grid-cols-2 md:flex md:flex-col gap-4 ">
            <Top40 />
            <Top40 />
            <Top40 />
            <Top40 />
          </div>
        </div>

        <div className="w-full md:w-1/4">
          {/* TOP ARTIST SECTION */}
          <CategoriesHeading title={"Top 6 Artists"} />

          <div className="grid grid-cols-3 md:flex md:flex-col gap-2 py-2">
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
          </div>
          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* TOP PLAYLIST SECTION */}
          <CategoriesHeading title={"Top Playlists"} />

          <div className="grid grid-cols-2 md:flex md:flex-col gap-2 py-2">
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* GET CONNECTED */}
          <CategoriesHeading title={"Get Connected"} />

          <div className="flex justify-between p-4">
            <FaFacebook className={`  text-3xl `} />
            <FaTwitter className={` text-3xl `} />
            <FaLinkedin className={`  text-3xl `} />
            <FaYoutube className={` text-3xl `} />
            <FaInstagram className={` text-3xl `} />
            <FaPinterest className={`  text-3xl `} />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* Recent post section */}
          <div className="hidden md:block">
            <CategoriesHeading title={"Recent Post"} />

            <div className=" flex flex-col gap-1 pt-4 ">
              <RecentPost />
              <RecentPost />
              <RecentPost />
            </div>
            <div className="my-8 w-full h-[3px] bg-primarycolor"></div>
          </div>
        </div>
      </section>

      <section className="w-full p-4 md:w-5/6 mx-auto md:flex md:gap-4">
        <div>
          <CategoriesHeading title={"Music Soul"} />

          <div className={`p-4 mt-4`}>
            <div className="h-[200px] relative">
              <Image
                src={"/albumcover.jpeg"}
                width={1000}
                height={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 p-4">
                <h1 className="font-bold text-2xl text-white">
                  All red carpet looks 2018 music awards
                </h1>
                <p className="text-white">Arditta Colle -25 July, 2018</p>
              </div>
            </div>

            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
        </div>

        <div>
          <CategoriesHeading title={"Live Concerts"} />

          <div className={`p-4 mt-4`}>
            <div className="h-[200px] relative">
              <Image
                src={"/albumcover.jpeg"}
                width={1000}
                height={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 p-4">
                <h1 className="font-bold text-2xl text-white">
                  All red carpet looks 2018 music awards
                </h1>
                <p className="text-white">Arditta Colle -25 July, 2018</p>
              </div>
            </div>

            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
        </div>

        <div>
          <CategoriesHeading title={"New Albums"} />

          <div className={` p-4 mt-4`}>
            <div className="h-[200px] relative">
              <Image
                src={"/albumcover.jpeg"}
                width={1000}
                height={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 p-4">
                <h1 className="font-bold text-white text-2xl">
                  All red carpet looks 2018 music awards
                </h1>
                <p className="text-white">Arditta Colle -25 July, 2018</p>
              </div>
            </div>

            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
        </div>
      </section>
    </main>
  );
}
