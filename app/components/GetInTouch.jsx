"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./common/Button";
import Link from "next/link";

const images = ["/img16.avif", "/img9.avif", "/img10.avif"];

export default function GetInTouch() {
  const containerRef = useRef(null);

  // Scroll progress for the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scaling first background slightly as user scrolls
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Card comes from bottom (y = 100%) to center (y = 0%)
  const cardTranslateY = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    ["100%", "0%"]
  );

  // Fades out slightly when scroll past
  const cardOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 1]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-black">
      {/* Sticky area for scroll animation */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* BG Image 1 */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(${images[0]})`,
            scale: scaleBg,
          }}
        />

        {/* Card-like 2nd content over BG */}
        <motion.div
          className="absolute inset-0 z-20 flex justify-center items-center"
          style={{
            y: cardTranslateY,
            opacity: cardOpacity,
          }}
        >
          <div className="w-[90%] md:w-[700px] rounded-xl px-7 py-10 lg:p-[80px] bg-[#f8ede3] backdrop-blur-sm text-[#8d493a] text-center flex flex-col gap-4">
            <p className="text-[20px] md:text-[28px] text-balance">
              Ready to reimagine your space? Connect with us at Troscán to bring
              your vision to life with our expertise in design and decoration.
            </p>
            <div>
              <Link href="/contact">
                <Button label={"Get in touch"} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
