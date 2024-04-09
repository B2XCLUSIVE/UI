"use client";
import Button from "@/components/Button";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

function Account() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className="w-10/12">
        <div className="bg-gradient-to-tr from-primarycolor to-orange-600 p-8 md:p-20 flex flex-col items-center relative">
          <div className="absolute flex justify-between items-center  left-10 -bottom-24 right-10">
            <div className="flex items-center gap-4">
              <div className="w-[100px] h-[100px] border-white rounded-full border-4">
                <Image
                  src={"/alb.jpeg"}
                  width={1000}
                  height={1000}
                  alt="alb"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <h1 className={`${theme}-text font-bold text-2xl`}>
                  Profile Details
                </h1>
                <p className={`${theme}-text`}>
                  Update your photo and personal details{" "}
                </p>
              </div>
            </div>

            <div>
              <Button title={"Save"} />
            </div>
          </div>
        </div>

        <section className="w-full mt-28">
          <form action="">
            <div className="flex py-4 border-b-gray-200 border-b ">
              <label htmlFor="" className="w-2/6">
                username
              </label>
              <div className="flex w-4/6 ">
                <p className={`${theme}-text w-1/4 p-2 border rounded-lg`}>
                  b2xclusive/
                </p>
                <input
                  type="text"
                  className="p-2 bg-transparent border rounded-lg w-3/4"
                  placeholder="sirhmvfx"
                />
              </div>
            </div>
            <div className="flex py-4 border-b-gray-200 border-b ">
              <label htmlFor="" className="w-2/6">
                Your Photo
              </label>
              <div className="flex w-4/6 justify-between ">
                <div className="w-[60px] h-[60px] rounded-full">
                  <Image
                    src={"/alb.jpeg"}
                    width={1000}
                    height={1000}
                    alt="alb"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex items-center">
                  <button className="border p-4 rounded-lg">Delete</button>
                  <Button title={"Update"} />
                </div>
              </div>
            </div>

            <div className="flex py-4 border-b-gray-200 border-b ">
              <label htmlFor="" className="w-2/6">
                Your Bio
              </label>
              <div className="flex w-4/6 ">
                <textarea
                  name=""
                  id=""
                  placeholder="Write a short bio here"
                  className="p-2 bg-transparent border rounded-lg w-full h-[200px]"
                ></textarea>
              </div>
            </div>

            <div className="flex py-4 border-b-gray-200 border-b ">
              <label htmlFor="" className="w-2/6">
                Role
              </label>
              <div className="flex w-4/6 ">
                <input
                  type="text"
                  className="p-2 bg-transparent border rounded-lg w-3/4"
                  placeholder="Writer"
                />
              </div>
            </div>

            <div className="flex py-4 border-b-gray-200 border-b ">
              <label htmlFor="" className="w-2/6">
                Facebook
              </label>
              <div className="flex w-4/6 ">
                <input
                  type="text"
                  className="p-2 bg-transparent border rounded-lg w-full"
                  placeholder="@username1"
                />
              </div>
            </div>

            <div className="flex py-4 border-b-gray-200 border-b ">
              <label htmlFor="" className="w-2/6">
                Instagram
              </label>
              <div className="flex w-4/6 ">
                <input
                  type="text"
                  className="p-2 bg-transparent border rounded-lg w-full"
                  placeholder="@username1"
                />
              </div>
            </div>

            <div className="flex py-4 border-b-gray-200 border-b ">
              <label htmlFor="" className="w-2/6">
                Twitter
              </label>
              <div className="flex w-4/6 ">
                <input
                  type="text"
                  className="p-2 bg-transparent border rounded-lg w-full"
                  placeholder="@username1"
                />
              </div>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Account;