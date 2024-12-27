// // app/components/movieshome.jsx
// "use client";
// import { useEffect } from "react";
// import { usePostData } from "@/hooks/usePostData";
// import Link from "next/link";

// const AllMoviesHome = () => {
//   const url =
//     "https://b2xclusive.onrender.com/api/v1/track/movies?type=SINGLE&page=1&limit=6";

//   const { isLoading, isError, data } = usePostData("movies", url);

//   useEffect(() => {
//     console.log("Fetched Data:", data);
//   }, [data]);

//   if (isError)
//     return (
//       <div>
//         <p className="text-red-500 font-bold">Error Fetching Posts</p>
//       </div>
//     );

//   if (isLoading)
//     return (
//       <div className="w-[90%] md:w-5/6 mx-auto my-10 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 py-8">
//         <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg"></div>
//         <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg"></div>
//         <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg"></div>
//         <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg"></div>
//         <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg"></div>
//         <div className="h-40 w-full bg-gray-300 animate-pulse rounded-lg"></div>
//       </div>
//     );

//   // Extract movies data
//   const movies = data?.data?.data?.movies || [];

//   if (movies.length === 0) {
//     return (
//       <div>
//         <p className="text-gray-500 font-bold">No Movies Available</p>
//       </div> 
//     );
//   }

//   return (
//     <section className="w-[90%] md:w-5/6 mx-auto my-10">
//       <p className="text-2xl font-bold">New Movies Uploads</p>
//       <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 py-8">
//         {movies.map((movie) => (
//           <div key={movie.id} className="border rounded-md overflow-hidden">
//             <Link href={`/movies-menu/${movie.id}/`}>
//               <div className="h-48 bg-gray-200">
//                 <img
//                   src={movie.seasons[0]?.episodes[0]?.posterUrl?.url}
//                   alt={movie.title}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <p className="px-2 py-3 text-center font-medium">{movie.title}</p>
//             </Link>
//           </div>
//         ))}
//       </div>

//       <Link href="/movies-menu">
//         {" "}
//         <button className="w-full py-2 bg-primarycolor text-white my-5 rounded-xl">
//           Load more movies
//         </button>
//       </Link>
//     </section>
//   );
// };

// export default AllMoviesHome;


// app/components/movieshome.jsx
import Link from "next/link";

export default function AllMoviesHome({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div>
        <p className="text-gray-500 font-bold">No Movies Available</p>
      </div> 
    );
  }

  return (
    <section className="w-[90%] md:w-5/6 mx-auto my-10">
      <p className="text-2xl font-bold">New Movies Uploads</p>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 py-8">
        {movies.map((movie) => (
          <div key={movie.id} className="border rounded-md overflow-hidden">
            <Link href={`/movies/${movie.id}`}>
              <div className="h-48 bg-gray-200">
                <img
                  src={movie.posterUrl || "/placeholder.png"}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="px-2 py-3 text-center font-medium">{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
