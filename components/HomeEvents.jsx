"use client";
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";
import Event from "./Event";

function HomeEvents() {
  const [allEvent, setAllEvent] = useState([]);
  const fetcher = async () => {
    const response = await axios.get(
      "https://b2xclusive.onrender.com/api/v1/event/events",
    );
    setAllEvent(response?.data?.data);
  };

  const { data, isLoading, error } = useSWR("idata", fetcher);

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
      <div className="flex flex-col gap-4 my-4">
        {allEvent?.slice(0, 3).map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}

export default HomeEvents;
