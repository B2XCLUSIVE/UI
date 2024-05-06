"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  FaBlog,
  FaFacebook,
  FaHamburger,
  FaLinkedin,
  FaLock,
  FaSoundcloud,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "react-toastify";
function Header() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  function menushow() {
    setShowMenu(!showMenu);
  }

  const { user, signin, profileOptions } = useContext(ThemeContext);

  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("b2exclusiveuserid")
      : null;

  const handleLogout = () => {
    try {
      if (localStorage.getItem("b2exclusiveuser") !== null) {
        localStorage.setItem("b2exclusiveuser", null);
        localStorage.setItem("b2exclusiveuserid", null);
        toast.success(`Logout Successfull`, { position: "top-center" });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.warn(`No user data found`, { position: "top-center" });
      }
    } catch (error) {
      console.log("Error signing out", error.message);
      toast.error(`Unable to logout user`, { position: "top-center" });
    }
  };
  return (
    <>
      <div className={`p-4 `}>
        <div
          className={`md:w-3/4 mx-auto flex items-center gap-4 flex-nowrap overflow-hidden`}
        >
          <div className="bg-primarycolor p-2 rounded-lg">
            <p className={` text-[10px]`}>Breaking news</p>
          </div>
          <p className={`text-[10px]`}>Lorem ipsum,</p>
        </div>
      </div>

      <div className="bg-white p-8 relative flex flex-col">
        <div className="w-full md:w-3/4 mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between">
            <div className="flex justify-center items-center gap-3">
              <p
                className={`
                 text-sm font-bold `}
              >
                Follow us
              </p>
              <Link href={"#"} className={`text-sm`}>
                <FaFacebook />
              </Link>
              <Link href={"#"} className={`text-sm`}>
                <FaTwitter />
              </Link>
              <Link href={"#"} className={`text-sm`}>
                <FaLinkedin />
              </Link>
              <Link href={"#"} className={`text-sm`}>
                <FaYoutube />
              </Link>
              <Link href={"#"} className={`text-sm`}>
                <FaSoundcloud />
              </Link>
            </div>
            <div>
              <h1 className={`md:text-3xl font-bold text-center `}>
                B2EXCLUSIVE
              </h1>
            </div>
            <div
              className={` flex  justify-between md:items-center gap-3 md:justify-normal `}
            >
              <div className="flex items-center gap-3">
                <Link href={"#"}>
                  <FaBlog />
                </Link>
                {user === null ? (
                  <Link href={"/login"} className="flex items-center gap-2">
                    <FaLock className={``} />
                    <p className={`md:text-base text-[11px]`}>Login</p>
                  </Link>
                ) : (
                  <div onClick={profileOptions} className="relative z-50">
                    {signin ? (
                      <div className="absolute top-8 bg-white w-full flex border flex-col z-30 ">
                        <Link
                          className="md:text-base p-2 hover:bg-primarycolor hover:text-white text-[11px]"
                          href={`/${userId}`}
                        >
                          Account
                        </Link>
                        <div
                          onClick={handleLogout}
                          className="md:text-base p-2 hover:bg-primarycolor hover:text-white cursor-pointer text-[11px]"
                        >
                          Logout
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <Link href={"#"} className="flex items-center gap-2">
                      <FaUser className={``} />
                      <p className={`md:text-base text-[11px]`}>My Profile</p>
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <FaHamburger
                  className={`md:hidden w-[40px] h-[40px] p-2 `}
                  onClick={menushow}
                />

                {showMenu ? (
                  <div
                    className={`bg-white z-50 absolute right-0 flex flex-col  w-[150px] m-2" `}
                  >
                    <div
                      className={`border-b-2  md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/");
                        setShowMenu(false);
                      }}
                    >
                      Home
                    </div>
                    <div
                      className={` border-b-2  md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/blogs");
                        setShowMenu(false);
                      }}
                    >
                      Blogs
                    </div>

                    <div
                      className={` border-b-2 md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/upcomingevents");
                        setShowMenu(false);
                      }}
                    >
                      Event
                    </div>
                    <div
                      className={` border-b-2 md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/artists");
                        setShowMenu(false);
                      }}
                    >
                      Artists
                    </div>
                    <div
                      className={` border-b-2 md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/musics");
                        setShowMenu(false);
                      }}
                    >
                      Musics
                    </div>
                    <div
                      className={` border-b-2  md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/videoshome");
                        setShowMenu(false);
                      }}
                    >
                      Videos
                    </div>
                    <div
                      className={` border-b-2  md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/about");
                        setShowMenu(false);
                      }}
                    >
                      About Us
                    </div>
                    <div
                      className={` border-b-2  md:text-base text-[11px] p-4  hover:bg-primarycolor`}
                      onClick={() => {
                        router.push("/contact");
                        setShowMenu(false);
                      }}
                    >
                      Contact Us
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div
            className={` rounded-lg z-30 hidden md:flex py-3 px-20 absolute left-0 right-0 -bottom-14 w-3/4 mx-auto justify-between backdrop-blur-lg`}
          >
            <Link
              className={` rounded-lg text-white text-sm py-1 px-2  hover:bg-primarycolor`}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={` text-sm py-1 px-2 text-white hover:bg-primarycolor rounded-lg`}
              href={"blogs"}
            >
              Blogs
            </Link>

            <Link
              className={` text-sm py-1 px-2 text-white  hover:bg-primarycolor rounded-lg`}
              href={"/upcomingevents"}
            >
              Event
            </Link>
            <Link
              className={` text-sm py-1 px-2 text-white  hover:bg-primarycolor rounded-lg`}
              href={"/artists"}
            >
              Artists
            </Link>
            <Link
              className={` text-sm py-1 px-2 text-white  hover:bg-primarycolor rounded-lg`}
              href={"/musics"}
            >
              Musics
            </Link>

            <Link
              className={`text-sm py-1 px-2 text-white hover:bg-primarycolor rounded-lg`}
              href={"/videoshome"}
            >
              Videos
            </Link>
            <Link
              className={`text-sm py-1 px-2 text-white  hover:bg-primarycolor rounded-lg`}
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className={`text-sm py-1 px-2 text-white  hover:bg-primarycolor rounded-lg`}
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
