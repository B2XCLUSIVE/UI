"use client";

const { ThemeContext } = require("@/context/ThemeContext");
const { useContext } = require("react");
const {
  FaArrowLeft,
  FaChartBar,
  FaRegChartBar,
  FaCalendar,
  FaUser,
  FaChartPie,
  FaNotesMedical,
  FaTools,
} = require("react-icons/fa");
import Link from "next/link";
function SideBar() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`border-r border-gray-500 p-4 w-2/12  `}>
        <div className="flex justify-between">
          <h1 className={`${theme}-text font-bold`}>Menu</h1>

          <FaArrowLeft className={`${theme}-text`} />
        </div>

        <div className="py-4">
          <Link
            href={"/overview"}
            className={`${theme}-text flex p-4 hover:bg-primarycolor items-center gap-2`}
          >
            <FaChartBar />
            Dashboard
          </Link>

          <Link
            href={"/analytics"}
            className={`${theme}-text flex p-4 hover:bg-primarycolor items-center gap-2`}
          >
            <FaChartPie />
            Analytics
          </Link>

          <Link
            href={"/contents"}
            className={`${theme}-text flex p-4 hover:bg-primarycolor items-center gap-2`}
          >
            <FaCalendar />
            Content
          </Link>

          <Link
            href={"/followers"}
            className={`${theme}-text flex p-4 hover:bg-primarycolor items-center gap-2`}
          >
            <FaUser />
            Followers
          </Link>

          <Link
            href={"/createpost"}
            className={`${theme}-text flex p-4 hover:bg-primarycolor items-center gap-2`}
          >
            <FaNotesMedical />
            Create Post
          </Link>

          <Link
            href={"/account"}
            className={`${theme}-text flex p-4 hover:bg-primarycolor items-center gap-2`}
          >
            <FaTools />
            Account
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
