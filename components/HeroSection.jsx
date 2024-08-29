"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import pld from "@/public/pld.jpeg";
import Image from "next/image";
import Link from "next/link";
function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const [allPost, setAllPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://b2xclusive.onrender.com/api/v1/post/posts`,
        );
        setAllPost(response?.data?.data);
        setIsLoading(false);
        const imageUrl = console.log(allPost);
      } catch (error) {
        console.log(error.message);
        setError(error.message || "Error fetching posts");
        setIsLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {allPost.map((each) => (
            <div className="relative" key={each.id}>
              <div className="bg-black w-full h-[500px] relative">
                <Image
                  src={
                    each.image && each.image.length > 0
                      ? each.image[0]?.url
                      : pld
                  }
                  width={1000}
                  height={1000}
                  alt="hero"
                  className="w-full h-full object-cover"
                />
                <div className="bg-gradient-to-t from-black  w-full absolute top-0 bottom-0 left-0 right-0"></div>
              </div>
              <div className="absolute bottom-5 p-8 flex flex-col gap-2 items-start">
                <h1 className="font-bold text-4xl md:text-5xl text-white">
                  {each.title}
                </h1>
                <div
                  className="text-white text-xl md:text-2xl font-thin"
                  dangerouslySetInnerHTML={{
                    __html:
                      each.description.split(" ").slice(0, 20).join(" ") +
                      "...",
                  }}
                />
                <Link
                  className="p-2 text-sm text-primarycolor rounded-full border border-primarycolor"
                  href={`/blogs/${each.id}`}
                >
                  Read More{" "}
                </Link>
              </div>{" "}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default HeroSection;
