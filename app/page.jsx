"use client";
import React from "react";
import HomeBgImg from "@/public/homePageImg.avif";
import { motion } from "motion/react";
import ExplodingStarCards from "./components/ExplodingStarCards";
import AboutUs from "./components/AboutUs";
import ImageScrollStack from "./components/ImageScrollStack";
import HoverImageMenu from "./components/HoverImageMenu";
import GetInTouch from "./components/GetInTouch";
import TopThreeNews from "./components/common/TopThreeNews";
const Home = () => {
  return (
    <div>
      <div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden "
        style={{
          backgroundImage: `url(${HomeBgImg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <motion.h1 className="text-white text-[46px] lg:text-[72px] text-center lg:w-[800px]">
            {["Timeless", "Comfort", "&", "Endless", "Luxury"].map(
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
          <div className="flex flex-col justify-center items-center lg:flex-row gap-3 w-full lg:w-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`block transition-all text-center duration-100 w-[97%] lg:w-auto bg-[#f8ede3] text-[#b85842] font-bold py-3 px-6 rounded-md hover:bg-[#e6d0bc] focus:outline-none focus:ring focus:ring-brown-500 cursor-pointer`}
            >
              Our Vision
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className={`block bg-transplant transition-all text-center duration-500 w-[97%] lg:w-auto text-white font-bold py-3 px-6 border border-[#f8ede3] rounded-md hover:bg-[#f8ede3] hover:text-[#b85842] focus:outline-none focus:ring focus:ring-brown-500 cursor-pointer`}
            >
              Explore Expertise
            </motion.span>
          </div>
        </div>
      </div>
      <section className="min-h-screen flex items-center justify-center bg-[#f8ede3] mx-4 lg:mx-[62px]">
        <AboutUs />
      </section>
      {/* this is for animated img card */}
      <ExplodingStarCards />

      {/* Bottom dummy space */}
      <ImageScrollStack />
      {/* this is for Our experience section */}
      <div className="flex justify-between pt-[100px] lg:pt-[200px] mx-4 lg:mx-[62px] ">
        <div className="hidden lg:block"></div>
        <div className="flex  flex-col gap-5 lg:gap-[40px]">
          <h1 className="flex justify-start items-center gap-1 text-[12px] lg:text-[16px]">
            <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>{" "}
            Our Experience
          </h1>
          <h1 className="text-[38px] lg:text-[64px] leading-none tracking-tight m-0 p-0 break-words lg:w-[650px]">
            Selecting the ideal elements to elevate your space
          </h1>
        </div>
      </div>
      {/* this is for animate  hover img menu */}
      <div className="mx-4 lg:mx-[62px] ">
        <HoverImageMenu />
      </div>
      {/* this is for getTouch */}
      <GetInTouch />
      {/* this is for top three news */}
      <TopThreeNews />
    </div>
  );
};

export default Home;
