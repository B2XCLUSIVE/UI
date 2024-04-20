"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext, useState } from "react";
import {
  FaBlog,
  FaFacebook,
  FaHamburger,
  FaLinkedin,
  FaLock,
  FaSoundcloud,
  FaToggleOff,
  FaToggleOn,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import Auth from "./Auth";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  function menushow() {
    setShowMenu(!showMenu);
  }

  const { theme, toggle, showAuth, authDisplay, user, signin, profileOptions } =
    useContext(ThemeContext);

  console.log(user);

  return (
    <>
      <div className={` ${theme}-bg p-4`}>
        {showAuth && <Auth />}
        <div
          className={`md:w-3/4 mx-auto flex items-center gap-4 flex-nowrap overflow-hidden`}
        >
          <div className="bg-primarycolor p-2 rounded-lg">
            <p className={`${theme}-text text-[10px]`}>Breaking news</p>
          </div>
          <p className={`${theme}-text text-[10px]`}>Lorem ipsum,</p>
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
          <div className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between">
            <div className="flex justify-center items-center gap-3">
              <p
                className={`${
                  theme === "light" ? "text-white" : "text-gray-950"
                } text-sm font-bold `}
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
                } md:text-3xl font-bold text-center `}
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
                {user === null ? (
                  <Link
                    href={"#"}
                    className="flex items-center gap-2"
                    onClick={authDisplay}
                  >
                    <FaLock className={`${theme}-text`} />
                    <p className={`${theme}-text md:text-base text-[11px]`}>
                      Login
                    </p>
                  </Link>
                ) : (
                  <div onClick={profileOptions} className="relative z-50">
                    {signin ? (
                      <div className="absolute top-8 bg-white w-full flex border flex-col gap-2 p-2 z-30 ">
                        <Link className="md:text-base text-[11px]" href={"#"}>
                          Account
                        </Link>
                        <Link className="md:text-base text-[11px]" href={"#"}>
                          Logout
                        </Link>
                      </div>
                    ) : (
                      ""
                    )}
                    <Link href={"#"} className="flex items-center gap-2">
                      <FaUser className={`${theme}-text`} />
                      <p className={`${theme}-text md:text-base text-[11px]`}>
                        My Profile
                      </p>
                    </Link>
                  </div>
                )}
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
                  <div
                    className={` z-50 absolute right-0 flex flex-col ${theme}-bgg w-[150px] m-2" `}
                  >
                    <Link
                      className={`border-b-2 ${theme}-text  md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      href={"/"}
                    >
                      Home
                    </Link>
                    <Link
                      className={` border-b-2 ${theme}-text md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      href={"/blogs"}
                    >
                      Blogs
                    </Link>

                    <Link
                      className={` border-b-2 ${theme}-text md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      href={"/upcomingevents"}
                    >
                      Event
                    </Link>
                    <Link
                      className={` border-b-2 ${theme}-text md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      href={"/artists"}
                    >
                      Artists
                    </Link>
                    <Link
                      className={` border-b-2 ${theme}-text md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      href={"/musics"}
                    >
                      Musics
                    </Link>
                    <Link
                      className={` border-b-2 ${theme}-text md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      href={"/videoshome"}
                    >
                      Videos
                    </Link>
                    <Link
                      className={` border-b-2 ${theme}-text md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      href={"/about"}
                    >
                      About Us
                    </Link>
                    <Link
                      className={` border-b-2 ${theme}-text md:text-base text-[11px] p-4  hover:bg-primarycolor`}
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

          <div
            className={` rounded-lg z-30 hidden md:flex py-3 px-20 absolute left-0 right-0 -bottom-14 w-3/4 mx-auto justify-between ${theme}-head-bg backdrop-blur-lg`}
          >
            <Link
              className={`${theme}-text  rounded-lg text-sm py-1 px-2  hover:bg-primarycolor`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`${theme}-text text-sm py-1 px-2  hover:bg-primarycolor rounded-lg`}
              href={"blogs"}
            >
              Blogs
            </Link>

            <Link
              className={`${theme}-text text-sm py-1 px-2  hover:bg-primarycolor rounded-lg`}
              href={"/upcomingevents"}
            >
              Event
            </Link>
            <Link
              className={`${theme}-text text-sm py-1 px-2  hover:bg-primarycolor rounded-lg`}
              href={"/artists"}
            >
              Artists
            </Link>
            <Link
              className={`${theme}-text text-sm py-1 px-2  hover:bg-primarycolor rounded-lg`}
              href={"/musics"}
            >
              Musics
            </Link>
            <Link
              className={`${theme}-text text-sm py-1 px-2  hover:bg-primarycolor rounded-lg`}
              href={"/videoshome"}
            >
              Videos
            </Link>
            <Link
              className={`${theme}-text text-sm py-1 px-2  hover:bg-primarycolor rounded-lg`}
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className={`${theme}-text text-sm py-1 px-2  hover:bg-primarycolor rounded-lg`}
              href={"/contact"}
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
