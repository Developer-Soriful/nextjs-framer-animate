"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// বিভিন্ন স্ক্রিন সাইজের জন্য ছবির বিভিন্ন ডাইমেনশন ডিফাইন করা হয়েছে
const images = [
  {
    src: "/img2.avif",
    lg: { width: 284, height: 322 },
    md: { width: 200, height: 228 },
    sm: { width: 133, height: 151 },
  },
  {
    src: "/img3.avif",
    lg: { width: 284, height: 193 },
    md: { width: 200, height: 136 },
    sm: { width: 152, height: 103 },
  },
  {
    src: "/img4.avif",
    lg: { width: 355, height: 258 },
    md: { width: 250, height: 182 },
    sm: { width: 152, height: 110 },
  },
  {
    src: "/img5.avif",
    lg: { width: 284, height: 215 },
    md: { width: 200, height: 151 },
    sm: { width: 152, height: 115 },
  },
  {
    src: "/img6.avif",
    lg: { width: 284, height: 322 },
    md: { width: 200, height: 228 },
    sm: { width: 133, height: 151 },
  },
  {
    src: "/img7.avif",
    lg: { width: 312.58, height: 189.84 },
    md: { width: 220, height: 133 },
    sm: { width: 152, height: 92 },
  },
];

// বড় স্ক্রিনের জন্য পজিশনের ভ্যালু (vw এবং vh তে)
const finalPositionsLg = [
  { x: "-30vw", y: "-20vh" },
  { x: "3vw", y: "-20vh" },
  { x: "34vw", y: "-13vh" },
  { x: "-37vw", y: "32vh" },
  { x: "2vw", y: "45vh" },
  { x: "32vw", y: "34vh" },
];

// মাঝারি স্ক্রিনের জন্য পজিশনের ভ্যালু (কাস্টমাইজ করা)
const finalPositionsMd = [
  { x: "-25vw", y: "-15vh" },
  { x: "0vw", y: "-15vh" },
  { x: "28vw", y: "-10vh" },
  { x: "-30vw", y: "25vh" },
  { x: "0vw", y: "35vh" },
  { x: "28vw", y: "25vh" },
];

// ছোট স্ক্রিনের জন্য পজিশনের ভ্যালু (কাস্টমাইজ করা)
const finalPositionsSm = [
  { x: "-30vw", y: "-25vh" },
  { x: "5vw", y: "-30vh" },
  { x: "15vw", y: "-15vh" },
  { x: "-25vw", y: "25vh" },
  { x: "10vw", y: "40vh" },
  { x: "25vw", y: "23vh" },
];

const text = "Transforming spaces with style, through Troscán's exquisite design expertise.";
const words = text.split(" ");

// টেক্সটের অ্যানিমেশনের জন্য নতুন কম্পোনেন্ট
const AnimatedText = () => {
  // `useInView` ব্যবহার করা হয়েছে যাতে কম্পোনেন্টটি স্ক্রিনে এলে অ্যানিমেশন ট্রিগার হয়
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <motion.p
      ref={ref}
      className="absolute translate-[-50%] top-[55%] text-center left-1/2 text-[24px] md:text-[32px] lg:text-[40px]"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          // `inView` ট্রু হলে অ্যানিমেশন ট্রিগার হবে
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          style={{
            display: "inline-block",
            marginRight: index < words.length - 1 ? "10px" : 0,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default function ExplodingStarCards() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [spread, setSpread] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    setSpread(inView);
  }, [inView]);

  // useEffect to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width < 768);
      setIsMediumScreen(width >= 768 && width < 1024);
    };

    // Set initial screen size on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let currentFinalPositions = finalPositionsLg;
  if (isSmallScreen) {
    currentFinalPositions = finalPositionsSm;
  } else if (isMediumScreen) {
    currentFinalPositions = finalPositionsMd;
  }

  return (
    <section
      ref={ref}
      className="h-screen lg:h-[1100px] bg-[#f8ede3] flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative w-full h-full max-w-7xl mx-auto">
        <AnimatedText />
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{
              x: spread ? currentFinalPositions[i].x : 0,
              y: spread ? currentFinalPositions[i].y : 0,
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
              width: isSmallScreen ? `${img.sm.width}px` : (isMediumScreen ? `${img.md.width}px` : `${img.lg.width}px`),
              height: isSmallScreen ? `${img.sm.height}px` : (isMediumScreen ? `${img.md.height}px` : `${img.lg.height}px`),
            }}
          >
            <Image
              src={img.src}
              alt={`card-${i}`}
              width={isSmallScreen ? img.sm.width : (isMediumScreen ? img.md.width : img.lg.width)}
              height={isSmallScreen ? img.sm.height : (isMediumScreen ? img.md.height : img.lg.height)}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
