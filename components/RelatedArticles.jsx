import Image from "next/image";

function RelatedArticles() {
  return (
    <>
      <div className="w-full h-[300px] relative">
        <Image
          src={"/albumcover.jpeg"}
          width={1000}
          height={1000}
          alt="blogd"
          className="w-full h-full object-cover"
        />
        <div className="text-white absolute bottom-0 left-0 p-4">
          <h1 className="font-bold text-2xl ">
            All The Red Carpet Looks 2018 Music Awards
          </h1>
          <p>Arditta Colle -25 July, 2018</p>
        </div>
      </div>
    </>
  );
}

export default RelatedArticles;
