"use client";
import AlbumCover from "@/components/AlbumCover";
import CategoriesHeading from "@/components/CategoriesHeading";
import Event from "@/components/Event";
import RecentPost from "@/components/RecentPost";
import Top40 from "@/components/Top40";
import TopMusic from "@/components/TopMusic";
import TopPlaylist from "@/components/TopPlaylist";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
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
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      <section className="herosection p-8 md:p-12">
        <p>The B2EXCLUSIVE Blog</p>
        <h1 className="text-4xl font-extrabold text-center">
          Stories, Thoughts <br /> Ideas and More
        </h1>

        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, non
          optio. Ipsa culpa quibusdam necessitatibus!
        </p> 

        <div className="flex gap-4">
          <Link
            className="py-1 px-4 rounded-full border border-white"
            href={"#"}
          >
            Continue
          </Link>
          <Link
            className="py-1 px-4 rounded-full border border-white"
            href={"#"}
          >
            Explore
          </Link>
        </div>
      </section>

      <section className="md:w-5/6 mx-auto md:flex gap-4 p-4">
        <div className="w-full h-48 relative">
          <Image
            src={"/talk.jpeg"}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="music"
          />

          <div className="absolute top-6 left-6 flex flex-col">
            <h1 className="font-bold text-xl">The Top 50</h1>
            <p>Trending Discussions</p>
            <FaBook className="text-2xl" />
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
            <h1 className="font-bold text-xl">Trending Discussions</h1>
            <p>Latests Gists</p>
            <FaMicrophone className="text-2xl" />
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
            <h1 className="font-bold text-xl">Trending Musics</h1>
            <p>Nigeria</p>
            <FaMusic className="text-2xl" />
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
              <FaBackward
                className={`${theme}-text border w-12 h-12 p-2 text-white`}
              />
              <FaForward
                className={`${theme}-text border w-12 h-12 p-2 text-white`}
              />
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
              <FaBackward
                className={`${theme}-text border w-12 h-12 p-2 text-white`}
              />
              <FaForward
                className={`${theme}-text border w-12 h-12 p-2 text-white`}
              />
            </div>
          </div>

          {/* RECENT POST SECTION */}
          <CategoriesHeading title={"Recent Posts"} />

          <div className="grid md:grid-cols-2 gap-4 p-4 ">
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
            <RecentPost />
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
            <FaFacebook className={` ${theme}-text text-3xl `} />
            <FaTwitter className={` ${theme}-text text-3xl `} />
            <FaLinkedin className={` ${theme}-text text-3xl `} />
            <FaYoutube className={` ${theme}-text text-3xl `} />
            <FaInstagram className={` ${theme}-text text-3xl `} />
            <FaPinterest className={` ${theme}-text text-3xl `} />
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

          <div className={`${theme}-bgg p-4 mt-4`}>
            <div className="h-[200px] relative">
              <Image
                src={"/albumcover.jpeg"}
                width={1000}
                height={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 p-4">
                <h1 className="font-bold text-2xl">
                  All red carpet looks 2018 music awards
                </h1>
                <p>Arditta Colle -25 July, 2018</p>
              </div>
            </div>

            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
        </div>

        <div>
          <CategoriesHeading title={"Live Concerts"} />

          <div className={`${theme}-bgg p-4 mt-4`}>
            <div className="h-[200px] relative">
              <Image
                src={"/albumcover.jpeg"}
                width={1000}
                height={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 p-4">
                <h1 className="font-bold text-2xl">
                  All red carpet looks 2018 music awards
                </h1>
                <p>Arditta Colle -25 July, 2018</p>
              </div>
            </div>

            <RecentPost />
            <RecentPost />
            <RecentPost />
          </div>
        </div>

        <div>
          <CategoriesHeading title={"New Albums"} />

          <div className={`${theme}-bgg p-4 mt-4`}>
            <div className="h-[200px] relative">
              <Image
                src={"/albumcover.jpeg"}
                width={1000}
                height={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 p-4">
                <h1 className="font-bold text-2xl">
                  All red carpet looks 2018 music awards
                </h1>
                <p>Arditta Colle -25 July, 2018</p>
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
