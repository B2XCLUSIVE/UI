import CommentsReply from "./CommentsReply";
import Link from "next/link";
import Image from "next/image";
function Comments() {
  return (
    <>
      <div className="p-4 flex gap-4">
        <div className="w-[50px] h-[50px]">
          <Image
            src={"/alb.jpeg"}
            width={1000}
            height={1000}
            alt="alb"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-bold text-md">Brain Deo</h1>
            <p>15-10-2024</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
            cumque voluptates aperiam tempora nostrum adipisci voluptatem
            numquam dolorem a quisquam?
          </p>
          <Link href={"#"} className="text-primarycolor">
            Reply
          </Link>

          <CommentsReply />
        </div>
      </div>
    </>
  );
}

export default Comments;
