"use client";
import Charts from "@/components/Charts";
import Example from "@/components/Charts";
import Followers from "@/components/Followers";
import Post from "@/components/Post";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { FaBlog, FaComment, FaEye, FaUser } from "react-icons/fa";

function Overview() {
  const { theme, showSideBar } = useContext(ThemeContext);
  return (
    <>
      <section
        className={`${showSideBar ? "w-10/12" : "w-full"}  md:p-8 flex flex-col gap-4`}
      >
        <h1 className={`${theme}-text text-3xl font-bold`}>Overview</h1>
        <div className="grid grid-cols-2 p-2 md:grid-cols-4 gap-4">
          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`${theme}-text text-[10px] md:text-base`}>
                Total Posts
              </h1>
              <FaBlog className={`${theme}-text`} />
            </div>
            <div>
              <div className="flex">
                <h1 className={`${theme}-text font-bold text-2xl`}>4</h1>
                <p className={`text-green-500`}>34%</p>
              </div>

              <p className="text-gray-300 text-[9px] md:text-[11px]">
                Compared to the previous month
              </p>
            </div>
          </div>

          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`${theme}-text text-[10px] md:text-base`}>
                Followers
              </h1>
              <FaUser className={`${theme}-text`} />
            </div>

            <div>
              <div className="flex">
                <h1 className={`${theme}-text font-bold text-2xl`}>20</h1>
                <p className={`text-red-500`}>34%</p>
              </div>

              <p className="text-gray-300 text-[9px] md:text-[11px]">
                Compared to the previous month
              </p>
            </div>
          </div>

          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`${theme}-text`}>Total Views</h1>
              <FaEye className={`${theme}-text`} />
            </div>

            <div>
              <div className="flex">
                <h1 className={`${theme}-text font-bold text-2xl`}>408</h1>
                <p className={`text-red-500`}>26%</p>
              </div>

              <p className="text-gray-300 text-[11px]">
                Compared to the previous month
              </p>
            </div>
          </div>

          <div className="p-4 border border-gray-100 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`${theme}-text`}>Total Comments</h1>
              <FaComment className={`${theme}-text`} />
            </div>

            <div>
              <div className="flex">
                <h1 className={`${theme}-text font-bold text-2xl`}>50</h1>
                <p className={`text-green-500`}>84%</p>
              </div>

              <p className="text-gray-300 text-[11px]">
                Compared to the previous month
              </p>
            </div>
          </div>
        </div>

        <section className="w-full flex gap-4">
          <div className="3/5">
            <Charts />
          </div>

          <div className=" w-full md:w-2/6 rounded-lg">
            <h1 className={`${theme}-text font-bold`}>Recent 5 followers</h1>

            <div className="border flex justify-between border-gray-100 rounded-ss rounded-se p-4">
              <h1 className={`${theme}-text font-bold`}>Followers</h1>
              <p className={`${theme}-text font-bold`}>Date</p>
            </div>

            <Followers />

            <Followers />
            <Followers />
            <Followers />
          </div>
        </section>

        <section className="md:flex-row flex flex-col gap-4">
          <div className="w-full ">
            <h1 className={`${theme}-text font-bold`}>Recent 5 Content</h1>

            <div className="border flex justify-between border-gray-100 rounded-se rounded-ss p-4">
              <h1 className={`${theme}-text font-bold`}>Post Title</h1>
              <div className="flex gap-8">
                <h1 className={`${theme}-text`}>Views</h1>
                <h1 className={`${theme}-text`}>Date</h1>
              </div>
            </div>

            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </section>
      </section>
    </>
  );
}

export default Overview;
