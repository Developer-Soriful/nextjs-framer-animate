"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = ["/img8.avif", "/img9.avif", "/img10.avif"];

export default function ImageScrollStack() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y2 = useTransform(scrollYProgress, [0.2, 0.5], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], ["100%", "0%"]);

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.6], [1, 1.05]);
  const scale3 = useTransform(scrollYProgress, [0.5, 1], [1, 1.05]);

  return (
    <>
      <section ref={containerRef} className="h-[300vh] relative bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* BG Image 1 */}
          <motion.div
            className="absolute inset-0 z-10 bg-center bg-cover bg-no-repeat flex justify-center items-center"
            style={{
              backgroundImage: `url(${images[0]})`,
              y: 0, // no translate on first
              scale: scale1,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-4 text-[#f8ede3] text-center">
              <span>01</span>
              <h1 className="text-[38px] lg:text-[64px] ">
                Serene Urban Retreat
              </h1>
              <p>Where modern comfort meets peaceful sophistication.</p>
              <div>
                <button className="bg-[#f8ede3] text-[#8d493a] font-bold py-3 px-6 rounded-md hover:bg-[#c9b8ae] focus:outline-none focus:ring focus:ring-brown-500 ">
                  View Project
                </button>
              </div>
            </div>
          </motion.div>

          {/* BG Image 2 */}
          <motion.div
            className="absolute inset-0 z-20 bg-center bg-cover bg-no-repeat flex justify-center items-center"
            style={{
              backgroundImage: `url(${images[1]})`,
              y: y2,
              scale: scale2,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-4 text-[#f8ede3] text-center">
              <span>02</span>
              <h1 className="text-[38px] lg:text-[64px] ">
                Luxurious Coastal <br /> Living
              </h1>
              <p>Bringing the beauty of the shore into your home.</p>
              <div>
                <button className="bg-[#f8ede3] text-[#8d493a] font-bold py-3 px-6 rounded-md hover:bg-[#c9b8ae] focus:outline-none focus:ring focus:ring-brown-500 ">
                  View Project
                </button>
              </div>
            </div>
          </motion.div>

          {/* BG Image 3 */}
          <motion.div
            className="absolute inset-0 z-30 bg-center bg-cover bg-no-repeat flex justify-center items-center"
            style={{
              backgroundImage: `url(${images[2]})`,
              y: y3,
              scale: scale3,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-4 text-[#f8ede3] text-center">
              <span>03</span>
              <h1 className="text-[38px] lg:text-[64px] text-wrap">
                Modern Elegance in <br /> Every Room
              </h1>
              <p>Redefining spaces with timeless style and innovation.</p>
              <div>
                <button className="bg-[#f8ede3] text-[#8d493a] font-bold py-3 px-6 rounded-md hover:bg-[#c9b8ae] focus:outline-none focus:ring focus:ring-brown-500 ">
                  View Project
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
