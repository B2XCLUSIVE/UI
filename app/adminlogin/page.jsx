"use client";
import Button from "@/components/Button";
import { ThemeContext } from "@/context/ThemeContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

function AdminLogin() {
  const router = useRouter();
  const { theme, setadminUser } = useContext(ThemeContext);
  const [signInAdmin, setsignInAdmin] = useState({
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
        signInAdmin,
      );

      const adminData = response.data.data;
      setadminUser(adminData.token);

      console.log("admin sign in Successfull", response.data);
      setsigninSuccess(true);
    } catch (error) {
      console.log("unable to sign admin in", error.message);
      setsigninError(true);
    } finally {
      setsigninLoading(false);
      router.push("/overview");
    }
  };

  return (
    <>
      <section className="w-full md:w-5/6 mx-auto">
        <div className="  md:w-4/6 mx-auto absolute top-5 flex w-full justify-center  z-30">
          {signinSuccess ? (
            <div className="bg-green-600 p-2 rounded-lg">
              <p className="md:text-sm text-[12px]">
                Admin Account created Successfully
              </p>
            </div>
          ) : (
            ""
          )}

          {signinerror ? (
            <div className="bg-red-600 p-2 rounded-lg">
              <p className="md:text-sm text-[12px]">
                Admin Account creation failed
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="md:flex h-full w-full p-10 md:w-3/5 mx-auto relative">
          <div className={` ${theme}-text w-full`}>
            <div className="py-10">
              <h1 className={`font-bold text-2xl ${theme}-text`}>
                {signinloading
                  ? "Signing in, Please wait...."
                  : "Admin Sign In"}
              </h1>

              <p className={`${theme}-text`}>
                Welcome back Admin! sign in to your Admin account
              </p>
            </div>
            <form className={`${theme}-text flex flex-col gap-8`}>
              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Email Address</label>
                <input
                  value={signInAdmin.email}
                  onChange={(e) =>
                    setsignInAdmin({ ...signInAdmin, email: e.target.value })
                  }
                  type="email"
                  placeholder="email address"
                  className="p-4 rounded-full bg-transparent outline-none border"
                />
              </div>

              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Password</label>
                <input
                  value={signInAdmin.password}
                  onChange={(e) =>
                    setsignInAdmin({ ...signInAdmin, password: e.target.value })
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
              <Link href={"/adminsignup"}>
                Don&apos;t have an account yet? Sign Up
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
