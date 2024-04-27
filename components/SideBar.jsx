"use client";

const {
  FaChartBar,
  FaCalendar,
  FaUser,
  FaChartPie,
  FaNotesMedical,
  FaTools,
  FaHamburger,
} = require("react-icons/fa");

import { MdCancel, MdMenuOpen } from "react-icons/md";
import Link from "next/link";
import SidebarLink from "./SideBarLink";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

function SideBar() {
  const [showSideBar, setShowSideBar] = useState(true);
  const [menu, setMenu] = useState(false);

  const pathname = useParams();
  const router = useRouter();

  return (
    <>
      <div>
        <div
          className="md:hidden absolute right-4 top-6 "
          onClick={() => setMenu(true)}
        >
          <MdMenuOpen className="text-2xl" />
        </div>

        {menu ? (
          <div className=" bg-white z-50 py-8 w-full top-0 right-0 left-0 bottom-0  absolute">
            <div className="relative">
              <MdCancel
                className="absolute text-xl right-6 top-4"
                onClick={() => setMenu(false)}
              />
            </div>
            <div
              onClick={() => {
                setMenu(false);
                router.push("/admin");
              }}
              className={`flex  p-4 items-center gap-2 hover:bg-primarycolor ${
                pathname === "/overview" ? "bg-primarycolor" : ""
              }`}
            >
              <FaChartBar />
              <p>Dashboard</p>
            </div>

            <div
              onClick={() => {
                setMenu(false);
                router.push("/admin/contents");
              }}
              className={`flex  p-4 items-center gap-2 hover:bg-primarycolor ${
                pathname === "/overview" ? "bg-primarycolor" : ""
              }`}
            >
              <FaCalendar />
              <p>Contents</p>
            </div>
            <div
              onClick={() => {
                setMenu(false);
                router.push("/admin/users");
              }}
              className={`flex  p-4 items-center gap-2 hover:bg-primarycolor ${
                pathname === "/overview" ? "bg-primarycolor" : ""
              }`}
            >
              <FaUser />
              <p>Users</p>
            </div>
            <div
              onClick={() => {
                setMenu(false);
                router.push("/admin/createpost");
              }}
              className={`flex  p-4 items-center gap-2 hover:bg-primarycolor ${
                pathname === "/overview" ? "bg-primarycolor" : ""
              }`}
            >
              <FaNotesMedical />
              <p>Create Post</p>
            </div>
            <div
              onClick={() => {
                setMenu(false);
                router.push("/admin/account");
              }}
              className={`flex  p-4 items-center gap-2 hover:bg-primarycolor ${
                pathname === "/overview" ? "bg-primarycolor" : ""
              }`}
            >
              <FaTools />
              <p>Account</p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={` h-screen p-4 md:block hidden  ${showSideBar ? "md:w-2/12" : " md:w-[70px]"}  `}
        >
          <div
            className={`flex ${showSideBar ? "p-4" : "p-2"} justify-between`}
          >
            <h1 className={`font-bold ${showSideBar ? "block" : "hidden"}`}>
              B2XCLUSIVE
            </h1>

            <FaHamburger
              className={`cursor-pointer text-xl `}
              onClick={() => setShowSideBar(!showSideBar)}
            />
          </div>

          <div className="py-4 flex flex-col gap-4">
            <SidebarLink
              title={"Dasboard"}
              href={"/admin"}
              bar={showSideBar}
              icon={<FaChartBar />}
            />
            <SidebarLink
              title={"Content"}
              href={"/admin/contents"}
              bar={showSideBar}
              icon={<FaCalendar />}
            />
            <SidebarLink
              title={"Users"}
              href={"/admin/users"}
              bar={showSideBar}
              icon={<FaUser />}
            />
            <SidebarLink
              title={"Create Post"}
              href={"/admin/createpost"}
              bar={showSideBar}
              icon={<FaNotesMedical />}
            />
            <SidebarLink
              title={"Account"}
              href={"/admin/account"}
              bar={showSideBar}
              icon={<FaTools />}
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default SideBar;
