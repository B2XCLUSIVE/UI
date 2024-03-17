import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="herosection">
        <p>The B2EXCLUSIVE Blog</p>
        <h1 className="text-4xl font-extrabold text-center">
          Stories, Thoughts <br /> Ideas and More
        </h1>

        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, non
          optio. Ipsa culpa quibusdam necessitatibus!
        </p>

        <div className="flex gap-4">
          <Link
            className="py-1 px-4 rounded-full border border-white"
            href={"#"}
          >
            Continue
          </Link>
          <Link
            className="py-1 px-4 rounded-full border border-white"
            href={"#"}
          >
            Explore
          </Link>
        </div>
      </section>
    </main>
  );
}
