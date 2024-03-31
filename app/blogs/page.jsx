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
          <div className="p-4 grid grid-cols-2 gap-4">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>

          <section className=" p-4 md:p-8 mx-auto gap-2 flex justify-center ">
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
          <CategoriesHeading title={"Top 10 Artists"} />

          <div className="grid grid-cols-2 md:flex md:flex-col gap-2 py-2">
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
