import Image from "next/image";

function SingleEventPage() {
  return (
    <>
      <section className="bg-primarycolor p-32 flex flex-col items-center">
        <h1 className="font-bold text-6xl">Event Details</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem
          cum repudiandae praesentium. Molestias, voluptatum eaque debitis culpa
          exercitationem rerum?
        </p>
      </section>

      <section className="w-full md:w-5/6 mx-auto">
        <div className="w-full md:w-4/6 bg-black">
          <div className="relative">
            <Image
              src={"/conf.avif"}
              width={1000}
              height={1000}
              alt="conf"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-44">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">72</h1>
                <p>Days</p>
              </div>

              <p>:</p>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">34</h1>
                <p>Hours</p>
              </div>

              <p>:</p>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">27</h1>
                <p>Minutes</p>
              </div>

              <p>:</p>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">10</h1>
                <p>Seconds</p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
}

export default SingleEventPage;
