"use client";

import AllSeriesPage from "@/components/AllSeriesPage";
import SectionHeader from "@/components/SectionHeader";
import { useParams } from "next/navigation";

function SingleSeasonPageSeries() {
  const { seriesseason } = useParams();

  return (
    <>
      <SectionHeader
        title={"Cinema City"}
        desc={
          "🎥 Stream & Download Your Favorites: Discover the ultimate movie haven where streaming meets downloading. Enjoy seamless access to the latest and greatest films anytime, anywhere! 🍿✨"
        }
        bgWallpaper="/moviesWallpaper.webp"
      />

      <AllSeriesPage id={seriesseason} />
    </>
  );
}

export default SingleSeasonPageSeries;
