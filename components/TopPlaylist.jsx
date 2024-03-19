import Image from "next/image";
import { FaDownload, FaStopCircle } from "react-icons/fa";
function TopPlaylist() {
  return (
    <>
      <div className="bg-gray-800 p-4 flex gap-4 items-center">
        <div className="w-[50px] h-[50px]">
          <Image
            src={"/albumcober.avif"}
            width={1000}
            height={1000}
            alt="music"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-white">Crank It (Dynamic Edit)</h1>
          <p className="text-[11px] text-white">Kanye West ft Post Malone</p>
        </div>
        <div className="flex gap-2">
          <FaDownload className="text-white" />
          <FaStopCircle className="text-white" />
        </div>
      </div>
    </>
  );
}

export default TopPlaylist;
