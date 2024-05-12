"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Event from "./Event";

function HomeEvents() {
  const [allEvent, setAllEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://b2xclusive.onrender.com/api/v1/event/events ",
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
        <div className="h-20 w-full bg-gray-300 animate-pulse rounded-lg "></div>
      </div>
    );

  return (
    <>
      <div className="flex w-full flex-col gap-4 my-4">
        {allEvent?.slice(0, 3).map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}

export default HomeEvents;
