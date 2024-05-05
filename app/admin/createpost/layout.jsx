"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Link from "next/link";
import CreatePostLinks from "@/components/CreatePostLinks";
import ToastNotificationContainer from "@/components/ToastNotificationComponent";
function Layout({ children }) {
  const { showSideBar } = useContext(ThemeContext);
  return (
    <>
      <div className={`${showSideBar ? "w-10/12" : "w-full"}`}>
        <h1 className={` font-bold my-4 text-2xl`}>Create post</h1>

        <div
          className={`${showSideBar ? "w-10/12" : "w-full"} grid grid-cols-5 border-b border-gray-200 `}
        >
          <CreatePostLinks
            title={"Artists"}
            href={"/admin/createpost/addartist"}
          />
          <CreatePostLinks title={"Blog"} href={"/admin/createpost"} />
          <CreatePostLinks
            title={"Music"}
            href={"/admin/createpost/addmusic"}
          />
          <CreatePostLinks
            title={"Video"}
            href={"/admin/createpost/addvideo"}
          />
          <CreatePostLinks
            title={"Events"}
            href={"/admin/createpost/addevent"}
          />
        </div>

        <div className={`${showSideBar ? "w-10/12" : "w-full"} p-4`}>
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
