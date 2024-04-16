"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

function Auth() {
  const { theme, authDisplay } = useContext(ThemeContext);

  const [newUser, setnewUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [signInUser, setsignInUser] = useState({
    username: "",
    password: "",
  });

  const handleSignin = (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  const [signuploading, setsignupLoading] = useState(false);
  const [signupSuccess, setsignupSuccess] = useState(false);
  const [signuperror, setsignupError] = useState(false);

  const handlesignin = async (e) => {
    e.preventDefault();

    try {
      setsignupLoading(true);
      console.log(newUser);

      const response = await axios.post(
        "https://b2xclusive.onrender.com/api/v1/auth/user/signup",
        newUser,
      );

      console.log("User SignUp Successfull", response);
      setsignupSuccess(true);
    } catch (error) {
      console.log("Sign up Failed", error.message);
      setsignupError(true);
    } finally {
      setsignupLoading(false);
    }
  };

  return (
    <>
      <section className="absolute right-0 left-0 top-0 bottom-0 w-full h-full py-8 bg-[#000000d6] z-50 flex justify-center items-center">
        <div className="md:flex h-full w-full md:w-4/6 relative">
          <div className="p-2 bg-primarycolor absolute top-0 right-0">
            <FaWindowClose className={`${theme}-text`} onClick={authDisplay} />
          </div>
          <div className={`${theme}-bgg ${theme}-text p-10 w-full md:w-2/4`}>
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

          <div
            className={`${theme}-bg relative ${theme}-text p-10 w-full md:w-2/4`}
          >
            <div className=" absolute top-5 flex w-full justify-center p-8 z-30">
              {signupSuccess ? (
                <div className="bg-green-600 p-2 rounded-lg">
                  <p className="md:text-sm text-[12px]">
                    Account created Successfully
                  </p>
                </div>
              ) : (
                ""
              )}

              {signuperror ? (
                <div className="bg-red-600 p-2 rounded-lg">
                  <p className="md:text-sm text-[12px]">
                    Account creation failed
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="py-10">
              <h1 className={`${theme}-text font-bold text-2xl`}>
                {signuploading
                  ? "Creating account please wait"
                  : "Create new Account"}
              </h1>

              <p className={`${theme}-text`}>
                Create your very own B2Exclusive account
              </p>
            </div>
            <form className={`${theme}-text flex flex-col gap-8`}>
              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Create Username</label>
                <input
                  onChange={(e) =>
                    setnewUser({ ...newUser, userName: e.target.value })
                  }
                  value={newUser.userName}
                  type="text"
                  placeholder="username or email address"
                  className="p-4 rounded-full bg-transparent outline-none border border-gray-700"
                />
              </div>

              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Email</label>
                <input
                  value={newUser.email}
                  onChange={(e) =>
                    setnewUser({ ...newUser, email: e.target.value })
                  }
                  type="email"
                  placeholder="username or email address"
                  className="p-4 rounded-full bg-transparent outline-none border border-gray-700"
                />
              </div>
              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Password</label>
                <input
                  value={newUser.password}
                  onChange={(e) =>
                    setnewUser({ ...newUser, password: e.target.value })
                  }
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

              <Button title={"Create Account"} onclick={handlesignin} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Auth;
