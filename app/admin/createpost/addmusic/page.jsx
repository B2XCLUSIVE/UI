"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Tiptap from "@/components/TipTap";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function AddMusic() {
  const [allArtist, setALlArtist] = useState([]);

  const router = useRouter();
  const { showSideBar } = useContext(ThemeContext);
  const [uploadingPost, setuploadingPost] = useState(false);

  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleContentChange = (cont) => {
    setContent(cont);
  };

  const [post, setPost] = useState({
    title: "",
    duration: "",
    description: content,
    artistId: "",
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

  useEffect(() => {
    const fetchData = async () => {
      toast.warning(`Fethcing Artists`, {
        position: "top-center",
        autoClose: false,
      });
      try {
        const response = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/artist/artists`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setALlArtist(response?.data?.data);
        toast.dismiss();
        toast.success(`All Artists fetched`, { position: "top-center" });
        console.log(allArtist);
      } catch (error) {
        console.log(error, "Unable to fetch artists");
        toast.dismiss();
        toast.error(
          error?.response?.data?.message || "Unable to fetch artists",
        );
      }
    };

    fetchData();
  }, [allArtist, token]);

  return (
    <>
      <section className={`${showSideBar ? "w-10/12" : "w-full"} `}>
        <form className={`flex flex-col gap-8 items-start`}>
          <div className="flex flex-col gap-2 w-full">
            <label>Music Title</label>
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              type="text"
              name="title"
              placeholder="Enter Music Title"
              className=" w-full bg-transparent rounded-lg text-3xl  outline-none"
            />
          </div>

          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col w-6/12">
              <label htmlFor="">Artists </label>
              <select name="artistId" id=""></select>{" "}
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
              <label htmlFor="">Upload Music </label>
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
            <label htmlFor="">Music Descriptions</label>
            <Tiptap
              content={content}
              onChange={(newContent) => handleContentChange(newContent)}
            />
          </div>

          <button
            // Use handlePost instead of handleingPost
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

export default AddMusic;
