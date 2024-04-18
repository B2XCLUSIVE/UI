"use client";
import Button from "@/components/Button";
import { ThemeContext } from "@/context/ThemeContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

function AdminSignUp() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [signUpAdmin, setsignUpAdmin] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const [signinloading, setsigninLoading] = useState(false);
  const [signinSuccess, setsigninSuccess] = useState(false);
  const [signinerror, setsigninError] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setsigninLoading(true);
    try {
      setsigninLoading(true);
      const response = await axios.post(
        "https://b2xclusive.onrender.com/api/v1/auth/admin-account/signup",
        signUpAdmin,
      );

      console.log("admin sign in Successfull", response.data);
      setsigninSuccess(true);
      router.push("/adminlogin");
    } catch (error) {
      console.log("unable to sign admin in", error.message);
      setsigninError(true);
    } finally {
      setsigninLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className=" absolute top-5 flex w-full justify-center p-8 z-30">
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

        <div className="md:flex h-full w-full md:w-4/6 relative">
          <div className={`${theme}-bgg ${theme}-text p-10 w-full md:w-2/4`}>
            <div className="py-10">
              <h1 className={`font-bold text-2xl ${theme}-text`}>
                {signinloading
                  ? "Signing up, Please wait...."
                  : "Admin Sign Up"}
              </h1>

              <p className={`${theme}-text`}>Create Admin account</p>
            </div>
            <form className={`${theme}-text flex flex-col gap-8`}>
              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Username</label>
                <input
                  value={signUpAdmin.userName}
                  onChange={(e) =>
                    setsignUpAdmin({ ...signUpAdmin, userName: e.target.value })
                  }
                  type="email"
                  placeholder="email address"
                  className="p-4 rounded-full bg-transparent outline-none border"
                />
              </div>

              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Email Address</label>
                <input
                  value={signUpAdmin.email}
                  onChange={(e) =>
                    setsignUpAdmin({ ...signUpAdmin, email: e.target.value })
                  }
                  type="email"
                  placeholder="email address"
                  className="p-4 rounded-full bg-transparent outline-none border"
                />
              </div>

              <div className="flex  flex-col gap-2">
                <label className="font-bold text-md">Password</label>
                <input
                  value={signUpAdmin.password}
                  onChange={(e) =>
                    setsignUpAdmin({ ...signUpAdmin, password: e.target.value })
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

              <Button title={"Admin Sign Up"} onclick={handleSignUp} />
              <Link href={"/adminlogin"}>Already have an account? Sign In</Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminSignUp;
