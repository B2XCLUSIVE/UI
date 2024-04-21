"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

function Login() {
  const { theme, setUser } = useContext(ThemeContext);
  const router = useRouter();

  const [signInUser, setsignInUser] = useState({
    email: "",
    password: "",
  });

  const [signinloading, setsigninLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setsigninLoading(true);
    try {
      setsigninLoading(true);
      const response = await axios.post(
        "https://b2xclusive.onrender.com/api/v1/auth/user/signin",
        signInUser,
      );

      const userData = response?.data;
      setUser(userData?.data?.token);
      toast.success(userData.message, {
        position: "top-center",
      });
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log("unable to sign in", error.message);
      toast.error(error?.response?.data?.message || "Failed to sign in", {
        position: "top-center",
      });
    } finally {
      setsigninLoading(false);
    }
  };

  useEffect(() => {
    if (signInUser.email.length > 0 && signInUser.password.length > 8) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [signInUser]);

  return (
    <>
      <div className="md:flex h-full md:w-3/6 w-full md:p-8 mx-auto relative">
        <ToastContainer />
        <div className={`${theme}-bg ${theme}-text p-10 w-full`}>
          <div className="py-10">
            <h1 className={`font-bold text-2xl ${theme}-text`}>Sign In</h1>

            <p className={`${theme}-text`}>
              Welcome back! sign in to your account
            </p>
          </div>
          <form className={`${theme}-text flex flex-col gap-8`}>
            <div className="flex  flex-col gap-2">
              <label className="font-bold text-md">Email Address</label>
              <input
                value={signInUser.email}
                onChange={(e) =>
                  setsignInUser({ ...signInUser, email: e.target.value })
                }
                type="email"
                placeholder="email address"
                className="p-4 rounded-full bg-transparent outline-none border"
              />
            </div>

            <div className="flex  flex-col gap-2">
              <label className="font-bold text-md">Password</label>
              <input
                value={signInUser.password}
                onChange={(e) =>
                  setsignInUser({ ...signInUser, password: e.target.value })
                }
                type="password"
                placeholder="password"
                className="p-4 rounded-full bg-transparent outline-none border"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p className={`${theme}-text `}>Remember Me</p>
              </div>
              <Link href={"/forgotpassword"}>Forgot Password</Link>
            </div>

            {buttonDisabled ? (
              <button
                disabled
                className=" text-[14px] px-3 py-2 rounded-lg md:py-4 md:px-8 bg-gray-300 cursor-help text-white"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={handleSignin}
                className={`${signinloading ? "bg-orange-100" : "bg-primarycolor"} text-[14px] flex justify-center px-3 py-2 rounded-lg md:py-4 md:px-8  text-white `}
              >
                {signinloading ? (
                  <AiOutlineLoading3Quarters className=" text-primarycolor text-center text-xl font-bold animate-spin infinite" />
                ) : (
                  "Sign In"
                )}
              </button>
            )}

            <Link href={"/signup"} className="md:text-base text-[14px]">
              Don&apos;t have an account yet? SIGN UP
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
