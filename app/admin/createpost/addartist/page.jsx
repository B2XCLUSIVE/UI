"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddArtists() {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [uploadingPost, setuploadingPost] = useState(false);

  const [artist, setArtist] = useState({
    name: "",
    bio: "",
  });

  // Update the artist state with new file
  useEffect(() => {
    setArtist((prevArtist) => ({
      ...prevArtist,
      file: file,
    }));
  }, [file]);
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

  const handleArtist = async (e) => {
    e.preventDefault();

    try {
      setuploadingPost(true);

      const formData = new FormData();
      formData.append("name", artist.name);
      formData.append("bio", artist.bio);
      if (file) {
        formData.append("file", file); // Append the file to FormData
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const postResponse = await axios.put(
        "https://b2xclusive.onrender.com/api/v1/artist/create",
        formData,
        config,
      );

      console.log(postResponse.data);
      console.log(formData);
      toast.success(postResponse.data.message, {
        position: "top-center",
      });

      setTimeout(() => {
        router.push("/admin");
      }, 3000);
    } catch (error) {
      console.error("Failed to upload post", error.message);
      toast.error(error.response.data.message || "Failed to upload post", {
        position: "top-center",
      });
    } finally {
      setuploadingPost(false); // Reset uploadingPost state
    }
  };
  return (
    <>
      <form className={`flex flex-col gap-8 w-full items-start`}>
        <ToastContainer />
        <div className="flex flex-col gap-2 w-full">
          <label>Artist Name</label>
          <input
            value={artist.name}
            onChange={(e) => setArtist({ ...artist, name: e.target.value })}
            type="text"
            placeholder="Enter Artist Name"
            className=" w-full bg-transparent rounded-lg text-3xl  outline-none"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label>Artists Picture</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2 w-full bg-transparent rounded-lg  outline-none"
          />
          {/* Optional: Display the file name */}
          {file ? (
            <div className="w-full">
              <div className="w-full h-[300px]">
                <Image
                  src={URL.createObjectURL(file)}
                  width={1000}
                  height={1000}
                  alt="post"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={``}>Selected File: {file.name}</p>
            </div>
          ) : (
            <p>No file selected</p>
          )}{" "}
        </div>

        <div className="flex gap-4 w-full items-center">
          <div className="flex flex-col w-full gap-2 ">
            <label>Artist Bio</label>

            <textarea
              name=""
              id=""
              value={artist.bio}
              onChange={(e) => setArtist({ ...artist, bio: e.target.value })}
              type="text"
              placeholder="Enter Blog Title"
              className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleArtist} // Use handlePost instead of handleingPost
          className={`${uploadingPost ? "bg-orange-100" : "bg-primarycolor"} text-[14px] flex justify-center px-3 py-2 rounded-lg md:py-4 md:px-8 text-white`}
        >
          {uploadingPost ? (
            <AiOutlineLoading3Quarters className="text-primarycolor text-center text-xl font-bold animate-spin infinite" />
          ) : (
            "Create Artist"
          )}
        </button>
      </form>
    </>
  );
}

export default AddArtists;
