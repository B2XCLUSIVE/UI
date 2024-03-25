"use client";

import SectionHeader from "@/components/SectionHeader";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

function Contact() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section>
        <SectionHeader
          title={"Contact us"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quide cum repudiandae praesentium. Molestias, voluptatum eaque debitis culpa exercitationem rerum"
          }
        />

        <section className="w-full p-2 md:w-5/6 md:mx-auto">
          <div className="w-full h-[700px] p-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126844.06348606381!2d3.3488896!3d6.537216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1710857933472!5m2!1sen!2sng"
              width="1000"
              height="1000"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

          <div className="md:flex md:gap-4 md:items-center">
            <div className="w-full md:w-2/4">
              <h1 className={`${theme}-text font-bold text-4xl`}>
                Get In Touch
              </h1>
              <form className="p-2">
                <div className=" md:flex w-full gap-4 my-2">
                  <input
                    type="text"
                    className=" my-2 md:my-0 p-4 bg-gray-800 w-full"
                    placeholder="firstname"
                  />
                  <input
                    type="phone"
                    className="my-2 md:my-0 p-4 bg-gray-800 w-full"
                    placeholder="phonenumber"
                  />
                </div>
                <div className="md:flex w-full gap-4 my-2">
                  <input
                    type="email"
                    className="my-2 md:my-0 p-4 bg-gray-800 w-full"
                    placeholder="Email Address"
                  />
                  <input
                    type="text"
                    className=" my-2 md:my-0 p-4 bg-gray-800 w-full"
                    placeholder="website"
                  />
                </div>

                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="w-full h-[300px] my-2 p-4 bg-slate-800"
                  placeholder="Type your comments"
                ></textarea>

                <button className="w-full py-4 px-8 bg-primarycolor text-white">
                  Send Comments
                </button>
              </form>
            </div>

            <div
              className={`${theme}-text flex flex-col gap-4 w-full md:w-2/4`}
            >
              <h1 className="font-bold text-4xl">Contact Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sagittis lacinia tellus. Nullam venenatis a sem non dictum.
                Aliquam orci ipsum, malesuada lacinia faucibus nec, bibendum a
                enim...
              </p>

              <div className="flex gap-2 items-center">
                <FaPhone />
                <p>+234 123 456 7890</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaEnvelope />
                <p>example@b2exclusive.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaMap />
                <p>90, Downtown St, USA</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Contact;
