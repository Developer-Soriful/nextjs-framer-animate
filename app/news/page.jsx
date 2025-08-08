"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/news_data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="py-[100px] lg:py-[200px] flex flex-col items-center w-full px-4 lg:px-[50px]">
        <motion.h1 className="text-[46px]text-center lg:text-[96px] text-center break-words lg:w-[800px]">
          {["Expert", "Insights", "and", "Design", "Inspiration"].map(
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
        {/* Data Render */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 "
        >
          {projects.map((item, index) => (
            <Link key={index} href={`/news/${item.id}`}>
              <div
                key={index}
                className=" overflow-hidden pb-5  lg:pb-[30px] cursor-pointer"
              >
                {/* Image with Fixed Height + Responsive */}
                <div className="relative w-full h-[716px] md:h-[396px] overflow-hidden rounded-lg">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg transition-transform duration-600 ease-in-out hover:scale-115"
                  />
                </div>

                {/* Content */}
                <div className="pt-[28px] min-h-[106px] text-[#8d493a]">
                  <h1 className="flex items-center gap-1 text-[12px] lg:text-[16px] text-gray-500">
                    <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block"></span>
                    <span className="text-[14px] text-[#8d493a]">
                      {item.date}
                    </span>
                  </h1>
                  <h2 className="text-[22px]">{item.title}</h2>
                  <p className="text-[14px]">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default News;
