import Link from "next/link";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <div
        style={{
          width: "700px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 50px 0px",
        }}
        className="bg-[#f8ede3]  rounded-[8px] h-[58px] mt-[27px] mx-auto flex justify-between items-center py-[5px] pl-5 pr-[5px]"
      >
        <Link className="text-[20px] font-semibold " href="/">
          Troscán
        </Link>
        <nav className="flex justify-center items-center gap-10 font-semibold text-[16px]">
          <Link href="/about">About</Link>
          <Link href="/project">Project</Link>
          <Link href="/news">News</Link>
        </nav>
        <Link href="/contact">
          <Button label={"Contact Us"} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
