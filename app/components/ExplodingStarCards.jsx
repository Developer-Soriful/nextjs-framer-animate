"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/img2.avif", width: 284, height: 322 },
  { src: "/img3.avif", width: 284, height: 193 },
  { src: "/img4.avif", width: 355, height: 258 },
  { src: "/img5.avif", width: 284, height: 215 },
  { src: "/img6.avif", width: 284, height: 322 },
  { src: "/img7.avif", width: 312.58, height: 189.84 },
];

// Position values in vw and vh for responsiveness
const finalPositions = [
  { x: "-30vw", y: "-20vh" },
  { x: "3vw", y: "-20vh" },
  { x: "34vw", y: "-13vh" },
  { x: "-37vw", y: "32vh" },
  { x: "2vw", y: "45vh" },
  { x: "32vw", y: "34vh" },
];

export default function ExplodingStarCards() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [spread, setSpread] = useState(false);

  useEffect(() => {
    setSpread(inView);
  }, [inView]);

  return (
    <section
      ref={ref}
      className=" h-screen lg:h-[1100px] bg-[#f8ede3] flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative w-full h-full max-w-7xl mx-auto">
        <p className="absolute translate-[-50%] top-[55%] left-1/2 text-center text-[40px]">
          Transforming spaces with style, through Troscán's exquisite design
          expertise.
        </p>
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              x: spread ? finalPositions[i].x : 0,
              y: spread ? finalPositions[i].y : 0,
              rotate: spread ? 0 : (i - 2.5) * 5,
              scale: spread ? 1 : 0.95,
              opacity: 1,
              transition: {
                duration: 1,
                delay: i * 0.08,
                type: "spring",
                stiffness: 80,
                damping: 15,
              },
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-lg border border-white z-[10]"
            style={{
              width: `${img.width}px`,
              height: `${img.height}px`,
            }}
          >
            <Image
              src={img.src}
              alt={`card-${i}`}
              width={img.width}
              height={img.height}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
