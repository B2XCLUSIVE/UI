"use client";
import Button from "@/components/Button";
import CategoriesHeading from "@/components/CategoriesHeading";
import Comments from "@/components/Comments";
import RecentPost from "@/components/RecentPost";
import SectionHeader from "@/components/SectionHeader";
import TopMusic from "@/components/TopMusic";
import TopPlaylist from "@/components/TopPlaylist";
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

function VideoId() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader title={"All videos"} desc={"some"} />

      <section className=" md:w-5/6 md:p-8 p-4 mx-auto md:flex md:gap-8">
        <div className="w-full p-4 md:w-3/5 flex flex-col gap-8">
          <div>
            <div className="w-full">
              <video width="1000" height="1000" controls preload="none">
                <source src="/vic.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="p-4">
              <h1 className={`font-bold text-2xl ${theme}-text`}>
                Proin Gravida Nibh Vel Velit Auctor Aliquet. Aenean Sollicitudin
              </h1>

              <div></div>
            </div>
          </div>

          <CategoriesHeading title={"Comments"} />

          <Comments />
          <Comments />

          <div className="p-4 bg-gray-900 mt-4 rounded-lg">
            <h1 className="font-bold">Add your comments</h1>
          </div>

          <form className="p-4">
            <div className=" md:flex w-full gap-4 my-2">
              <input
                type="text"
                className=" my-2 md:my-0 p-4 bg-gray-800 w-full"
                placeholder="firstname"
              />
              <input
                type="phone"
                className="my-2 md:my-0 p-4 bg-gray-800 w-full"
                placeholder="phonenumber"
              />
            </div>
            <div className="md:flex w-full gap-4 my-2">
              <input
                type="email"
                className="my-2 md:my-0 p-4 bg-gray-800 w-full"
                placeholder="Email Address"
              />
              <input
                type="text"
                className=" my-2 md:my-0 p-4 bg-gray-800 w-full"
                placeholder="website"
              />
            </div>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full h-[300px] my-2 p-4 bg-slate-800"
              placeholder="Type your comments"
            ></textarea>

            <Button title={"Send Comments"} />
          </form>
        </div>
        <div className=" p-4 md:w-2/5">
          {/* TOP ARTIST SECTION */}
          <div className="p-4 bg-gray-900 my-4 rounded-lg">
            <h1 className="font-bold">Top 10 Artists</h1>
          </div>

          <div className="flex flex-col gap-2">
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
            <TopMusic />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* TOP PLAYLIST SECTION */}
          <div className="p-4 bg-gray-900 my-4 rounded-lg">
            <h1 className="font-bold">Top Playlists</h1>
          </div>

          <div className="flex flex-col gap-2">
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* GET CONNECTED */}
          <div className="p-4 bg-gray-900 my-4 rounded-lg">
            <h1 className="font-bold">Get Cnnected</h1>
          </div>

          <div className="flex justify-between p-4">
            <FaFacebook className="text-3xl text-white" />
            <FaTwitter className="text-3xl text-white" />
            <FaLinkedin className="text-3xl text-white" />
            <FaYoutube className="text-3xl text-white" />
            <FaInstagram className="text-3xl text-white" />
            <FaPinterest className="text-3xl text-white" />
          </div>

          <div className="my-8 w-full h-[3px] bg-primarycolor"></div>

          {/* Recent post section */}
          <div className="p-4 bg-gray-900 mt-4 rounded-lg">
            <h1 className="font-bold">Recent Post</h1>
          </div>

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

export default VideoId;
