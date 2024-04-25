"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CreatePostLinks({ href, title }) {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={href}
        className={`${pathname === href ? "  border-primarycolor border-b-4" : ""} hover:bg-gray-50 p-4 text-center`}
      >
        {title}
      </Link>
    </>
  );
}

export default CreatePostLinks;
