"use client";
import BlogPost from "@/components/BlogPost";
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

function Blogs() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader
        title={"Trending Stories"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quae dolores? Unde similique beatae aspernatur dolore corporis tempore exercitationem."
        }
      />

      <section className=" md:w-5/6 p-8 mx-auto md:flex md:gap-8">
        <div>
          <div className="p-4 w-full flex flex-col  md:w-3/5 md:grid md:grid-cols-2 gap-4  ">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>

          <section className=" p-8 mx-auto gap-2 flex justify-center ">
            <div className="border  p-2 ">
              <p>PREV</p>
            </div>

            <div className="border  p-2 ">
              <p>1</p>
            </div>

            <div className="border  p-2 ">
              <p>2</p>
            </div>

            <div className="border  p-2 ">
              <p>3</p>
            </div>

            <div className="border  p-2 ">
              <p>4</p>
            </div>

            <div className="border  p-2 ">
              <p>...</p>
            </div>

            <div className="border  p-2 ">
              <p>NEXT</p>
            </div>
          </section>
        </div>
        <div className=" p-4 md:w-2/5">
          {/* TOP ARTIST SECTION */}
          <div className={`p-4 my-4 rounded-lg ${theme}-bgg`}>
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
          <div className={`p-4 my-4 rounded-lg ${theme}-bgg`}>
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
          <div className={`p-4 my-4 rounded-lg ${theme}-bgg`}>
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
          <div className={`p-4 my-4 rounded-lg ${theme}-bgg`}>
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

export default Blogs;
