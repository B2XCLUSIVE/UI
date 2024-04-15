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

  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div
        className={`border-r border-gray-500 p-4   ${showSideBar ? "w-2/12" : "w-[60px]"} `}
      >
        <div className={`flex  justify-between`}>
          <h1
            className={`${theme}-text font-bold ${showSideBar ? "block" : "hidden"}`}
          >
            Menu
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
            <FaChartBar className="text-3xl" />
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
            <FaChartPie className="text-3xl" />
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
            <FaCalendar className="text-3xl" />
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
            <FaUser className="text-3xl" />
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
            <FaNotesMedical className="text-3xl" />
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
            <FaTools className="text-3xl" />
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
