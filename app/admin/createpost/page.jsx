"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import 'dynamic' from 'next/dynamic' for dynamic component loading

// Load ReactQuill dynamically to avoid server-side rendering issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css"; // Import Quill styles

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Button from "@/components/Button";

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

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile); // Update 'file' state with selected file
    setPost({ ...post, files: selectedFile }); // Update 'post' state with selected file
  };
  const [value, setValue] = useState("");
  const [post, setPost] = useState({
    files: file,
    title: "",
    subtitle: "",
    description: value,
    tags: "",
    categories: "",
  });

  const handlePost = (e) => {
    e.preventDefault();
    try {
      setPost({ ...post, description: value });
      console.log(post);
    } catch (error) {
      console.log("Unable to upload post", error.message);
    }
  };
  return (
    <>
      <section className="w-10/12">
        <h1 className={`${theme}-text font-bold my-4 text-2xl`}>Create post</h1>

        <form className={`flex flex-col gap-4 ${theme}-text`}>
          <div className="flex flex-col gap-2">
            <label>Blog Title</label>
            <input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              type="text"
              placeholder="Enter Blog Title"
              className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Blog header Image</label>
            <input
              type="file"
              onChange={handleFileChange} // Call handleFileChange when a file is selected
              className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
            />
            {/* Optional: Display the file name */}
            {file && (
              <p className={`${theme}-text`}>Selected File: {file.name}</p>
            )}{" "}
          </div>

          <div className="flex gap-4 w-full items-center">
            <div className="flex flex-col gap-2 w-8/12">
              <label>Post subtitle</label>
              <input
                value={post.subtitle}
                onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
                type="text"
                placeholder="Enter Blog Title"
                className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
              />
            </div>

            <div className="flex flex-col w-2/12">
              <label>Categories</label>
              <select
                name="categories"
                value={post.categories}
                onChange={(e) =>
                  setPost({ ...post, categories: e.target.value })
                }
                id=""
                className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
              >
                <option value="blogs">Blogs</option>
                <option value="music">Music</option>
                <option value="videos">Videos</option>
                <option value="event">Event</option>
              </select>
            </div>

            <div className="flex flex-col w-2/12">
              <label htmlFor="">Tags</label>
              <select
                name="tags"
                value={post.tags}
                onChange={(e) => setPost({ ...post, tags: e.target.value })}
                id=""
                className="p-2 w-full bg-transparent rounded-lg border-gray-500 border outline-none"
              >
                <option value="trending">Trending</option>
                <option value="newrelease">New release</option>
                <option value="topmusic">Top Music</option>
                <option value="trendingarticles">Treding Articles</option>
                <option value="viralvideos">Viral Videos</option>
                <option value="gists">Gists</option>
                <option value="newalbums">New Albums</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="">Post Descriptions</label>
            {showQuill && (
              <ReactQuill
                modules={selectedModules}
                theme="snow"
                value={value}
                onChange={setValue} // Update 'value' state with editor content
              />
            )}{" "}
            {/* Render ReactQuill only when showQuill is true */}
          </div>

          <Button title={"Create Post"} onclick={handlePost} />
        </form>
      </section>
    </>
  );
}

export default CreatePost;
