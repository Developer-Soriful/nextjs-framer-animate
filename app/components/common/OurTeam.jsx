"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/teamMembers.json")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data));
  }, []);

  return (
    <div className="py-16">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-start items-center gap-1 text-[12px] lg:text-[16px] text-[#8d493a]"
        >
          <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[38px] lg:text-[64px] lg:w-[600px] text-center"
        >
          Meet the Visionaries Behind Troscán
        </motion.p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Image */}
            <div className="relative w-full h-[380px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              <h2 className="text-lg font-medium text-gray-900">
                {member.name}
              </h2>
              <p className="text-sm text-[#8d493a] mb-4">{member.skill}</p>

              <button className="px-6 py-2 rounded-md bg-[#f7f0eb] text-[#8d493a] font-medium hover:bg-[#e6d8d1] transition">
                Contact
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
