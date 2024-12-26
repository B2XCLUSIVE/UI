"use client";

import { usePostData } from "@/hooks/usePostData";
import Link from "next/link";
import { useEffect } from "react";

const AllSeriesPage = ({ id }) => {
  const url = `https://b2xclusive.onrender.com/api/v1/track/movie/${id}`;

  const { isLoading, isError, data } = usePostData("series", url);

  useEffect(() => {
    console.log("Fetched Data:", data);
  }, [data]);

  if (isError)
    return (
      <div>
        <p className="text-red-500 font-bold">Error Fetching Posts</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="w-[90%] md:w-5/6 mx-auto my-10">
        <div className="h-80 w-full bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    );

  // Extract movie data
  const movie = data?.data?.data?.movie;

  if (!movie) {
    return (
      <div>
        <p className="text-gray-500 font-bold">No Movie Found</p>
      </div>
    );
  }

  const embedYouTubeUrl = (url) => {
    if (!url) return ""; // Return empty if no URL
    const videoId = url.split("v=")[1]?.split("&")[0]; // Extract the video ID
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div>
      <div className="w-[90%] md:w-5/6 mx-auto my-10 aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src={embedYouTubeUrl(movie.trailerUrl)}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <section className="w-[90%] md:w-5/6 mx-auto my-10 ">
        <div className="space-y-4">
          <p className="md:text-2xl text-xl font-bold">Synopsis</p>
          <p className="text-gray-600">
            {movie.description || "No synopsis available."}
          </p>
        </div>
      </section>

      {/* Seasons Section */}
      <section className="w-[90%] md:w-5/6 mx-auto my-10">
        <h2 className="my-5 font-bold md:text-2xl text-xl">Seasons:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {movie.seasons.map((season) => {
            const posterUrl =
              season.episodes[0]?.posterUrl?.url || "/default-placeholder.png";

            return (
              <Link href={`/season-menu/${season.id}`} key={season.id}>
                <div className="cursor-pointer shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden">
                  <img
                    src={posterUrl}
                    alt={season.seasonTitle || "Season Image"}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold">
                      {season.seasonTitle || "Untitled Season"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {season.description || "No description available."}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AllSeriesPage;
