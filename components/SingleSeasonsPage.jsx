"use client";

import { usePostData } from "@/hooks/usePostData";
import Link from "next/link";
import { useEffect } from "react";

export const SingleSeasonsPage = ({ id }) => {
  const url = `https://b2xclusive.onrender.com/api/v1/track/season/${id}`;

  const { isLoading, isError, data } = usePostData("season", url);

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

  // Extract season data
  const season = data?.data?.data;
  const episodes = season?.episodes || [];

  if (!season || episodes.length === 0) {
    return (
      <div>
        <p className="text-gray-500 font-bold">No Episodes Found</p>
      </div>
    );
  }

  const trailerPosterUrl =
    episodes[0]?.posterUrl?.url || "/default-placeholder.png";

  return (
    <div>
      {/* Trailer Poster */}
      <div className="w-[90%] md:w-5/6 mx-auto my-10">
        <img
          src={trailerPosterUrl}
          alt={season.movie?.title || "Season Poster"}
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Synopsis Section */}
      <section className="w-[90%] md:w-5/6 mx-auto my-10">
        <div className="space-y-4">
          <p className="md:text-2xl text-xl font-bold">Synopsis</p>
          <p className="text-gray-600">
            {season.movie?.description || "No synopsis available."}
          </p>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="w-[90%] md:w-5/6 mx-auto my-10">
        <h2 className="my-5 font-bold md:text-2xl text-xl">Episodes:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {episodes.map((episode) => (
            <Link href={`/season-menu/${season.id}/${episode.id}`}>
              <div className="cursor-pointer shadow-lg hover:shadow-xl transition rounded-lg overflow-hidden">
                <img
                  src={episode.posterUrl?.url || "/default-placeholder.png"}
                  alt={episode.episodeTitle || "Episode Image"}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold">
                    {episode.episodeTitle || "Untitled Episode"}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {episode.description || "No description available."}
                  </p>
                  <p className="text-gray-400 text-xs">
                    Duration: {episode.duration || "Unknown"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
