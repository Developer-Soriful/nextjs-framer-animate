import Image from "next/image";
import React from "react";
import aboutUsImg from "@/public/img29.avif"; // adjust the path according to your project structure

const OurApproach = () => {
  return (
    <div className="text-[#8d493a] flex justify-between  gap-[50px] flex-col lg:flex-row pb-[100px] lg:pb-[200px]">
      <div className="flex flex-col justify-between items-start flex-1">
        <div className="flex flex-col gap-5 lg:gap-[40px]">
          <h1 className="flex justify-start items-center gap-1 text-[12px] lg:text-[16px]">
            <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>{" "}
            Our Approach
          </h1>
          <h1 className="text-[38px] lg:text-[64px] leading-none tracking-tight m-0 p-0 break-words lg:w-[580px]">
            A Vision Shaped by Elegance and Expertise
          </h1>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-balance">
            We believe every space should tell a story that reflects its unique
            personality and the people who inhabit it.
          </p>
          <p className="text-balance">
            With a thoughtful and intentional approach, we design spaces that
            exude balance, harmony, and authenticity. Our process is
            collaborative and meticulous, grounded in the philosophy that true
            beauty lies in the subtle details that make a space feel like home.
          </p>
        </div>
      </div>
      <div className="flex-1 ">
        <Image
          src={aboutUsImg}
          alt="About Us Image"
          className="rounded-xl w-full h-[492px] lg:h-[685px]"
        />
      </div>
    </div>
  );
};

export default OurApproach;
