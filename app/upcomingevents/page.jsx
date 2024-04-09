"use client";
import EventTicket from "@/components/EventTicket";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

function UpcomingEvent() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader
        title={"Events Listenings"}
        desc={"Find the latest events that suits your interest"}
      />

      <section className="p-4 md:w-5/6 md:p-20 mx-auto flex flex-col md:gap-10 gap-4">
        <EventTicket />
        <EventTicket />
        <EventTicket />
        <EventTicket />
        <EventTicket />
        <EventTicket />
      </section>

      <section
        className={`p-4 md:p-8 mx-auto gap-2 flex justify-center ${theme}-text `}
      >
        <div className={`border  p-2 `}>
          <p className={`${theme}-text`}>PREV</p>
        </div>

        <div className="border  p-2 ">
          <p className={`${theme}-text`}>1</p>
        </div>

        <div className="border  p-2 ">
          <p className={`${theme}-text`}>2</p>
        </div>

        <div className="border  p-2 ">
          <p className={`${theme}-text`}>3</p>
        </div>

        <div className="border  p-2 ">
          <p className={`${theme}-text`}>4</p>
        </div>

        <div className="border  p-2 ">
          <p className={`${theme}-text`}>...</p>
        </div>

        <div className="border  p-2 ">
          <p className={`${theme}-text`}>NEXT</p>
        </div>
      </section>
    </>
  );
}
export default UpcomingEvent;
