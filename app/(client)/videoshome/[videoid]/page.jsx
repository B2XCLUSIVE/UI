"use client";
import Button from "@/components/Button";
import CategoriesHeading from "@/components/CategoriesHeading";
import Comments from "@/components/Comments";
import RecentPost from "@/components/RecentPost";
import SectionHeader from "@/components/SectionHeader";
import TopMusic from "@/components/TopMusic";
import TopPlaylist from "@/components/TopPlaylist";
import Image from "next/image";
import Link from "next/link";
import {
  FaComment,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaShare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import axios from "axios";

import pld from "@/public/pld.jpeg";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import HomeRecentPost from "@/components/HomeRecentPost";
import { VscLoading } from "react-icons/vsc";
function VideoId({ params }) {
  const { videoid } = params;
  const [video, setVideo] = useState("");
  const [allVideo, setAllVideo] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/track/video/${videoid}`,
        );

        setVideo(response?.data?.data);
        const allvideoresponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/track/videos`,
        );
        setAllVideo(allvideoresponse?.data?.data);
      } catch (error) {
        console.log("error loading videe", error.message);
      }
    };

    fetchdata();
  }, [videoid]);

  const handleDownload = async () => {
    try {
      const response = await fetch(video?.videoUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${video?.title}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.log("Error downloading video:", error.message);
    }
  };
  const { user } = useContext(ThemeContext);
  const [showComment, setShowComment] = useState(false);

  if (!video) {
    return (
      <div className="w-full flex justify-center mt-20 ">
        <VscLoading className="text-4xl animate-spin" />
      </div>
    ); // Add a loading state if blog is null
  }

  return (
    <>
      <SectionHeader
        title={video?.title}
        desc={video?.subtitle || "A littlee about the album goes here"}
      />

      <section className=" md:w-5/6 md:p-8 p-4 mx-auto md:flex md:gap-8">
        <div className="w-full p-4 md:w-3/5 flex flex-col gap-8">
          <div>
            <div className="w-full">
              <video
                width="1000"
                height="1000"
                controls
                autoPlay
                preload="none"
                src={video?.videoUrl}
                type="video/mp4"
              />
            </div>
            <div className="py-4">
              <h1 className={` text-4xl md:text-5xl font-bold`}>
                {video?.title}{" "}
              </h1>
              <p className={``}>
                {video?.subtitle || "A littlee about the album goes here"}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-[50px] h-[50px] rounded-full">
                <Image
                  src={"/alb.jpeg"}
                  width={1000}
                  height={1000}
                  alt="alb"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h1 className={` font-bold text-lg`}>Steve Qj</h1>
                <div className="flex gap-4">
                  <p className={``}>5 mins Read</p>
                  <p className={``}>Two days ago</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-4 my-4 border-t border-b border-gray-400">
              <div className="flex items-center gap-2">
                <FaHeart className={``} />
                <p className={``}>24k</p>
              </div>
              <div className="flex items-center gap-2">
                <FaComment className={``} />
                <p className={``}>100k</p>
              </div>

              <FaShare className={``} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: video.description }} />{" "}
            <Button
              title={"Download Video"}
              onclick={handleDownload}
              className="bg-primarycolor text-white"
            />
          </div>
          <CategoriesHeading title={"Related Videos"} />
          <div className="grid grid-cols-2 gap-4 py-4">
            {allVideo.slice(0, 1).map((video) => (
              <div key={video.id}>
                <div className="w-full h-[150px] md:h-[300px] relative">
                  <Image
                    src={video?.thumbnail?.url || pld}
                    width={1000}
                    height={1000}
                    alt="blogd"
                    className="w-full h-full object-cover"
                  />
                  <div className="text-white absolute bottom-0 bg-[#000000aa] left-0 p-2 md:p-4">
                    <h1 className="font-bold text-sm md:text-2xl text-white ">
                      {video?.title?.split(" ").slice(0, 3).join(" ")} .....
                    </h1>
                    <p className="md:text-base text-[10px]">
                      {video?.subtitle?.split(" ").slice(0, 6).join(" ") ||
                        "A littlee about the album goes here"}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CategoriesHeading title={"Comments"} />
          <div className={`p-4 flex gap-4 `}>
            <div className="w-[200px]  md:w-[50px] h-[50px]">
              <Image
                src={"/alb.jpeg"}
                width={1000}
                height={1000}
                alt="alb"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div>
                <h1 className={`font-bold text-md md:text-base text-[12px] `}>
                  Brain Deo
                </h1>
                <p className={` md:text-base text-[10px]`}>15-10-2024</p>
              </div>
              <p className={`md:text-base text-[10px] `}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                cumque voluptates aperiam tempora nostrum adipisci voluptatem
                numquam dolorem a quisquam?
              </p>
              <div
                onClick={() => setShowComment(true)}
                className="text-primarycolor md:text-base text-[10px]"
              >
                Reply
              </div>

              <div className={`p-4 flex gap-4 `}>
                <div className="w-[200px]  md:w-[50px] h-[50px]">
                  <Image
                    src={"/alb.jpeg"}
                    width={1000}
                    height={1000}
                    alt="alb"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <h1
                      className={`font-bold text-md md:text-base text-[12px] `}
                    >
                      Brain Deo
                    </h1>
                    <p className={`md:text-base text-[10px]`}>15-10-2024</p>
                  </div>
                  <p className={`md:text-base text-[10px] `}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo cumque voluptates aperiam tempora nostrum adipisci
                    voluptatem numquam dolorem a quisquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
          {showComment ? (
            user === null ? (
              <Link href={"/login"}>Please login to drop a comment</Link>
            ) : (
              <form className="p-4">
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="10"
                  className={`  w-full h-[100px] border my-2 p-4 bg-white`}
                  placeholder="Type your comments"
                ></textarea>

                <Button title={"Send Comments"} />
              </form>
            )
          ) : (
            ""
          )}{" "}
        </div>
        <div className=" p-4 md:w-2/5">
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
          <CategoriesHeading title={"Top Playlist"} />{" "}
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
          <CategoriesHeading title={"Receent Post"} />
          <div className=" flex flex-col gap-1 pt-4 ">
            <HomeRecentPost />
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoId;
