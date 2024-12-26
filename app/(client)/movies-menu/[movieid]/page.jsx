"use client";

import SectionHeader from "@/components/SectionHeader";
import SingleMovie from "@/components/SingleMovie";
import { useParams } from "next/navigation";

function SinglePageMovie() {
  const { movieid } = useParams();

  return (
    <>
      <SectionHeader
        title={"Cinema City"}
        desc={
          "🎥 Stream & Download Your Favorites: Discover the ultimate movie haven where streaming meets downloading. Enjoy seamless access to the latest and greatest films anytime, anywhere! 🍿✨"
        }
        bgWallpaper="/moviesWallpaper.webp"
      />
      <SingleMovie id={movieid} />
    </>
  );
}

export default SinglePageMovie;
