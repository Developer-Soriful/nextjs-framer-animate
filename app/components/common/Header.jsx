"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for the top bar of the hamburger menu
  const bar1 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 3 }, // Adjusted y to fit two bars
  };
  
  // Variants for the bottom bar of the hamburger menu
  const bar2 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -3 }, // Adjusted y to fit two bars
  };

  return (
    <motion.div
      className="mx-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 50px 0px",
        }}
        className="bg-[#f8ede3] rounded-[8px] h-[58px] lg:w-[700px] mt-[27px] mx-auto flex justify-between items-center py-[5px] pl-5 pr-1"
      >
        <Link className="text-[20px] font-semibold" href="/">
          Troscán
        </Link>

        <nav className="hidden lg:flex justify-center items-center gap-10 font-semibold text-[16px]">
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/news">News</Link>
        </nav>

        {/* Hamburger visible only on small devices */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
          tabIndex={0}
          style={{
            backgroundColor: "rgb(141, 73, 58)",
            borderRadius: "3px",
            padding: "6px",
            border: "none",
          }}
        >
          {/* Top bar */}
          <motion.span
            className="block bg-[#f8ede3] rounded-[5px] mb-1"
            style={{ height: 2, width: 24 }} // Changed height to 2 for thinner lines
            variants={bar1}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          {/* Bottom bar */}
          <motion.span
            className="block bg-[#f8ede3] rounded-[5px]"
            style={{ height: 2, width: 24 }} // Changed height to 2 for thinner lines
            variants={bar2}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Contact button visible only on large devices */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <Button label={"Contact Us"} />
          </Link>
        </div>
      </div>

      {/* Mobile menu below header, width and alignment matching header */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            style={{
                width: "100%",
                height : "100%"
            }}
            initial={{ opacity: 0, y: -5 }} // Defines the starting state (hidden, slightly above)
            animate={{ opacity: 1, y: 0 }}   // Defines the animating-in state (visible, in place)
            exit={{ opacity: 0, y: -50 }}      // Defines the animating-out state (fading out, moving up)
            transition={{ duration: 0.5 }}  // Sets the duration of the transition
            className="lg:hidden bg-[#f8ede3] duration-700 -mt-2 mx-auto  py-4 font-semibold flex justify-center items-center flex-col gap-4"
          >
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/project" onClick={() => setIsOpen(false)}>
              Project
            </Link>
            <Link href="/news" onClick={() => setIsOpen(false)}>
              News
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button label={"Contact Us"} />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
