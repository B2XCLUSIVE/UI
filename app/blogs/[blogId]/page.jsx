"use client";

import CategoriesHeading from "@/components/CategoriesHeading";
import Comments from "@/components/Comments";
import RecentPost from "@/components/RecentPost";
import RelatedArticles from "@/components/RelatedArticles";
import SectionHeader from "@/components/SectionHeader";
import TopMusic from "@/components/TopMusic";
import TopPlaylist from "@/components/TopPlaylist";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function SingleBlog() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section>
        <SectionHeader
          title={"Single Blog Details"}
          desc={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequiquidem cum repudiandae praesentium. Molestias, voluptatum eaquedebitis culpa exercitationem rerum?"
          }
        />

        <section
          className={`${theme}-text w-full md:w-5/6 md:mx-auto md:flex md:gap-4`}
        >
          <div className="w-full p-4 md:w-3/5  ">
            <div className="relative w-full h-[500px]">
              <Image
                src={"/albumcober.avif"}
                width={1000}
                height={1000}
                alt="blog"
                className="w-full h-full object-cover"
              />
              <div className={`${theme}-head-bg p-4 absolute top-5 left-5`}>
                <p>13th September, 2024</p>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-5">
              <h1 className="font-bold text-4xl">
                This year concerts conference create a window for concerts
                groups
              </h1>

              <div className="flex gap-3">
                <Link href={"#"}>36 Comments</Link>

                <p>|</p>
                <Link href={"#"}>36 Comments</Link>
                <p>|</p>
                <Link href={"#"}>36 Comments</Link>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud nisi ut aliquip ex ea
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Duis aute irure dolor in reprehenderit fugiat nulla
                pariatur.
              </p>
            </div>

            <div>
              <CategoriesHeading title={"Related Articles"} />

              <div className="grid grid-cols-2 gap-4 p-4">
                <RelatedArticles />
                <RelatedArticles />
              </div>

              <CategoriesHeading title={"Comments"} />

              <Comments />
              <Comments />

              <CategoriesHeading title={"AQdd your comments"} />

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

                <button className="w-full py-4 px-8 bg-primarycolor text-white">
                  Send Comments
                </button>
              </form>
            </div>
          </div>

          <div className="w-full p-4 md:w-2/5">
            <CategoriesHeading title={"Get Connected"} />
            <div className="flex justify-between p-4">
              <FaFacebook className="text-3xl text-white" />
              <FaTwitter className="text-3xl text-white" />
              <FaLinkedin className="text-3xl text-white" />
              <FaYoutube className="text-3xl text-white" />
              <FaInstagram className="text-3xl text-white" />
              <FaPinterest className="text-3xl text-white" />
            </div>
            <div className="my-8 w-full h-[3px] bg-primarycolor"></div>
            <div className="my-8 bg-gray-800">
              <div className="p-10 flex flex-col justify-center items-center">
                <div className="w-[50px] h-[50px]">
                  <Image
                    src={"/alb.jpeg"}
                    width={1000}
                    height={1000}
                    alt="p"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h1>John Does</h1>
                <p>Organizer</p>
              </div>
              <div className="flex justify-center gap-4">
                <div className="flex flex-col items-center p-4">
                  <p>779</p>
                  <p>concerts</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <p>779</p>
                  <p>concerts</p>
                </div>
                <div className="flex flex-col items-center p-4">
                  <p>779</p>
                  <p>concerts</p>
                </div>
              </div>

              <button className="w-full py-4 px-8 bg-primarycolor text-white">
                View Comments
              </button>
            </div>
            {/* TOP ARTIST SECTION */}
            <CategoriesHeading title={"Top 10 Artists"} />
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
            <CategoriesHeading title={"Top Playlist"} />
            <div className="flex flex-col gap-2">
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
              <FaFacebook className="text-3xl text-white" />
              <FaTwitter className="text-3xl text-white" />
              <FaLinkedin className="text-3xl text-white" />
              <FaYoutube className="text-3xl text-white" />
              <FaInstagram className="text-3xl text-white" />
              <FaPinterest className="text-3xl text-white" />
            </div>
            <div className="my-8 w-full h-[3px] bg-primarycolor"></div>
            {/* Recent post section */}
            <CategoriesHeading title={"Recent Post"} />
            <div className=" flex flex-col gap-1 pt-4 ">
              <RecentPost />
              <RecentPost />
              <RecentPost />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default SingleBlog;
