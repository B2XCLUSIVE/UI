"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import 'dynamic' from 'next/dynamic' for dynamic component loading

// Load ReactQuill dynamically to avoid server-side rendering issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function CreatePost() {
  const { theme } = useContext(ThemeContext);
  const [showQuill, setShowQuill] = useState(false); // State to track when to render ReactQuill

  useEffect(() => {
    // Set showQuill to true only after the component mounts (on the client-side)
    setShowQuill(true);
  }, []);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  const selectedModules = {
    toolbar: toolbarOptions,
  };
  return (
    <>
      <section className="w-10/12">
        <h1 className={`${theme}-text font-bold my-4 text-2xl`}>Create post</h1>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Blog Title</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
            />
          </div>
          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col gap-2 w-8/12">
              <label>Post subtitle</label>
              <input
                type="text"
                placeholder="Enter Blog Title"
                className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
              />
            </div>

            <div className="flex flex-col w-2/12">
              <label>Categgories</label>
              <select
                name=""
                id=""
                className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
              >
                <option value="">Blogs</option>
                <option value="">Music</option>
                <option value="">Videos</option>
                <option value="">Event</option>
              </select>
            </div>

            <div className="flex flex-col w-2/12">
              <label htmlFor="">Tags</label>
              <select
                name=""
                id=""
                className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
              >
                <option value="">Trending</option>
                <option value="">New release</option>
                <option value="">Top Music</option>
                <option value="">Treding Articles</option>
                <option value="">Viral Videos</option>
                <option value="">Gists</option>
                <option value="">New Albums</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Post Descriptions</label>
            {showQuill && (
              <ReactQuill modules={selectedModules} theme="snow" />
            )}{" "}
            {/* Render ReactQuill only when showQuill is true */}
          </div>
        </form>
      </section>
    </>
  );
}

export default CreatePost;
