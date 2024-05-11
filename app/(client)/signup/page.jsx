"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

function SignUp() {
  const { theme, setUser } = useContext(ThemeContext);
  const router = useRouter();

  const [signUpUser, setsignUpUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [signUploading, setsignUpLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setsignUpLoading(true);
    try {
      setsignUpLoading(true);
      const response = await axios.post(
        "https://b2xclusive.onrender.com/api/v1/auth/user/signup",
        signUpUser,
      );

      toast.success(response?.data?.message, {
        position: "top-center",
      });
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.log("unable to sign up", error.message);
      toast.error(error?.response?.data?.message || "Failed to sign up", {
        position: "top-center",
      });
    } finally {
      setsignUpLoading(false);
    }
  };

  useEffect(() => {
    if (signUpUser.email.length > 0 && signUpUser.password.length > 7) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [signUpUser]);

  return (
    <>
      <div className="md:flex h-full md:w-3/6 w-full md:p-8 mx-auto relative">
        <div className={`${theme}-bg ${theme}-text p-10 w-full`}>
          <div className="py-10">
            <h1 className={`font-bold text-2xl ${theme}-text`}>
              Create an account
            </h1>

            <p className={`${theme}-text`}>Create your b2xclusive account</p>
          </div>
          <form className={`${theme}-text flex flex-col gap-8`}>
            <div className="flex  flex-col gap-2">
              <label className="font-bold text-md">Username</label>
              <input
                value={signUpUser.userName}
                onChange={(e) =>
                  setsignUpUser({ ...signUpUser, userName: e.target.value })
                }
                type="text"
                placeholder="choose username"
                className="p-4 rounded-full bg-transparent outline-none border"
              />
            </div>
            <div className="flex  flex-col gap-2">
              <label className="font-bold text-md">Email Address</label>
              <input
                value={signUpUser.email}
                onChange={(e) =>
                  setsignUpUser({ ...signUpUser, email: e.target.value })
                }
                type="email"
                placeholder="email address"
                className="p-4 rounded-full bg-transparent outline-none border"
              />
            </div>

            <div className="flex  flex-col gap-2">
              <label className="font-bold text-md">Password</label>
              <input
                value={signUpUser.password}
                onChange={(e) =>
                  setsignUpUser({ ...signUpUser, password: e.target.value })
                }
                type="password"
                placeholder="password"
                className="p-4 rounded-full bg-transparent outline-none border"
              />
            </div>
            {signUpUser.password.length > 0 &&
            signUpUser.password.length < 8 ? (
              <p className="text-red-500">
                Password must be at least 8 characters
              </p>
            ) : (
              ""
            )}
            {buttonDisabled ? (
              <button
                disabled
                className=" text-[14px] px-3 py-2 rounded-lg md:py-4 md:px-8 bg-gray-300 cursor-help text-white"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={handleSignUp}
                className={`${signUploading ? "bg-orange-100" : "bg-primarycolor"} text-[14px] flex justify-center px-3 py-2 rounded-lg md:py-4 md:px-8  text-white `}
              >
                {signUploading ? (
                  <AiOutlineLoading3Quarters className=" text-primarycolor text-center text-xl font-bold animate-spin infinite" />
                ) : (
                  "Sign In"
                )}
              </button>
            )}

            <Link href={"/login"} className="md:text-base text-[14px]">
              Already have an account yet? SIGN IN
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
