"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Button from "@/components/Button";
import Tiptap from "@/components/TipTap";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function AddVideos() {
  const router = useRouter();
  const { theme, showSideBar } = useContext(ThemeContext);
  const [uploadingPost, setuploadingPost] = useState(false);

  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleContentChange = (cont) => {
    setContent(cont);
  };

  const [post, setPost] = useState({
    files: file,
    title: "",
    subtitle: "",
    description: content,
    tags: [],
    categories: [],
  });

  const [token, setToken] = useState(""); // State to hold the token

  useEffect(() => {
    const storedToken = localStorage.getItem("b2exclusiveadmin");
    if (storedToken) {
      const cleanedToken = storedToken.replace(/^['"](.*)['"]$/, "$1");
      setToken(cleanedToken);
    } else {
      console.error("Bearer token not found");
    }
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      setuploadingPost(true);
      const updatedPost = {
        ...post,
        files: [file], // Update file
        description: content, // Update content
      };
      const postResponse = await axios.put(
        "https://b2xclusive.onrender.com/api/v1/post/create",
        updatedPost,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(postResponse.data);
      toast.success(postResponse?.data?.message, {
        position: "top-center",
      });

      console.log("post", updatedPost);
      console.log("sent post", postResponse.data);

      setTimeout(() => {
        router.push("/admin");
      }, 3000);
    } catch (error) {
      console.log("unable to post", error.message);
      toast.error(
        error?.postResponse?.data?.message || "Failed to upload post",
        {
          position: "top-center",
        },
      );
    } finally {
      setuploadingPost(false);
    }
  };

  console.log("File:", file);
  console.log("Content:", content);

  return (
    <>
      <section className={`${showSideBar ? "w-10/12" : "w-full"} `}>
        <form className={`flex flex-col gap-8 ${theme}-text items-start`}>
          <div className="flex flex-col gap-2 w-full">
            <label>Video Title</label>
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              type="text"
              placeholder="Enter Blog Title"
              className=" w-full bg-transparent rounded-lg text-3xl  outline-none"
            />
          </div>

          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col w-6/12">
              <label htmlFor="">Artists </label>
              <input
                value={post.tags}
                onChange={(e) =>
                  setPost({ ...post, tags: e.target.value.split(",") })
                }
                type="text"
                placeholder="Enter Blog Title"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>

            <div className="flex flex-col w-6/12">
              <label htmlFor="">Duration </label>
              <input
                value={post.tags}
                onChange={(e) =>
                  setPost({ ...post, tags: e.target.value.split(",") })
                }
                type="text"
                placeholder="Enter Blog Title"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col w-full">
              <label htmlFor="">Upload Video</label>
              <input
                value={post.tags}
                onChange={(e) =>
                  setPost({ ...post, tags: e.target.value.split(",") })
                }
                type="file"
                placeholder="Enter Blog Title"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Video Descriptions</label>
            <Tiptap
              content={content}
              onChange={(newContent) => handleContentChange(newContent)}
            />
          </div>

          <button
            onClick={handlePost} // Use handlePost instead of handleingPost
            className={`${uploadingPost ? "bg-orange-100" : "bg-primarycolor"} text-[14px] flex justify-center px-3 py-2 rounded-lg md:py-4 md:px-8 text-white`}
          >
            {uploadingPost ? (
              <AiOutlineLoading3Quarters className="text-primarycolor text-center text-xl font-bold animate-spin infinite" />
            ) : (
              "Create post"
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default AddVideos;
