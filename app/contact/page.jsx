"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-[100px] lg:py-[200px] mx-4 lg:mx-[62px] bg-[#f8ede3]">
        <motion.h1 className="text-[46px] lg:text-[96px] text-center lg:w-[800px] ">
          {["Let's", "Bring", "Your", "Vision", "to Life"].map(
            (word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                style={{
                  display: "inline-block",
                  marginRight: index < 4 ? "10px" : 0,
                }}
              >
                {word}
              </motion.span>
            )
          )}
        </motion.h1>
        <div className="flex  items-center justify-center  w-full">
          {/* Container for the image and form */}
          <div className="flex flex-col lg:flex-row gap-2 mt-8  w-full overflow-hidden">
            {/* Image section */}
            <div className=" flex items-center w-full justify-center bg-[#f7e9dc] ">
              {/* Using Next.js Image component for optimization */}
              <Image
                src="/img37.avif"
                alt="Stylish chair"
                width={500} // প্রস্থ এবং উচ্চতা নির্দিষ্ট করতে হবে Next.js Image এর জন্য
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Form section */}
            <div className=" flex flex-col justify-center w-full items-center p-8 rounded-lg md:p-12 border border-[#c2998b]">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                Contact Us
              </h2>
              <form className="space-y-4">
                {/* First Name এবং Last Name input fields */}
                <div className="flex flex-col justify-center items-center md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full lg:flex-1 p-3 rounded-lg border border-[#c2998b] focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" w-full lg:flex-1 p-3 rounded-lg border border-[#c2998b] focus:outline-none focus:ring-2 focus:ring-gray-400"
                  />
                </div>

                {/* Email, Phone এবং Message input fields */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-[#c2998b] focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 rounded-lg border border-[#c2998b] focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 rounded-lg border border-[#c2998b] focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                ></textarea>

                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-[#c2998b] text-[#f7ebe0] w-full p-3 rounded-lg font-medium shadow-md transition-all duration-300 ease-in-out hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
