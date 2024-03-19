import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

function Top40() {
  return (
    <>
      <div className="bg-gray-800 p-4 flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[200px] h-[100px]">
            <Image
              src={"/ol.jpeg"}
              width={1000}
              height={1000}
              alt="ol"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl">Don’t Wanna Know</h1>
            <p>Marroon 5ft Kendrick Lamar</p>
          </div>
        </div>

        <div className="flex items-center gap-8 p-4">
          <p>Top 40</p>
          <p>10/4/16</p>
          <FaArrowDown className="text-white" />
        </div>
      </div>
    </>
  );
}

export default Top40;
