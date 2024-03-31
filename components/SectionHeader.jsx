function SectionHeader({ title, desc }) {
  return (
    <>
      <section className="bg-gradient-to-tr from-primarycolor to-orange-600 p-8 md:p-32 flex flex-col items-center">
        <h1 className="font-bold text-2xl md:text-4xl">{title} </h1>
        <p className=" md:text-lg text-center">{desc}</p>
      </section>
    </>
  );
}

export default SectionHeader;
