"use client";
import Link from "next/link";
import { FaChartBar } from "react-icons/fa";
import { usePathname } from "next/navigation";

function SidebarLink({ href, title, bar, icon }) {
  const pathname = usePathname();

  console.log("path", pathname);

  return (
    <Link
      href={href}
      className={`flex ${bar ? "p-4" : "p-2"} rounded-lg items-center gap-2 hover:bg-primarycolor ${
        pathname === href ? "bg-primarycolor" : ""
      }`}
    >
      {icon}
      <p className={`${bar ? "block" : "hidden"} `}>{title}</p>
    </Link>
  );
}

export default SidebarLink;
