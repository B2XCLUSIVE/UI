"use client";
import { ThemeContext } from "@/context/ThemeContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
function AdminLogin() {
  const router = useRouter();
  const { theme, setadminUser } = useContext(ThemeContext);
  const [signInAdmin, setsignInAdmin] = useState({
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
        signInAdmin,
      );

      const adminData = response.data.data;
      setadminUser(adminData.token);
      console.log("admin sign in Successfull", response.data);
      toast.success(response?.data?.message || "admin sign in successful", {
        position: "top-center",
      });
      setTimeout(() => {
        router.push("/admin");
      }, 3000);
    } catch (error) {
      console.log("unable to sign admin in", error.message);
      toast.error(error?.response?.data?.message || "Failed to sign in admin", {
        position: "top-center",
      });
    } finally {
      setsigninLoading(false);
    }
  };

  useEffect(() => {
    if (signInAdmin.email.length > 0 && signInAdmin.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [signInAdmin]);

  return (
    <>
      <section className="w-full  h-screen md:w-5/6 m-auto">
        <div className="md:flex justify-center items-center h-full w-full p-10 md:w-3/5 mx-auto ">
          <div className={` ${theme}-text w-full`}>
            <div className="py-10">
              <h1 className={`${theme}-text font-bold text-3xl`}>
                B2XCLUSIVE ADMIN{" "}
              </h1>
              <h1 className={`font-bold text-2xl ${theme}-text`}>
                Admin Sign In{" "}
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
                    "Sign In as an Admin"
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
