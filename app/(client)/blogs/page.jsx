import CategoriesHeading from "@/components/CategoriesHeading";
import SectionHeader from "@/components/SectionHeader";
import TopPlaylist from "@/components/TopPlaylist";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import AllBlogPosts from "@/components/AllBlogPosts";
import HomeRecentPost from "@/components/HomeRecentPost";

function Blogs() {
  return (
    <>
      <SectionHeader
        title={"Trending Stories"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad quae dolores? Unde similique beatae aspernatur dolore corporis tempore exercitationem."
        }
      />

      <section className="w-full md:w-5/6 mx-auto p-4">
        <div className="flex gap-4 w-full">
          <div className="md:w-4/6 rounded-full flex items-center z-10 border">
            <input
              type="text"
              placeholder="Search here"
              className={` w-11/12 bg-transparent p-4 text-white outline-none `}
            />
            <button className="rounded-full text-white bg-primarycolor flex items-center md:text-base text-[12px] py-2 gap-1 px-4 mr-2">
              <FaSearch /> Search
            </button>
          </div>

          <div className="w-2/6 p-4 bg-transparent outline-none border rounded-lg">
            <select
              name=""
              id=""
              className="w-full bg-transparent outline-none"
            >
              <option value="">Filter</option>
              <option value="">Realesed Date</option>
              <option value="">Artist</option>
            </select>
          </div>
        </div>
      </section>

      <section className=" md:w-5/6 md:p-8 mx-auto md:flex md:gap-4">
        <div className="w-full md:w-full">
          <div>
            <AllBlogPosts />
          </div>
        </div>
        {/* <div className=" p-4 md:w-2/5"> */}
        {/*   {/* TOP PLAYLIST SECTION */}
        {/*   <CategoriesHeading title={"Top Playlists"} /> */}
        {/**/}
        {/*   <div className="grid grid-cols-2 md:flex md:flex-col gap-2"> */}
        {/*     <TopPlaylist /> */}
        {/*     <TopPlaylist /> */}
        {/*     <TopPlaylist /> */}
        {/*     <TopPlaylist /> */}
        {/*   </div> */}
        {/**/}
        {/*   <div className="my-8 w-full h-[3px] bg-primarycolor"></div> */}
        {/**/}
        {/*   {/* GET CONNECTED */}
        {/*   <CategoriesHeading title={"Get Connected"} /> */}
        {/**/}
        {/*   <div className="flex justify-between p-4"> */}
        {/*     <FaFacebook className={`text-3xl `} /> */}
        {/*     <FaTwitter className={` text-3xl `} /> */}
        {/*     <FaLinkedin className={`text-3xl `} /> */}
        {/*     <FaYoutube className={` text-3xl `} /> */}
        {/*     <FaInstagram className={` text-3xl `} /> */}
        {/*     <FaPinterest className={` text-3xl `} /> */}
        {/*   </div> */}
        {/**/}
        {/*   <div className="my-8 w-full h-[3px] bg-primarycolor"></div> */}
        {/**/}
        {/*   {/* Recent post section */}
        {/*   <CategoriesHeading title={"Recent Posts"} /> */}
        {/**/}
        {/*   <div className=" flex flex-col gap-1 pt-4 "> */}
        {/*     <div> */}
        {/*       <HomeRecentPost /> */}
        {/*     </div>{" "} */}
        {/*   </div> */}
        {/* </div> */}
      </section>
    </>
  );
}

export default Blogs;
