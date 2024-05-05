import Image from "next/image";

function RelatedArticles({ name, subtitle }) {
  return (
    <>
      <div className="w-full h-[150px] md:h-[300px] relative">
        <Image
          src={"/albumcover.jpeg"}
          width={1000}
          height={1000}
          alt="blogd"
          className="w-full h-full object-cover"
        />
        <div className="text-white absolute bottom-0 left-0 p-2 md:p-4">
          <h1 className="font-bold text-sm md:text-2xl ">{name}</h1>
          <p className="md:text-base text-[10px]">
            {subtitle || "A littlee about the album goes here"}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default RelatedArticles;
