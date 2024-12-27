"use client";
import { useState } from "react";

export default function SearchMoviesClient({ initialMovies }) {
  const [searchResults, setSearchResults] = useState(initialMovies);

  const handleSearch = async (query) => {
    const response = await fetch(`/api/movies/search?q=${query}`);
    const data = await response.json();
    setSearchResults(data.movies);
  };

  const handleClearSearch = () => setSearchResults(initialMovies);

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button onClick={handleClearSearch} className="mt-2 text-blue-500">
          Clear Search
        </button>
      </div>

      <section className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 py-8">
        {searchResults.map((movie) => (
          <div key={movie.id} className="border rounded-md overflow-hidden">
            <img
              src={movie.posterUrl || "/placeholder.png"}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="px-2 py-3">
              <h3 className="text-center font-medium">{movie.title}</h3>
              <p className="text-sm text-gray-600 truncate">
                {movie.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
