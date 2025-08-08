import Image from "next/image";
import React from "react";
import aboutUsImg from "@/public/img1.avif"; // adjust the path according to your project structure
import Button from "./common/Button";

const AboutUs = () => {
  return (
    <div className="text-[#8d493a] flex justify-between  gap-[50px] flex-col lg:flex-row pt-[100px] lg:pt-[200px]">
      <div className="flex flex-col justify-between items-start flex-1">
        <div className="flex flex-col gap-5 lg:gap-[40px]">
          <h1 className="flex justify-start items-center gap-1 text-[12px] lg:text-[16px]">
            <span className="w-[6px] h-[6px] bg-[#8d493a] rounded-full block mb-2"></span>{" "}
            About Us
          </h1>
          <h1 className="text-[38px] lg:text-[64px] leading-none tracking-tight m-0 p-0 break-words lg:w-[580px]">
            Where Spaces Inspire, and Design Comes Alive
          </h1>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-balance">
            At Troscán, we believe that every space has a story to tell. As a
            premier furniture design and room decorating agency.
          </p>
          <p className="text-balance">
            Our expert team blends timeless craftsmanship with innovative
            designs, ensuring each piece and layout reflects your unique taste
            and lifestyle. Whether you're looking to reimagine your living room.
          </p>
          <div>
            <Button label={"More AboutUs"} />
          </div>
        </div>
      </div>
      <div className="flex-1 ">
        <Image
          src={aboutUsImg}
          alt="About Us Image"
          className="rounded-xl w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
