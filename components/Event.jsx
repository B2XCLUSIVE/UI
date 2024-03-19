import Image from "next/image";

function Event() {
  return (
    <>
      <div className="bg-gray-800 flex gap-4">
        <div className="h-[100px] w-3/12">
          <Image
            src={"/alb.jpeg"}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-between w-9/12 p-4 items-center">
          <div>
            <h1 className="font-bold">Summer Music Festival</h1>
            <p>LeGaga Romania</p>
          </div>

          <div>
            <h1 className="font-bold">26 August</h1>
            <p>6:45pm</p>
          </div>

          <button className="py-4 px-8 bg-primarycolor text-white">
            Buy Ticket
          </button>
        </div>
      </div>
    </>
  );
}

export default Event;
