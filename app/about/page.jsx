"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import OurApproach from "../components/common/OurApproach";
import OurTeam from "../components/common/OurTeam";

const AboutSection = () => {
  return (
    <div className=" px-4 lg:px-[50px]">
      <div className=" py-[100px] lg:py-[200px] flex flex-col justify-center items-center gap-[60px]">
        <motion.h1 className="text-[46px] lg:text-[96px] text-center lg:w-[800px] ">
          {["Crafting", "Timeless", "Spaces", "with", "Style"].map(
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full h-[500px] lg:h-[800px] relative"
        >
          <Image
            src="/img28.avif"
            fill
            alt="about image"
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>
      </div>
      {/* this is for approach */}
      <OurApproach />
      {/* this is for our team */}
      <OurTeam />
    </div>
  );
};

export default AboutSection;
