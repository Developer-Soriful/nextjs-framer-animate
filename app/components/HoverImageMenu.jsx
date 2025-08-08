"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    title: "Custom Furniture Design",
    image: "/img11.avif",
  },
  {
    title: "Room Decoration & Styling",
    image: "/img12.avif",
  },
  {
    title: "Space Planning & Interior Layout",
    image: "/img13.avif",
  },
  {
    title: "Home Renovations & Remodeling",
    image: "/img14.avif",
  },
  {
    title: "Lighting Design",
    image: "/img15.avif",
  },
  {
    title: "Virtual Interior Design Consultations",
    image: "/img16.avif",
  },
];

export default function SmoothHoverImageMenu() {
  const defaultImage = {
    title: "Default",
    image: "/img11.avif",
  };

  const [hoveredImage, setHoveredImage] = useState(defaultImage);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center bg-[#f8ede3] gap-10 py-[100px] lg:py-[200px]">
      {/* Left Image Display (Only visible on md and up) */}
      <div className="hidden md:block w-full md:w-1/2 h-[400px] md:h-[685px] relative overflow-hidden rounded-xl bg-[#f8ede3]">
        <AnimatePresence mode="wait">
          <motion.img
            key={hoveredImage.image}
            src={hoveredImage.image}
            alt="service"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          />
        </AnimatePresence>
      </div>

      {/* Right Menu (Always visible) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-[#8d493a] font-medium text-[18px] md:text-[20px] ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="group border-b border-[#8d493a] py-2 relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredImage(item)}
            onMouseLeave={() => setHoveredImage(defaultImage)}
          >
            {/* Animated Background – hidden on small screens */}
            <span className="hidden md:block absolute bottom-0 left-0 w-full h-full bg-[#8d493a] scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0"></span>

            {/* Content Animation on Hover */}
            <motion.div
              className="relative z-10 flex items-center gap-3 md:group-hover:text-white"
              initial={{ x: 0, scale: 1 }}
              whileHover={{ x: 20, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <span className="opacity-60 md:group-hover:opacity-100 text-base md:text-lg">
                0{index + 1}
              </span>
              <span className="text-[22px] md:text-[28px]">{item.title}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
