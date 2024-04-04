import ArtistAlbum from "@/components/ArtistAlbum";
import SectionHeader from "@/components/SectionHeader";

function Musics() {
  return (
    <>
      <SectionHeader
        title={"Musics"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit labore eaque ducimus qui corporis expedita, quis possimus et corrupti."
        }
      />

      <section className="w-full p-2 md:w-5/6 md:mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
        <ArtistAlbum />
      </section>
      <section className=" p-8 mx-auto gap-2 flex justify-center ">
        <div className="border  p-2 ">
          <p>PREV</p>
        </div>

        <div className="border  p-2 ">
          <p>1</p>
        </div>

        <div className="border  p-2 ">
          <p>2</p>
        </div>

        <div className="border  p-2 ">
          <p>3</p>
        </div>

        <div className="border  p-2 ">
          <p>4</p>
        </div>

        <div className="border  p-2 ">
          <p>...</p>
        </div>

        <div className="border  p-2 ">
          <p>NEXT</p>
        </div>
      </section>
    </>
  );
}

export default Musics;
