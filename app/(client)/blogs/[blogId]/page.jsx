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
import { VscLoading } from "react-icons/vsc";
import pld from "@/public/pld.jpeg";
import { toast } from "react-toastify";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
function SingleBlog({ params }) {
  const { blogId } = params;
  const { user } = useContext(ThemeContext);
  const [showComment, setShowComment] = useState(false);
  const [blog, setBlog] = useState("");
  const [allPost, setAllPost] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `https://b2xclusive.onrender.com/api/v1/post/${blogId}`,
      );

      setBlog(response?.data?.data);
      console.log(blog);

      const allpostresponse = await axios.get(
        `https://b2xclusive.onrender.com/api/v1/post/posts`,
      );
      setAllPost(allpostresponse?.data?.data);
      console.log(allPost);
    } catch (error) {
      console.error("Failed to fethc blog post", error.message);
      toast.error(
        error?.response?.data?.message || "Failed to fecthblog post",
        {
          position: "top-center",
        },
      );
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (!blog) {
    return (
      <div className="w-full flex justify-center mt-20 ">
        <VscLoading className="text-xl animate-spin" />
      </div>
    ); // Add a loading state if blog is null
  }
  const imageUrl =
    blog.image && blog.image.length > 0 ? blog.image[0]?.url : pld;

  return (
    <>
      <SectionHeader title={blog.title} desc={blog.subtitle} />
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
              <h1 className={` font-bold text-lg`}>{blog?.author?.userName}</h1>
              <div className="flex gap-4">
                <p className={``}>{blog?.updatedAt.split("T")[0]}</p>
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
          {allPost.slice(0, 1).map((blog) => (
            <RelatedArticles key={blog.id} {...blog} />
          ))}
        </div>
        <CategoriesHeading title={"Comments"} />
        <div className={`p-4 flex gap-4 `}>
          <div className="w-[200px]  md:w-[50px] h-[50px]">
            <Image
              src={"/alb.jpeg"}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div>
              <h1 className={`font-bold text-md md:text-base text-[12px] `}>
                Brain Deo
              </h1>
              <p className={` md:text-base text-[10px]`}>15-10-2024</p>
            </div>
            <p className={`md:text-base text-[10px] `}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              cumque voluptates aperiam tempora nostrum adipisci voluptatem
              numquam dolorem a quisquam?
            </p>
            <div
              onClick={() => setShowComment(true)}
              className="text-primarycolor md:text-base text-[10px]"
            >
              Reply
            </div>

            <div className={`p-4 flex gap-4 `}>
              <div className="w-[200px]  md:w-[50px] h-[50px]">
                <Image
                  src={"/alb.jpeg"}
                  width={1000}
                  height={1000}
                  alt="alb"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <h1 className={`font-bold text-md md:text-base text-[12px] `}>
                    Brain Deo
                  </h1>
                  <p className={`md:text-base text-[10px]`}>15-10-2024</p>
                </div>
                <p className={`md:text-base text-[10px] `}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  cumque voluptates aperiam tempora nostrum adipisci voluptatem
                  numquam dolorem a quisquam?
                </p>
              </div>
            </div>
          </div>
        </div>
        {showComment ? (
          user === null ? (
            <Link href={"/login"}>Please login to drop a comment</Link>
          ) : (
            <form className="p-4">
              <textarea
                name=""
                id=""
                cols="10"
                rows="10"
                className={`  w-full h-[100px] border my-2 p-4 bg-white`}
                placeholder="Type your comments"
              ></textarea>

              <Button title={"Send Comments"} />
            </form>
          )
        ) : (
          ""
        )}{" "}
      </section>
    </>
  );
}

export default SingleBlog;
