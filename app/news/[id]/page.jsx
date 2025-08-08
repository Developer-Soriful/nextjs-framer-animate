"use client";

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatIsNext from "@/app/components/common/WhatIsNext";

const NewsDetails = ({ params }) => {
  const useParameter = use(params);
  const { id } = useParameter;

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/news_data.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  const project = projects.find((project) => project.id === id);

  if (!project) return <div>Project not found</div>;

  // Split the title into words for animation
  const words = project.title.split(" ");

  return (
    <div className="py-[100px] lg:py-[200px] px-4 lg:px-[50px]">
      <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-center items-start lg:items-center">
        <div className="flex-1">
          <Image
            src={project.img}
            alt={project.title}
            width={652}
            height={1200}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-start items-center gap-1 text-[12px] lg:text-[14px]"
          >
            <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>{" "}
            {project.date}
          </motion.h1>

          <motion.h1 className="text-[38px] lg:text-[64px]">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                style={{
                  display: "inline-block",
                  marginRight: index < words.length - 1 ? "10px" : 0,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-[16px]">{project.subtitle}</span>
          </motion.h1>
        </div>
      </div>
      <div className="w-full py-[100px] lg:py-[200px]">
        <div className="w-full lg:w-[700px] mx-auto p-[50px] bg-[#ffffff]">
          {project.description}
        </div>
      </div>
      <WhatIsNext />
    </div>
  );
};

export default NewsDetails;
