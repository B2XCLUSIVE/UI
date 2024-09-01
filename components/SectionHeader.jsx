function SectionHeader({ title, desc }) {
  return (
    <>
      <div className="bg-primarycolor p-8 md:p-24 h-[350px] flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-center text-white md:text-4xl">
          {title}{" "}
        </h1>
        <p className=" md:text-lg text-white md:w-3/6 mx-auto text-center">
          {desc}
        </p>
      </div>
    </>
  );
}

export default SectionHeader;
