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

        <div>
          <Link href={"#"}>Continue</Link>
          <Link href={"#"}>Explore</Link>
        </div>
      </section>
    </main>
  );
}
