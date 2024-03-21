import EventTicket from "@/components/EventTicket";

function UpcomingEvent() {
  return (
    <>
      <section className="bg-primarycolor p-20 flex flex-col items-center">
        <h1 className="font-bold text-6xl">Events Listsings</h1>
        <p>Find the latest event that suits your interests</p>
      </section>

      <section className="p-4 md:w-5/6 md:p-20 mx-auto flex flex-col gap-10">
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
