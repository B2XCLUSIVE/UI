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
import Link from "next/link";
import SidebarLink from "./SideBarLink";
import { useState } from "react";
function SideBar() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <div
        className={` h-screen p-4  ${showSideBar ? "md:w-2/12" : " md:w-[70px]"}  `}
      >
        <div className={`flex ${showSideBar ? "p-4" : "p-2"} justify-between`}>
          <h1 className={`font-bold ${showSideBar ? "block" : "hidden"}`}>
            B2XCLUSIVE
          </h1>

          <FaHamburger
            className={`cursor-pointer text-xl `}
            onClick={() => setShowSideBar(!showSideBar)}
          />
        </div>

        <div className="py-4">
          <SidebarLink
            title={"Dasboard"}
            href={"/admin"}
            bar={showSideBar}
            icon={<FaChartBar />}
          />
          <SidebarLink
            title={"Analytics"}
            href={"/admin/analytics"}
            bar={showSideBar}
            icon={<FaChartPie />}
          />
          <SidebarLink
            title={"Content"}
            href={"/admin/contents"}
            bar={showSideBar}
            icon={<FaCalendar />}
          />
          <SidebarLink
            title={"Follower"}
            href={"/admin/followers"}
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
    </>
  );
}

export default SideBar;
