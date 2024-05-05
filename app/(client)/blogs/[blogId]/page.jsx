"use client";
import Button from "@/components/Button";
import CategoriesHeading from "@/components/CategoriesHeading";
import Comments from "@/components/Comments";
import RelatedArticles from "@/components/RelatedArticles";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";
import axios from "axios";

import pld from "@/public/pld.jpeg";
function SingleBlog({ params }) {
  const { blogId } = params;

  const [blog, setBlog] = useState("");
  const fetchdata = async () => {
    const response = await axios.get(
      `https://b2xclusive.onrender.com/api/v1/post/${blogId}`,
    );

    setBlog(response?.data?.data);
    console.log(blog);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (!blog) {
    return <div>Loading...</div>; // Add a loading state if blog is null
  }
  const imageUrl =
    blog.image && blog.image.length > 0 ? blog.image[0]?.url : pld;

  return (
    <>
      <SectionHeader title={"This blog"} desc={"The subhead"} />
      <section className="w-full p-4 md:w-3/4 md:mx-auto ">
        <div>
          <div className="py-4">
            <h1 className={` text-4xl md:text-5xl font-bold`}>{blog.title}</h1>
            <p className={``}>{blog.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] rounded-full">
              <Image
                src={imageUrl}
                width={1000}
                height={1000}
                alt="alb"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <h1 className={` font-bold text-lg`}>Steve Qj</h1>
              <div className="flex gap-4">
                <p className={``}>5 mins Read</p>
                <p className={``}>Two days ago</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-4 my-4 border-t border-b border-gray-400">
            <div className="flex items-center gap-2">
              <FaHeart className={``} />
              <p className={``}>24k</p>
            </div>
            <div className="flex items-center gap-2">
              <FaComment className={``} />
              <p className={``}>100k</p>
            </div>

            <FaShare className={``} />
          </div>
          <div className="w-full h-[300px] md:h-[600px]">
            <Image
              src={blog?.image?.length > 0 ? blog?.image[0]?.url : pld}
              width={2000}
              height={2000}
              alt="alb"
              className="w-full h-full object-cover"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog.description }} />{" "}
        </div>

        <CategoriesHeading title={"Related Articles"} />
        <div className="grid grid-cols-2 gap-4 py-4">
          <RelatedArticles />
          <RelatedArticles />
        </div>

        <CategoriesHeading title={"Comments"} />
        <Comments />

        <form className="p-4">
          <div className=" md:flex w-full gap-4 my-2">
            <input
              type="text"
              className={`my-2 md:my-0 p-4  w-full`}
              placeholder="firstname"
            />
            <input
              type="phone"
              className={`my-2 md:my-0 p-4  w-full`}
              placeholder="phonenumber"
            />
          </div>
          <div className="md:flex w-full gap-4 my-2">
            <input
              type="email"
              className={`my-2 md:my-0 p-4  w-full`}
              placeholder="Email Address"
            />
            <input
              type="text"
              className={` my-2 md:my-0 p-4  w-full`}
              placeholder="website"
            />
          </div>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={`  w-full h-[300px] my-2 p-4 bg-slate-800`}
            placeholder="Type your comments"
          ></textarea>

          <Button title={"Send Comments"} />
        </form>
      </section>
    </>
  );
}

export default SingleBlog;
