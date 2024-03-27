"use client";
import Link from "next/link";
import {
  FaBlog,
  FaFacebook,
  FaHamburger,
  FaLinkedin,
  FaSoundcloud,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

import FlickerFeed from "@/components/FlickrFeed";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`${theme}-bgg p-8 flex flex-col gap-3`}>
        <h1 className={` ${theme}-text   md:text-3xl font-bold text-center`}>
          B2EXCLUSIVE
        </h1>

        <div className="flex justify-center items-center gap-4">
          <Link href={"#"} className={`${theme}-text text-sm`}>
            <FaFacebook />
          </Link>
          <Link href={"#"} className={`${theme}-text text-sm`}>
            <FaTwitter />
          </Link>
          <Link href={"#"} className={`${theme}-text text-sm`}>
            <FaLinkedin />
          </Link>
          <Link href={"#"} className={`${theme}-text text-sm`}>
            <FaYoutube />
          </Link>
          <Link href={"#"} className={`${theme}-text text-sm`}>
            <FaSoundcloud />
          </Link>
        </div>
      </div>

      <div className="bg-primarycolor p-4 ">
        <div className="flex flex-col items-center">
          <p>© 2024 B2EXCLUSIVE. All Right Reserved. </p>
          <div className="flex">
            <Link
              className="text-white  rounded-lg text-sm py-1 px-2  hover:bg-primarycolor"
              href={"#"}
            >
              Home
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"#"}
            >
              Blogs
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"#"}
            >
              Musics
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"#"}
            >
              Videos
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"#"}
            >
              About Us
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"#"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
