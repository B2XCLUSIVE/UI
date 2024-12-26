"use client";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import AllMoviesHome from "@/components/MoviesHome";
import AllSeriesHome from "@/components/SeriesHome";
import SearchMovies from "@/components/SearchMovies";

function MoviesHome() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearchResults(null);
  };

  return (
    <>
      <SectionHeader
        title={"Cinema City"}
        desc={
          "🎥 Stream & Download Your Favorites: Discover the ultimate movie haven where streaming meets downloading. Enjoy seamless access to the latest and greatest films anytime, anywhere! 🍿✨"
        }
        bgWallpaper="/moviesWallpaper.webp"
      />
      <section className="w-full md:w-5/6 mx-auto py-4">
        <div className="p-6">
          <h1 className="text-4xl font-bold">🔍 Find Your Favorites:</h1>
          <p className="text-gray-700">
            Search for movies, shows, and more to start your next binge-worthy
            adventure!
          </p>
        </div>
      </section>

      <SearchMovies onSearch={handleSearch} onClearSearch={handleClearSearch} />

      {searchResults ? (
        <section className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 py-8 w-[90%] md:w-10/12 mx-auto">
          {searchResults.map((movie) => (
            <div key={movie.id} className="border rounded-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img
                  src={
                    movie.seasons[0]?.episodes[0]?.posterUrl?.url ||
                    movie.key ||
                    "/placeholder.png"
                  }
                  alt={movie.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="px-2 py-3">
                <h3 className="text-center font-medium">{movie.title}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {movie.description}
                </p>
                <p className="text-xs text-gray-500">
                  Genre: {movie.genre.join(", ")}
                </p>
                <p className="text-xs text-gray-500">
                  Language: {movie.language}
                </p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <>
          <AllMoviesHome />
          <AllSeriesHome />
        </>
      )}
    </>
  );
}

export default MoviesHome;
