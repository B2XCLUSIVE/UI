"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext, useState } from "react";
import {
  FaBlog,
  FaFacebook,
  FaHamburger,
  FaLinkedin,
  FaSoundcloud,
  FaToggleOff,
  FaToggleOn,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  function menushow() {
    setShowMenu(!showMenu);
  }

  const { theme, toggle } = useContext(ThemeContext);
  return (
    <>
      <div className="bg-gray-800 p-3 ">
        <div className="md:w-3/4 mx-auto flex items-center gap-4 text-white flex-nowrap overflow-hidden">
          <div className="bg-primarycolor p-2 rounded-lg">
            <p className="text-white text-sm">Breaking news</p>
          </div>
          <p className="text-sm"> Lorem ipsum, dolor sit amet consectetur</p>
        </div>
      </div>

      <div
        className={
          theme === "light"
            ? "bg-gray-950 p-8 relative flex flex-col"
            : "bg-white p-8 relative flex flex-col"
        }
      >
        <div className="w-full md:w-3/4 mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:gap-0 md:justify-between">
            <div className="flex justify-center items-center gap-3">
              <p
                className={`${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-sm font-bold`}
              >
                Follow us
              </p>
              <Link
                href={"#"}
                className={`${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-sm`}
              >
                <FaFacebook />
              </Link>
              <Link
                href={"#"}
                className={`${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-sm`}
              >
                <FaTwitter />
              </Link>
              <Link
                href={"#"}
                className={`${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-sm`}
              >
                <FaLinkedin />
              </Link>
              <Link
                href={"#"}
                className={`${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-sm`}
              >
                <FaYoutube />
              </Link>
              <Link
                href={"#"}
                className={`${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-sm`}
              >
                <FaSoundcloud />
              </Link>
            </div>
            <div>
              <h1
                className={` ${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-3xl font-bold text-center `}
              >
                B2EXCLUSIVE
              </h1>
            </div>
            <div
              className={` ${
                theme === "light" ? "text-white" : "text-gray-950"
              } flex  justify-between md:items-center gap-3 md:justify-normal `}
            >
              <div className="flex items-center gap-3">
                <Link href={"#"}>
                  <FaBlog />
                </Link>
                <Link href={"#"}>
                  <FaUser />
                </Link>

                <div onClick={toggle}>
                  {theme === "light" ? (
                    <FaToggleOn className="text-xl" />
                  ) : (
                    <FaToggleOff className="text-xl" />
                  )}
                </div>
              </div>

              <div className="relative">
                <FaHamburger
                  className={`md:hidden w-[40px] h-[40px] p-2 ${
                    theme === "light" ? "text-white" : "text-gray-950"
                  }`}
                  onClick={menushow}
                />

                {showMenu ? (
                  <div className=" z-10 absolute right-0 flex flex-col bg-gray-800 w-[250px] m-2">
                    <Link
                      className="border-b-2 text-white   text-sm p-4  hover:bg-primarycolor"
                      href={"/"}
                    >
                      Home
                    </Link>
                    <Link
                      className=" border-b-2 text-white text-sm p-4  hover:bg-primarycolor"
                      href={"#"}
                    >
                      Blogs
                    </Link>

                    <Link
                      className=" border-b-2 text-white text-sm p-4  hover:bg-primarycolor"
                      href={"/upcomingevents"}
                    >
                      Event
                    </Link>
                    <Link
                      className=" border-b-2 text-white text-sm p-4  hover:bg-primarycolor"
                      href={"/artists"}
                    >
                      Artists
                    </Link>
                    <Link
                      className=" border-b-2 text-white text-sm p-4  hover:bg-primarycolor"
                      href={"/musics"}
                    >
                      Musics
                    </Link>
                    <Link
                      className=" border-b-2 text-white text-sm p-4  hover:bg-primarycolor"
                      href={"/videoshome"}
                    >
                      Videos
                    </Link>
                    <Link
                      className=" border-b-2 text-white text-sm p-4  hover:bg-primarycolor"
                      href={"/about"}
                    >
                      About Us
                    </Link>
                    <Link
                      className=" border-b-2 text-white text-sm p-4  hover:bg-primarycolor"
                      href={"/contact"}
                    >
                      Contact Us
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg hidden md:flex py-3 px-20 absolute left-0 right-0 -bottom-14 w-3/4 mx-auto justify-between">
            <Link
              className="text-white  rounded-lg text-sm py-1 px-2  hover:bg-primarycolor"
              href={"/"}
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
              href={"/upcomingevents"}
            >
              Event
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"/artists"}
            >
              Artists
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"#"}
            >
              Musics
            </Link>
            <Link
              className="text-white text-sm py-1 px-2  hover:bg-primarycolor rounded-lg"
              href={"/videoshome"}
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

export default Header;
