"use client";
import CategoriesHeading from "@/components/CategoriesHeading";
import Comments from "@/components/Comments";
import RelatedArticles from "@/components/RelatedArticles";
import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";

function SingleBlog() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SectionHeader title={"This blog"} desc={"The subhead"} />
      <section className="w-full p-4 md:w-3/4 md:mx-auto ">
        <div>
          <div className="py-4">
            <h1 className={`${theme}-text text-5xl font-bold`}>
              The Painfully Obvious Reason Why Palestinians Don’t Condemn Hamas
            </h1>
            <p className={`${theme}-text`}>
              A call for Palestine’s freedom is not a call for Israel’s
              destruction.
            </p>
          </div>

          <div className="flex gap-2">
            <div className="w-[50px] h-[50px] rounded-full">
              <Image
                src={"/alb.jpeg"}
                width={1000}
                height={1000}
                alt="alb"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <h1 className={`${theme}-text font-bold text-lg`}>Steve Qj</h1>
              <div className="flex gap-4">
                <p className={`${theme}-text`}>5 mins Read</p>
                <p className={`${theme}-text`}>Two days ago</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 my-4 border-t border-b border-gray-400">
            <div className="flex items-center gap-2">
              <FaHeart className={`${theme}-text`} />
              <p className={`${theme}-text`}>24k</p>
            </div>
            <div className="flex items-center gap-2">
              <FaComment className={`${theme}-text`} />
              <p className={`${theme}-text`}>100k</p>
            </div>

            <FaShare className={`${theme}-text`} />
          </div>

          <div className="w-full h-[600px]">
            <Image
              src={"/alb.jpeg"}
              width={2000}
              height={2000}
              alt="alb"
              className="w-full h-full object-cover"
            />
          </div>

          <p className={`${theme}-text py-4 md:text-lg text-[10px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            autem corporis quo omnis iusto rem molestias! Repudiandae natus
            laudantium, pariatur voluptatum adipisci alias. Dolores blanditiis
            culpa debitis? Pariatur temporibus itaque dolore accusantium nisi,
            iusto maiores repellat ipsum inventore soluta ratione quibusdam
            sequi vel adipisci quo veniam consectetur vero eveniet ab quia rem
            incidunt porro! Ullam nisi quas, quis repellendus eius hic soluta
            sint laboriosam, possimus quasi fuga nemo. Dolorum optio sunt minima
            cumque ad consequuntur incidunt animi sed, non, nulla dignissimos
            vel vitae placeat id praesentium itaque. Quibusdam tempore ab, amet
            deserunt reprehenderit atque harum autem mollitia molestias est
            quaerat provident numquam sint voluptatibus sit rem accusamus
            necessitatibus dolore pariatur. Vitae in nihil ad, assumenda error
            nemo, ex atque consectetur illum quidem, iure tenetur eius explicabo
            veritatis! Iste fugit placeat obcaecati maxime vitae, perferendis
            praesentium optio laborum minima a eum. Delectus harum est ipsa
            nostrum recusandae, asperiores dolor adipisci modi accusantium
            aspernatur similique et explicabo assumenda voluptate, fugit
            laudantium beatae fugiat libero debitis voluptas quia tenetur
            exercitationem placeat natus rem, iure totam. Inventore tenetur
            magni adipisci ducimus quia minima dolore? Sunt ea molestiae facere
            quis quos suscipit quaerat necessitatibus debitis eaque temporibus?
            Aliquid, officia. Fuga laudantium quasi earum deleniti unde?
          </p>

          <p className={`${theme}-text py-4 md:text-lg text-[10px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            autem corporis quo omnis iusto rem molestias! Repudiandae natus
            laudantium, pariatur voluptatum adipisci alias. Dolores blanditiis
            culpa debitis? Pariatur temporibus itaque dolore accusantium nisi,
            iusto maiores repellat ipsum inventore soluta ratione quibusdam
            sequi vel adipisci quo veniam consectetur vero eveniet ab quia rem
            incidunt porro! Ullam nisi quas, quis repellendus eius hic soluta
            sint laboriosam, possimus quasi fuga nemo. Dolorum optio sunt minima
            cumque ad consequuntur incidunt animi sed, non, nulla dignissimos
            vel vitae placeat id praesentium itaque. Quibusdam tempore ab, amet
            deserunt reprehenderit atque harum autem mollitia molestias est
            quaerat provident numquam sint voluptatibus sit rem accusamus
            necessitatibus dolore pariatur. Vitae in nihil ad, assumenda error
            nemo, ex atque consectetur illum quidem, iure tenetur eius explicabo
            veritatis! Iste fugit placeat obcaecati maxime vitae, perferendis
            praesentium optio laborum minima a eum. Delectus harum est ipsa
            nostrum recusandae, asperiores dolor adipisci modi accusantium
            aspernatur similique et explicabo assumenda voluptate, fugit
            laudantium beatae fugiat libero debitis voluptas quia tenetur
            exercitationem placeat natus rem, iure totam. Inventore tenetur
            magni adipisci ducimus quia minima dolore? Sunt ea molestiae facere
            quis quos suscipit quaerat necessitatibus debitis eaque temporibus?
            Aliquid, officia. Fuga laudantium quasi earum deleniti unde?
          </p>
        </div>

        <CategoriesHeading title={"Related Articles"} />
        <div className="grid grid-cols-2 gap-4 py-4">
          <RelatedArticles />
          <RelatedArticles />
        </div>

        <CategoriesHeading title={"Comments"} />
        <Comments />
      </section>
    </>
  );
}

export default SingleBlog;
