"use client"
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div
        style={{
          width: "700px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 50px 0px",
        }}
        className="bg-[#f8ede3]  rounded-[8px] h-[58px] mt-[27px] mx-auto flex justify-between items-center py-[5px] pl-5 pr-[5px]"
      >
        <Link className="text-[20px] font-semibold " href="/">
          Troscán
        </Link>
        <nav className="flex justify-center items-center gap-10 font-semibold text-[16px]">
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/news">News</Link>
        </nav>
        <Link href="/contact">
          <Button label={"Contact Us"} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
