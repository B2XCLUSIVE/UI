"use client";
import CategoriesHeading from "@/components/CategoriesHeading";
import RecentPost from "@/components/RecentPost";
import SectionHeader from "@/components/SectionHeader";
import TopMusic from "@/components/TopMusic";
import TopPlaylist from "@/components/TopPlaylist";
import Videos from "@/components/Videos";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function VideosHome() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader title={"All videos"} desc={"some"} />

      <section className="w-full md:w-5/6 mx-auto py-10">
        <div className="p-6">
          <h1 className={`${theme}-text text-4xl font-bold`}>
            Find the most recent video release
          </h1>
          <p className={`${theme}-text`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            consequatur.
          </p>
        </div>
      </section>
      <section className=" md:w-5/6 p-4 md:p-8 mx-auto md:flex md:gap-8">
        <div className="w-3/6">
          <div className="w-full p-4 md:w-full flex flex-col gap-8">
            <Videos />
            <Videos />
            <Videos />
            <Videos />
            <Videos />
            <Videos />
          </div>

          <section
            className={`p-4 md:p-8 mx-auto gap-2 flex justify-center ${theme}-text `}
          >
            <div className={`border  p-2 `}>
              <p className={`${theme}-text`}>PREV</p>
            </div>

            <div className="border  p-2 ">
              <p className={`${theme}-text`}>1</p>
            </div>

            <div className="border  p-2 ">
              <p className={`${theme}-text`}>2</p>
            </div>

            <div className="border  p-2 ">
              <p className={`${theme}-text`}>3</p>
            </div>

            <div className="border  p-2 ">
              <p className={`${theme}-text`}>4</p>
            </div>

            <div className="border  p-2 ">
              <p className={`${theme}-text`}>...</p>
            </div>

            <div className="border  p-2 ">
              <p className={`${theme}-text`}>3</p>
            </div>
          </section>
        </div>

        <div className=" p-4 md:w-2/5">
          {/* TOP ARTIST SECTION */}
          <CategoriesHeading title={"Top 10 Artist"} />

          <div className="grid grid-cols-2 py-4 md:flex flex-col gap-2">
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* TOP PLAYLIST SECTION */}
          <CategoriesHeading title={"Top Playlist"} />

          <div className="grid grid-cols-2 py-4 md:flex flex-col gap-2">
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* GET CONNECTED */}
          <CategoriesHeading title={"Get Connected"} />

          <div className="flex justify-between p-4">
            <FaFacebook className={`text-3xl ${theme}-text`} />
            <FaTwitter className={`text-3xl ${theme}-text`} />
            <FaLinkedin className={`text-3xl ${theme}-text`} />
            <FaYoutube className={`text-3xl ${theme}-text`} />
            <FaInstagram className={`text-3xl ${theme}-text`} />
            <FaPinterest className={`text-3xl ${theme}-text`} />
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
export default VideosHome;
