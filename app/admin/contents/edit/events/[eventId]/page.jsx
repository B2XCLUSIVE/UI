"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Tiptap from "@/components/TipTap";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
function EditEvent({ params }) {
  const { eventId } = params;
  const [allOrganizers, setAllOrganizers] = useState([]);
  const [singlevent, setsingleEvent] = useState({
    title: "",
    subTitle: "",
    organisers: [],
    date: "",
    location: "",
  });

  const router = useRouter();
  const { showSideBar } = useContext(ThemeContext);
  const [uploadingPost, setuploadingPost] = useState(false);

  const [file, setFile] = useState(null);
  const [imagefile, setImageFile] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      toast.warning(`Fethcing Organizers and event details`, {
        position: "top-center",
        autoClose: false,
      });
      try {
        const response = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/event/organisers`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setAllOrganizers(response?.data?.data);

        const eventresponse = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/event/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setsingleEvent(eventresponse?.data?.data);

        toast.dismiss();
        toast.success(`All Organizers fetched`, { position: "top-center" });
      } catch (error) {
        console.log(error, "Unable to fetch Organizers");
        toast.dismiss();
        toast.error(
          error?.response?.data?.message || "Unable to fetch organisers",
          {
            position: "top-center",
          },
        );
      }
    };

    fetchData();
  }, [eventId, token]);

  useEffect(() => {
    setsingleEvent((prevPost) => ({
      ...prevPost,
      files: file,
      description: content,
    }));
  }, [file, content]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setuploadingPost(true);
    try {
      let formData = new FormData(e.target);
      formData.append("description", singlevent.description);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const eventResponse = await axios.patch(
        "https://b2xclusive.onrender.com/api/v1/event/create",
        formData,
        config,
      );
      toast.success(eventResponse?.data?.message, {
        position: "top-center",
      });

      setTimeout(() => {
        router.push("/admin");
      }, 3000);
    } catch (error) {
      console.error("Failed to add Event", error.message);
      toast.error(error?.response?.data?.message || "Failed to add event", {
        position: "top-center",
      });
    } finally {
      setuploadingPost(false); // Reset uploadingPost state
    }
  };

  return (
    <>
      <section className={`${showSideBar ? "w-10/12" : "w-full"} `}>
        <form onSubmit={onSubmit} className={`flex flex-col gap-8 items-start`}>
          <div className="flex flex-col gap-2 w-full">
            <label>Event Title</label>
            <input
              value={singlevent.title}
              onChange={(e) =>
                setsingleEvent({ ...singlevent, title: e.target.value })
              }
              type="text"
              name="title"
              placeholder="Enter Event Title"
              className=" w-full bg-transparent rounded-lg text-3xl  outline-none"
            />
          </div>
          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col w-6/12">
              <label htmlFor="">Subtitle </label>
              <input
                value={singlevent.subTitle}
                onChange={(e) =>
                  setsingleEvent({ ...singlevent, subTitle: e.target.value })
                }
                type="text"
                placeholder="Enter subtitle"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>

            <div className="flex flex-col w-3/12">
              <label htmlFor="">Organizers </label>
              <select
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
                name="organisersId[]"
                id=""
                value={singlevent?.organisers[0]?.id}
                onChange={(e) =>
                  setsingleEvent({
                    ...singlevent,
                    organisersId: e.target.value,
                  })
                }
              >
                <option value="null">Select Organizer</option>
                {allOrganizers?.map((organizer) => (
                  <option key={organizer.id} value={organizer.id}>
                    {organizer.name}
                  </option>
                ))}
              </select>{" "}
            </div>

            <div className="flex flex-col w-3/12">
              <label htmlFor="">Date </label>
              <input
                value={singlevent.date}
                name="date"
                onChange={(e) =>
                  setsingleEvent({ ...singlevent, date: e.target.value })
                }
                type="date"
                placeholder="Enter music duration"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>
            <div className="flex flex-col w-3/12">
              <label htmlFor="">Location </label>
              <input
                value={singlevent.location}
                name="location"
                onChange={(e) =>
                  setsingleEvent({ ...singlevent, location: e.target.value })
                }
                type="text"
                placeholder="Enter music location"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col w-full">
              <label htmlFor="">Upload Event Image</label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                multiple
                name="files"
                placeholder="Upload File"
                className="p-4 w-full bg-transparent rounded-lg border-gray-200 border outline-none"
              />
            </div>
          </div>
          {file && file ? (
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
            singlevent?.image?.length > 0 && (
              <div className="w-full">
                <div className="w-full h-[300px]">
                  <Image
                    src={singlevent?.image[0]?.url}
                    width={1000}
                    height={1000}
                    alt="post"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className={``}>Selected File: {singlevent.image[0].url}</p>
              </div>
            )
          )}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">Event Descriptions</label>
            <Tiptap
              content={singlevent.description}
              onChange={(newContent) => handleContentChange(newContent)}
            />
          </div>
          <button
            type="submit"
            // Use handlePost instead of handleingPost
            className={`${uploadingPost ? "bg-orange-100" : "bg-primarycolor"} text-[14px] flex justify-center px-3 py-2 rounded-lg md:py-4 md:px-8 text-white`}
          >
            {uploadingPost ? (
              <AiOutlineLoading3Quarters className="text-primarycolor text-center text-xl font-bold animate-spin infinite" />
            ) : (
              "Create Event"
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default EditEvent;
