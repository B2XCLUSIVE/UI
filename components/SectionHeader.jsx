function SectionHeader({ title, desc }) {
  return (
    <>
      <div className="bg-gradient-to-tr from-primarycolor to-orange-600 p-8 md:p-32 flex flex-col items-center">
        <h1 className="font-bold text-2xl text-white md:text-6xl">{title} </h1>
        <p className=" md:text-lg text-white w-4/6 mx-auto text-center">
          {desc}
        </p>
      </div>
    </>
  );
}

export default SectionHeader;
