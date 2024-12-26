"use client";

import { SingleSeasonsPage } from "@/components/SingleSeasonsPage";
import SectionHeader from "@/components/SectionHeader";
import { useParams } from "next/navigation";
import { FaFileDownload } from "react-icons/fa";

function SinglePageSeries() {
  const { seasonid } = useParams();
  return (
    <>
      <SectionHeader
        title={"Cinema City"}
        desc={
          "🎥 Stream & Download Your Favorites: Discover the ultimate movie haven where streaming meets downloading. Enjoy seamless access to the latest and greatest films anytime, anywhere! 🍿✨"
        }
        bgWallpaper="/moviesWallpaper.webp"
      />

      <SingleSeasonsPage id={seasonid} />
    </>
  );
}

export default SinglePageSeries;
