"use client";
import BlogPost from "@/components/BlogPost";
import CategoriesHeading from "@/components/CategoriesHeading";
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

      <section className=" md:w-5/6 md:p-8 mx-auto md:flex md:gap-8">
        <div className="w-full md:w-3/5">
          <div className="p-4 grid gap-4">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
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
              <p className={`${theme}-text`}>NEXT</p>
            </div>
          </section>
        </div>
        <div className=" p-4 md:w-2/5">
          {/* TOP ARTIST SECTION */}
          <h1 className={`${theme}-text font-bold`}>
            Discover more of what matters to you
          </h1>

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
            <FaFacebook className={`${theme}-text text-3xl `} />
            <FaTwitter className={`${theme}-text text-3xl `} />
            <FaLinkedin className={`${theme}-text text-3xl `} />
            <FaYoutube className={`${theme}-text text-3xl `} />
            <FaInstagram className={`${theme}-text text-3xl `} />
            <FaPinterest className={`${theme}-text text-3xl `} />
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
