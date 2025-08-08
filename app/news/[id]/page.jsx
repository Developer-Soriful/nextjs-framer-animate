"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NewsDetails = ({ params }) => {
  const [projects, setProjects] = useState([]);
  const { id } = params;
  useEffect(() => {
    fetch("/news_data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const project = projects.find((project) => project.id === id);
  console.log(project);

  return (
    <div className="min-h-screen">
      <div>
        <div>
          <Image
            src={project.img}
            alt={project.title}
            width={500}
            height={500}
          />
        </div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-start items-center gap-1 text-[12px] lg:text-[14px]"
          >
            <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>{" "}
            Our Experience
          </motion.h1>
          <h1>{project.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
