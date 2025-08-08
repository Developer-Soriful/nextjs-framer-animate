"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Project = () => {
  // `useState` hook to store the project data. Initialized with an empty array.
  // প্রোজেক্ট ডেটা সংরক্ষণের জন্য `useState` হুক। এটি একটি খালি অ্যারে দিয়ে শুরু করা হয়েছে।
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // `useEffect` hook to fetch data from the projects.json file.
  // প্রোজেক্টস.json ফাইল থেকে ডেটা ফেচ করার জন্য `useEffect` হুক ব্যবহার করা হয়েছে।
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // Assuming the JSON structure has a `services` key that is an array
        // ধরা হচ্ছে যে JSON ডেটা-এর মধ্যে `services` নামে একটি অ্যারে আছে
        if (data && Array.isArray(data.services)) {
          setProjects(data.services);
        } else {
          console.error("Fetched data is not an array:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once

  // Show a loading message while data is being fetched
  // ডেটা লোড হওয়ার সময় একটি লোডিং মেসেজ দেখানো হচ্ছে
  if (loading) {
    return <div>Loading...</div>;
  }

  // If no projects are found after fetching, show a message
  // ডেটা ফেচ করার পর কোনো প্রোজেক্ট না পাওয়া গেলে একটি মেসেজ দেখানো হচ্ছে
  if (!projects || projects.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <div>
      <div className="px-4 lg:px-[50px] py-[100px] lg:py-[200px] ">
        <div className="flex justify-center items-center">
          <motion.h1 className="text-[46px]  lg:text-[96px] text-center break-words lg:w-[800px]">
            {["Where", "Vision", "Meets", "Design"].map((word, index) => (
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
        <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 ">
          {projects.map((item, index) => (
            // Each project item is now a motion.div
            // প্রতিটি প্রজেক্ট আইটেম এখন একটি motion.div
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }} // Initial state: invisible and slightly down
              // প্রাথমিক অবস্থা: অদৃশ্য এবং সামান্য নিচে
              whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
              // যখন ভিউতে আসবে, তখন এই অবস্থায় অ্যানিমেট হবে
              viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% of the item is visible
              // ৫০% আইটেম দৃশ্যমান হলে একবারই অ্যানিমেট হবে
              transition={{ delay: index * 0.1, duration: 0.6 }} // Staggered delay for each item
              // প্রতিটি আইটেমের জন্য স্ট্যাগার্ড ডিলে
            >
              <Link href={`/news/${item.id}`}>
                <div className=" overflow-hidden pb-5 lg:pb-[30px] cursor-pointer">
                  {/* Image with Fixed Height + Responsive */}
                  {/* next/image এর 'fill' prop ব্যবহারের কারণে, parent div-এ height সেট করা আবশ্যক। */}
                  {/* মোবাইল ডিভাইসের জন্য height পরিবর্তন করা হয়েছে যাতে এটি আরও বাস্তবসম্মত দেখায়। */}
                  <div className="relative w-full h-[300px] md:h-[396px] overflow-hidden rounded-lg">
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
                      <span className="text-[14px] text-[#8d493a]">
                        {item.date}
                      </span>
                    </h1>
                    <h2 className="text-[22px]">{item.title}</h2>
                    <p className="text-[14px]">{item.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
