"use client";
import Image from "next/image";
import { toast } from "react-toastify";
import { FaComment, FaCommentDots, FaEllipsisV, FaEye } from "react-icons/fa";
import pld from "@/public/pld.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
function PostContent({
  id,
  title,
  tags,
  image,
  categories,
  createdAt,
  subtitle,
}) {
  const imageUrl = image && image.length > 0 ? image[0]?.url : pld;

  const [showActions, setShowActions] = useState(false);
  const [token, setToken] = useState(""); // State to hold the token
  useEffect(() => {
    const storedToken = localStorage.getItem("b2exclusiveadmin");
    if (storedToken) {
      const cleanedToken = storedToken.replace(/^['"](.*)['"]$/, "$1");
      setToken(cleanedToken);
      console.log(cleanedToken);
    } else {
      console.error("Bearer token not found");
    }
  }, []);

  const handleDelete = async () => {
    toast.warning("deleting post...", {
      autoClose: false,
      position: "top-center",
    });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.delete(
        `https://b2xclusive.onrender.com/api/v1/post/delete/${id}`,
        config,
      );
      toast.dismiss();
      toast.success(response?.data?.message, {
        position: "top-center",
      });
    } catch (error) {
      console.error("Failed delete post", error.message);
      toast.dismiss();
      toast.error(error?.response?.data?.message || "Failed to delete post", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <div className="w-full p-2 flex items-center border border-gray-100 rounded-se rounded-ss">
        <div className="w-6/12 flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full">
            <Image
              src={imageUrl}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className={`font-bold `}>{title}</h1>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
        </div>
        <div className="w-6/12 flex items-center gap-2">
          <h1 className={`w-1/6 `}>Tech</h1>
          <div className="flex items-center gap-2 w-1/6">
            <FaEye className={``} />

            <h1 className={``}>734</h1>
          </div>

          <div className="flex items-center gap-2 w-1/6">
            <FaComment className={``} />

            <h1 className={``}>50</h1>
          </div>

          <h1 className={` w-1/6 `}>{createdAt?.split("T")[0]}</h1>
          <h1 className={` w-1/6 bg-green-500 text-center p-1 rounded-full `}>
            Active
          </h1>
          <div
            className="w-1/6 relative cursor-pointer "
            onClick={() => setShowActions(!showActions)}
          >
            <FaEllipsisV className={` text-center`} />
            {showActions ? (
              <div className="w-full border right-0 top-5 rounded-lg absolute bg-white flex flex-col ">
                <p className="hover:bg-primarycolor hover:text-white p-4 cursor-pointer">
                  Edit Post
                </p>
                <p
                  onClick={handleDelete}
                  className="hover:bg-primarycolor hover:text-white p-4 cursor-pointer"
                >
                  Delete Post
                </p>
              </div>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostContent;
