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
  const [allArtist, setALlArtist] = useState([]);
  const { theme, showSideBar } = useContext(ThemeContext);
  const [uploadingPost, setuploadingPost] = useState(false);

  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleContentChange = (cont) => {
    setContent(cont);
  };

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
      toast.error(error?.response?.data?.message || "Unable to fetch artists", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [video, setVideo] = useState({
    title: "",
    duration: "",
    description: content,
    artistId: "",
  });
  useEffect(() => {
    setVideo((prevPost) => ({
      ...prevPost,
      videos: file,
      description: content,
    }));
  }, [file, content]);

  const onsubmit = async (e) => {
    e.preventDefault();
    setuploadingPost(true);
    try {
      let formData = new FormData(e.target);
      formData.append("description", video.description);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const videoResponse = await axios.put(
        "https://b2xclusive.onrender.com/api/v1/track/createVideo",
        formData,
        config,
      );
      toast.success(videoResponse?.data?.message, {
        position: "top-center",
      });

      setTimeout(() => {
        router.push("/admin");
      }, 3000);
    } catch (error) {
      console.error("Failed to upload video", error.message);
      toast.error(error?.response?.data?.message || "Failed to upload video", {
        position: "top-center",
      });
    } finally {
      setuploadingPost(false); // Reset uploadingPost state
    }
  };

  return (
    <>
      <section className={`${showSideBar ? "w-10/12" : "w-full"} `}>
        <form
          onSubmit={onsubmit}
          className={`flex flex-col gap-8 ${theme}-text items-start`}
        >
          <div className="flex flex-col gap-2 w-full">
            <label>Video Title</label>
            <input
              value={video.title}
              onChange={(e) => setVideo({ ...video, title: e.target.value })}
              type="text"
              name="title"
              placeholder="Enter Video Title"
              className=" w-full bg-transparent rounded-lg text-3xl  outline-none"
            />
          </div>

          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col w-6/12">
              <label htmlFor="">Artists </label>
              <select
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
                name="artistId"
                id=""
                onChange={(e) =>
                  setVideo({ ...video, artisId: e.target.value })
                }
              >
                <option value="null">Select Artist</option>
                {allArtist?.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.name}
                  </option>
                ))}
              </select>{" "}
            </div>

            <div className="flex flex-col w-6/12">
              <label htmlFor="">Duration </label>
              <input
                value={video.duration}
                name="duration"
                onChange={(e) =>
                  setVideo({ ...video, duration: e.target.value })
                }
                type="text"
                placeholder="Enter video duration"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col w-full">
              <label htmlFor="">Upload Video</label>
              <input
                name="videos"
                multiple
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                placeholder="Upload video"
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
            type="submit"
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
