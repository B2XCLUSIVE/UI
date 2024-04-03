"use client";
import EventTicket from "@/components/EventTicket";
import SectionHeader from "@/components/SectionHeader";

function UpcomingEvent() {
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

      <section className="md:w-5/6 p-8 mx-auto gap-2 flex justify-center ">
        <div className="border  p-2 ">
          <p>PREV</p>
        </div>

        <div className="border  p-2 ">
          <p>1</p>
        </div>

        <div className="border  p-2 ">
          <p>2</p>
        </div>

        <div className="border  p-2 ">
          <p>3</p>
        </div>

        <div className="border  p-2 ">
          <p>4</p>
        </div>

        <div className="border  p-2 ">
          <p>...</p>
        </div>

        <div className="border  p-2 ">
          <p>NEXT</p>
        </div>
      </section>
    </>
  );
}
export default UpcomingEvent;
