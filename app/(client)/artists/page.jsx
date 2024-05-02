"use client";
import Artist from "@/components/Artist";
import SectionHeader from "@/components/SectionHeader";
import { FaBackward, FaForward, FaPlus, FaSearch } from "react-icons/fa";
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";

function Artists() {
  const pagesize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const fetcher = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products?page=${currentPage}`,
    );
    const data = response.data.products;
    return data;
  };
  const { data, error, isLoading } = useSWR(
    "https://b2xclusive.onrender.com/api/v1/artist/artists",
    fetcher,
  );

  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / pagesize);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log("artistdata", data);

  return (
    <>
      <SectionHeader title={"Artists Blogs"} desc={"hsyhhs"} />

      <section className="w-full md:w-5/6 mx-auto py-10 px-8">
        <div>
          <h1
            className={`md:text-left text-center text-lg md:text-4xl font-bold`}
          >
            Find the most recent music release
          </h1>
          <p className={` text-center md:text-left`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            consequatur.
          </p>
        </div>
      </section>

      <section className="w-full md:w-5/6 mx-auto p-4">
        <div className="flex gap-4 w-full">
          <div className="md:w-4/6 rounded-full flex items-center z-10 border ">
            <input
              type="text"
              placeholder="Search here"
              className={` w-11/12 bg-transparent p-4 text-white outline-none `}
            />
            <button className="rounded-full bg-primarycolor flex items-center md:text-base text-[12px] py-2 gap-1 px-4 mr-2">
              <FaSearch /> Search
            </button>
          </div>

          <div className="w-2/6 p-4 bg-transparent outline-none border rounded-lg">
            <select
              name=""
              id=""
              className="w-full bg-transparent outline-none"
            >
              <option value="">Filter</option>
              <option value="">Realesed Date</option>
              <option value="">Artist</option>
            </select>
          </div>
        </div>
      </section>
      <section
        className={` md:w-5/6 p-8 mx-auto  grid grid-cols-2 md:grid-cols-4 gap-8`}
      >
        {data?.slice(0, currentPage * pagesize).map((data) => (
          <Artist key={data.id} {...data} />
        ))}
      </section>

      <section className={`p-4 md:p-8 mx-auto gap-2 flex justify-center  `}>
        <div className={`border  p-2 `} onClick={handlePrevPage}>
          <p className={`text`}>PREV</p>
        </div>

        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index + 1}
            className={`border  p-2 ${currentPage === index + 1 ? "bg-primarycolor text-white" : ""} `}
            onClick={() => handlePageChange(index + 1)}
          >
            <p className={``}>{index + 1}</p>
          </div>
        ))}
        <div className="border  p-2 " onClick={handleNextPage}>
          <p className={``}>NEXT</p>
        </div>
      </section>
    </>
  );
}

export default Artists;
