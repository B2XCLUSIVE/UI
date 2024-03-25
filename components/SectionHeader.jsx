function SectionHeader({ title, desc }) {
  return (
    <>
      <section className="bg-gradient-to-tr from-primarycolor to-orange-600 p-32 flex flex-col items-center">
        <h1 className="font-bold text-6xl">{title} </h1>
        <p className="text-lg">{desc}</p>
      </section>
    </>
  );
}

export default SectionHeader;
