"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Event from "./Event";
import CategoriesHeading from "./CategoriesHeading";
import Link from "next/link"; // Ensure Link is imported

function HomeEvents() {
  const [allEvent, setAllEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://b2xclusive.onrender.com/api/v1/event/events", // Removed trailing space
        );
        setAllEvent(response?.data?.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message || "Error fetching posts");
        setIsLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (error)
    return (
      <div>
        <p className="text-red-500 font-bold">Error Fetching Posts</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full py-4">
        <div className="h-20 w-full bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    );

  return (
    <>
      {Array.isArray(allEvent) && allEvent.length > 0 && (
        <div>
          <CategoriesHeading title="Upcoming Events" />
          <div className="w-full flex justify-center flex-col">
            <div className="flex w-full flex-col gap-4 my-4">
              {allEvent.slice(0, 3).map((event) => (
                <Event key={event.id} {...event} /> // Ensure event.id is unique
              ))}
            </div>
            <Link
              href="/upcomingevents"
              className="text-primarycolor font-bold text-center cursor-pointer"
            >
              Read More
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeEvents;
