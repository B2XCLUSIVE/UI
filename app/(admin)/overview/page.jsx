"use client";
import Charts from "@/components/Charts";
import Example from "@/components/Charts";
import Followers from "@/components/Followers";
import Post from "@/components/Post";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { FaBlog, FaComment, FaEye, FaUser } from "react-icons/fa";

function Overview() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="w-10/12 p-8 flex flex-col gap-4">
        <h1 className={`${theme}-text text-3xl font-bold my-2`}>Overview</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 border border-gray-600 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`${theme}-text`}>Total Posts</h1>
              <FaBlog className={`${theme}-text`} />
            </div>

            <div>
              <div className="flex">
                <h1 className={`${theme}-text font-bold text-2xl`}>4</h1>
                <p className={`text-green-500`}>34%</p>
              </div>

              <p className="text-gray-300 text-[11px]">
                Compared to the previous month
              </p>
            </div>
          </div>

          <div className="p-4 border border-gray-600 flex flex-col justify-between h-[120px] rounded-lg">
            <div className="flex justify-between">
              <h1 className={`${theme}-text`}>Followers</h1>
              <FaUser className={`${theme}-text`} />
            </div>

            <div>
              <div className="flex">
                <h1 className={`${theme}-text font-bold text-2xl`}>20</h1>
                <p className={`text-red-500`}>34%</p>
              </div>

              <p className="text-gray-300 text-[11px]">
                Compared to the previous month
              </p>
            </div>
          </div>

          <div className="p-4 border border-gray-600 flex flex-col justify-between h-[120px] rounded-lg">
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

          <div className="p-4 border border-gray-600 flex flex-col justify-between h-[120px] rounded-lg">
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

        <section>
          <Charts />
        </section>

        <section className="flex gap-4">
          <div className=" w-2/6 rounded-lg">
            <h1 className={`${theme}-text font-bold`}>Recent 5 followers</h1>

            <div className="border flex justify-between border-gray-600 rounded-ss rounded-se p-4">
              <h1 className={`${theme}-text font-bold`}>Followers</h1>
              <p className={`${theme}-text font-bold`}>Date</p>
            </div>

            <Followers />

            <Followers />
            <Followers />
            <Followers />
          </div>

          <div className="w-4/6">
            <h1 className={`${theme}-text font-bold`}>Recent 5 Content</h1>

            <div className="border flex justify-between border-gray-600 rounded-se rounded-ss p-4">
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
