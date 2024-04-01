"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Button from "./Button";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";

function Auth() {
  const { theme, authDisplay } = useContext(ThemeContext);
  return (
    <>
      <section className="absolute right-0 left-0 top-0 bottom-0 w-full h-min py-8 bg-[#000000d6] z-50 flex justify-center items-center">
        <div className="md:flex h-full w-4/6 relative">
          <div className="p-2 bg-primarycolor absolute top-0 right-0">
            <FaWindowClose className={`${theme}-text`} onClick={authDisplay} />
          </div>
          <div className={`${theme}-bgg ${theme}-text p-10 md:w-2/4`}>
            <div className="py-10">
              <h1 className={`font-bold text-2xl ${theme}-text`}>Sign In</h1>

              <p className={`${theme}-text`}>
                Welcome back! sign in to your account
              </p>
            </div>
            <form className={`${theme}-text flex flex-col gap-8`}>
              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">
                  Username Or Email Address
                </label>
                <input
                  type="text"
                  placeholder="username or email address"
                  className="p-4 rounded-full bg-transparent outline-none border"
                />
              </div>

              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  className="p-4 rounded-full bg-transparent outline-none border"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-md">Sign in as</label>
                <select
                  name=""
                  id=""
                  className="p-4 rounded-full bg-transparent outline-none border"
                >
                  <option value="">User</option>
                  <option value="">Admin</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className={`${theme}-text`}>Remember Me</p>
                </div>
                <Link href={"/forgotpassword"}>Forgot Password</Link>
              </div>

              <Button title={"Sign In"} />
            </form>
          </div>

          <div className={`${theme}-bg ${theme}-text p-10 md:w-2/4`}>
            <div className="py-10">
              <h1 className={`${theme}-text font-bold text-2xl`}>
                Create New Account
              </h1>

              <p className={`${theme}-text`}>
                Create your very own B2Exclusive account
              </p>
            </div>
            <form className={`${theme}-text flex flex-col gap-8`}>
              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">
                  Username Or Email Address
                </label>
                <input
                  type="text"
                  placeholder="username or email address"
                  className="p-4 rounded-full bg-transparent outline-none border border-gray-700"
                />
              </div>

              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  className="p-4 rounded-full bg-transparent outline-none border border-gray-700"
                />
              </div>

              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Confirm Password</label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="p-4 rounded-full bg-transparent outline-none border border-gray-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-md">Create Account as</label>
                <select
                  name=""
                  id=""
                  className="p-4 rounded-full bg-transparent outline-none border border-gray-700"
                >
                  <option value="">User</option>
                  <option value="">Admin</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <p className={`${theme}-text`}>Remember Me</p>
                </div>
                <Link href={"/forgotpassword"}>Forgot Password</Link>
              </div>

              <Button title={"Create Account"} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auth;
