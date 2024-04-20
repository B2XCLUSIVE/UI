"use client";

const { ThemeContext } = require("@/context/ThemeContext");
const { useContext, useState } = require("react");
const {
  FaArrowLeft,
  FaChartBar,
  FaRegChartBar,
  FaCalendar,
  FaUser,
  FaChartPie,
  FaNotesMedical,
  FaTools,
  FaHamburger,
} = require("react-icons/fa");
import Link from "next/link";
function SideBar() {
  const { theme } = useContext(ThemeContext);

  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <div
        className={` h-screen p-4 ${theme}-bgg  ${showSideBar ? "md:w-2/12" : " md:w-[70px]"}  `}
      >
        <div className={`flex ${showSideBar ? "p-4" : "p-2"} justify-between`}>
          <h1
            className={`${theme}-text font-bold ${showSideBar ? "block" : "hidden"}`}
          >
            B2XCLUSIVE
          </h1>

          <FaHamburger
            className={`${theme}-text cursor-pointer text-xl `}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        </div>

        <div className="py-4">
          <Link
            href={"/overview"}
            className={`${theme}-text flex ${showSideBar ? "p-4" : "p-2"} hover:bg-primarycolor rounded-lg items-center gap-2  `}
          >
            <FaChartBar className="text-xl" />
            <p
              className={` ${showSideBar ? "block" : "hidden"} ${theme}-text  `}
            >
              Dashboard
            </p>
          </Link>

          <Link
            href={"/overview"}
            className={`${theme}-text flex ${showSideBar ? "p-4" : "p-2"} hover:bg-primarycolor rounded-lg items-center gap-2  `}
          >
            <FaChartPie className="text-xl" />
            <p
              className={` ${showSideBar ? "block" : "hidden"}  ${theme}-text  `}
            >
              Analytics
            </p>
          </Link>

          <Link
            href={"/overview"}
            className={`${theme}-text flex ${showSideBar ? "p-4" : "p-2"} hover:bg-primarycolor rounded-lg items-center gap-2  `}
          >
            <FaCalendar className="text-xl" />
            <p
              className={` ${showSideBar ? "block" : "hidden"}  ${theme}-text `}
            >
              Content
            </p>
          </Link>

          <Link
            href={"/overview"}
            className={`${theme}-text flex ${showSideBar ? "p-4" : "p-2"} hover:bg-primarycolor rounded-lg items-center gap-2  `}
          >
            <FaUser className="text-xl" />
            <p
              className={` ${showSideBar ? "block" : "hidden"}  ${theme}-text `}
            >
              Followers
            </p>
          </Link>

          <Link
            href={"/overview"}
            className={`${theme}-text flex ${showSideBar ? "p-4" : "p-2"} hover:bg-primarycolor rounded-lg items-center gap-2  `}
          >
            <FaNotesMedical className="text-xl" />
            <p
              className={` ${showSideBar ? "block" : "hidden"}  ${theme}-text `}
            >
              Create Post
            </p>
          </Link>

          <Link
            href={"/overview"}
            className={`${theme}-text flex ${showSideBar ? "p-4" : "p-2"} hover:bg-primarycolor rounded-lg items-center gap-2  `}
          >
            <FaTools className="text-xl" />
            <p
              className={` ${showSideBar ? "block" : "hidden"}  ${theme}-text `}
            >
              Account
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
