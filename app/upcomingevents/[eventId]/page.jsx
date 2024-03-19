import EventOrganisers from "@/components/EventOrganisers";
import TicketOrder from "@/components/TicketOrder";
import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaComment,
  FaFacebook,
  FaLinkedin,
  FaSoundcloud,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

function SingleEventPage() {
  return (
    <>
      <section className="bg-primarycolor p-32 flex flex-col items-center">
        <h1 className="font-bold text-6xl">Event Details</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quidem
          cum repudiandae praesentium. Molestias, voluptatum eaque debitis culpa
          exercitationem rerum?
        </p>
      </section>

      <section className="w-full md:w-5/6 mx-auto">
        <div className="w-full md:w-4/6">
          <div className="relative">
            <Image
              src={"/conf.avif"}
              width={1000}
              height={1000}
              alt="conf"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-44">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">72</h1>
                <p>Days</p>
              </div>

              <p>:</p>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">34</h1>
                <p>Hours</p>
              </div>

              <p>:</p>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">27</h1>
                <p>Minutes</p>
              </div>

              <p>:</p>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">10</h1>
                <p>Seconds</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-5/6 mx-auto flex flex-col gap-4 items-center p-4">
            <h1 className="text-3xl font-bold">Upcoming Events </h1>

            <div className="flex justify-center gap-8 items-center p-4 bg-gray-800 rounded-lg">
              <div className="flex gap-1">
                <Link href={"#"} className="text-white text-sm">
                  <FaFacebook />
                </Link>
                <Link href={"#"} className="text-white text-sm">
                  <FaTwitter />
                </Link>
                <Link href={"#"} className="text-white text-sm">
                  <FaLinkedin />
                </Link>
                <Link href={"#"} className="text-white text-sm">
                  <FaYoutube />
                </Link>
                <Link href={"#"} className="text-white text-sm">
                  <FaSoundcloud />
                </Link>
              </div>

              <div className="flex items-center gap-1">
                <FaUser className="text-white text-sm" />
                <p>John Doe</p>
              </div>

              <div className="flex items-center gap-1">
                <FaComment className="text-white text-sm" />
                <p>44 Commnents</p>
              </div>

              <div className="flex items-center gap-1">
                <FaClock className="text-white text-sm" />
                <p>14 March, 2024</p>
              </div>
            </div>
          </div>

          <div className="flex gap-8 p-4">
            <div className="w-full h-[300px]">
              <Image
                src={"/conf.avif"}
                height={1000}
                width={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[300px]">
              <Image
                src={"/conf.avif"}
                height={1000}
                width={1000}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="py-4 text-gray-500 p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            debitis labore corrupti, repudiandae ut mollitia saepe obcaecati.
            Provident quos vel neque. Optio iusto nesciunt ratione, velit
            pariatur assumenda obcaecati? Laborum, nisi sed nesciunt omnis
            dolorum sunt dolore dolor cumque, quaerat voluptate corrupti itaque
            aperiam laudantium fugit dolorem. Voluptatum deleniti eius odit
            nihil animi similique corporis explicabo ut, eveniet mollitia eos
            non neque, error, natus odio quia numquam officiis iste ullam porro!
            Iusto harum inventore ad eaque, repellendus fugit architecto natus
            optio nam dolorum molestias eveniet iure pariatur aperiam tempora
            eius sed culpa dolor nihil hic, dolores eligendi deleniti earum!
            Esse dolorum deserunt, voluptatibus voluptas totam veniam doloribus
            pariatur. Dolore tenetur sint id labore laudantium aliquam!
            Molestias libero dolorem eum vel qui molestiae nesciunt corrupti eos
            placeat beatae, quidem necessitatibus, esse doloremque! Laudantium
            suscipit veniam itaque enim tempora earum deleniti dicta
            dignissimos! Assumenda adipisci possimus atque, perspiciatis commodi
            non praesentium aut voluptatem soluta voluptate at tenetur
            repudiandae quis incidunt, culpa expedita quaerat delectus, officiis
            laborum saepe iusto recusandae nemo officia asperiores! Ad a fuga
            animi laudantium, error dolorum dolore magni praesentium hic harum.
            Voluptates rerum officiis maxime, beatae vero, maiores possimus
            repellat, aut at quam iste eius nihil est laboriosam doloremque.
          </div>

          <div className="w-full h-[500px] py-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126844.06348606381!2d3.3488896!3d6.537216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1710857933472!5m2!1sen!2sng"
              width="1000"
              height="1000"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

          <div className="py-4 text-gray-500 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolorum nemo rem fugit blanditiis optio delectus voluptatibus fuga
            exercitationem unde! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti dolorum nemo rem fugit blanditiis optio
            delectus voluptatibus fuga exercitationem unde!
          </div>

          <div className="p-4 bg-gray-900 mt-4 rounded-lg">
            <h1 className="font-bold">Buy Tickets to Event</h1>
          </div>

          <div className="flex justify-between bg-gray-800">
            <div className="flex justify-center w-1/4 p-8">
              <p>Ticket Type</p>
            </div>

            <div className="flex justify-center w-1/4 p-8">
              <p>Price</p>
            </div>

            <div className="flex justify-center w-1/4 p-8">
              <p>Qty</p>
            </div>

            <div className="flex justify-center w-1/4 p-8">
              <p>Purchase</p>
            </div>
          </div>

          <TicketOrder />
          <TicketOrder />
          <TicketOrder />
          <TicketOrder />

          <div className="relative h-[200px] my-4">
            <Image
              src={"/conf.avif"}
              width={1000}
              height={1000}
              alt="conf"
              className="w-full h-full object-cover opacity-5"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-20">
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">72</h1>
                <p>Days</p>
              </div>

              <p>:</p>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">34</h1>
                <p>Hours</p>
              </div>

              <p>:</p>

              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">27</h1>
                <p>Minutes</p>
              </div>

              <p>:</p>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">10</h1>
                <p>Seconds</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-900 mt-4 rounded-lg">
            <h1 className="font-bold">Organisers of this events</h1>
          </div>

          <div className="grid grid-cols-3 gap-8 my-4">
            <EventOrganisers />
            <EventOrganisers />
            <EventOrganisers />
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
}

export default SingleEventPage;
