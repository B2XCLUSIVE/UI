"use client";
import { useEffect, useState } from "react";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Button from "@/components/Button";
import Tiptap from "@/components/TipTap";

function CreatePost() {
  const { theme } = useContext(ThemeContext);

  const [file, setFile] = useState(null);

  const [post, setPost] = useState({
    files: file,
    title: "",
    subtitle: "",
    description: "",
    tags: "",
    categories: "",
  });

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
            <Tiptap />
          </div>

          <Button title={"Create Post"} />
        </form>
      </section>
    </>
  );
}

export default CreatePost;
