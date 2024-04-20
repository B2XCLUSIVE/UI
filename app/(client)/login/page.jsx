"use client";

import Button from "@/components/Button";
import { ThemeContext } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Link from "next/link";

function Login() {
  const { theme, authDisplay, setUser } = useContext(ThemeContext);
  const router = useRouter();

  const [signInUser, setsignInUser] = useState({
    email: "",
    password: "",
  });

  const [signinloading, setsigninLoading] = useState(false);
  const [signinSuccess, setsigninSuccess] = useState(false);
  const [signinerror, setsigninError] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setsigninLoading(true);
    try {
      setsigninLoading(true);
      const response = await axios.post(
        "https://b2xclusive.onrender.com/api/v1/auth/user/signin",
        signInUser,
      );

      const userData = response.data.data;
      setUser(userData.token);
      authDisplay();

      console.log("sign in Successfull", response.data);
      setsigninSuccess(true);
    } catch (error) {
      console.log("unable to sign in", error.message);
      setsigninError(true);
    } finally {
      setsigninLoading(false);
      router.push("/");
    }
  };

  return (
    <>
      <div className="  top-5 flex w-full justify-center p-8">
        {signinSuccess ? (
          <div className="bg-green-600 p-2 rounded-lg">
            <p className="md:text-sm text-[12px]">
              Account created Successfully
            </p>
          </div>
        ) : (
          ""
        )}

        {signinerror ? (
          <div className="bg-red-600 p-2 rounded-lg">
            <p className="md:text-sm text-[12px]">Account creation failed</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="md:flex h-full w-full md:w-3/6 mx-auto relative">
        <div className={`${theme}-bg ${theme}-text p-10 w-full`}>
          <div className="py-10">
            <h1 className={`font-bold text-2xl ${theme}-text`}>
              {signinloading ? "Signing in, Please wait...." : "Sign In"}
            </h1>

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
                <p className={`${theme}-text`}>Remember Me</p>
              </div>
              <Link href={"/forgotpassword"}>Forgot Password</Link>
            </div>

            <Button title={"Sign In"} onclick={handleSignin} />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
