"use client"
import React from "react";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <div>
      <div className="py-[100px] lg:py-[200px] flex justify-center items-center">
        <motion.h1 className="text-[46px] lg:text-[96px] text-center lg:w-[800px]">
          {["Crafting", "Spaces", "with", "Style"].map((word, index) => (
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
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default AboutSection;
