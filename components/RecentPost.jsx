import Image from "next/image";

function RecentPost() {
  return (
    <>
      <div className="bg-gray-800 p-4 flex gap-4  items-center">
        <div className="w-[100px] h-[100px]">
          <Image
            src={"/albumcover.avif"}
            width={1000}
            height={1000}
            alt="all"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-xl">
            Red Hot chilly peppers ready to slow down
          </h1>
          <p>26, July 2018</p>
        </div>
      </div>
    </>
  );
}

export default RecentPost;
