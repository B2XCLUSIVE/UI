"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";
import Button from "./Button";

function BlogPost() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div>
        <div className={`${theme}-bgg`}>
          <div className="w-full h-[300px]">
            <Image
              src={"/alb.jpeg"}
              width={1000}
              height={1000}
              alt="alb"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col gap-4">
            <h1 className={`${theme}-text text-2xl font-bold`}>
              Rock &apos;n Roll Really Is The Devil&apos;s Music
            </h1>
            <p className={`${theme}-text`}>
              This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida
              nibh vel velit auctor aliquet.....
            </p>
            <div className="flex justify-between items-center">
              <Button title={"Read More"} />

              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] rounded-full">
                  <Image
                    src={"/alb.jpeg"}
                    width={1000}
                    height={1000}
                    alt="alb"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className={`${theme}-text text-[11px]`}>
                  <p className="font-bold">Ethern Carris</p>
                  <p>Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
