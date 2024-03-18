import Image from "next/image";
function AlbumCover() {
  return (
    <>
      <div className="w-1/3 h-[250px] md:h-[400px] relative">
        <Image
          src={"/albumcover.jpeg"}
          width={1000}
          height={1000}
          alt="album"
          className="w-ful h-full object-cover"
        ></Image>

        <div className="absolute bottom-0 left-0 right-0 bg-[#0000006d] p-4 ">
          <div className="relative flex justify-center">
            <div className="absolute -top-10 bg-white rounded-lg p-2">
              <p className="text-sm">5.0</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-lg font-bold">The Wailing </h1>
              <p className="text-white text-sm">Kanye West</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumCover;
