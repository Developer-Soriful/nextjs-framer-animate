import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#8d493a] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl mb-12 font-semibold">Troscán</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center text-lg">
          {/* Sitemap Section */}
          <div className="flex-1">
            <h3 className="font-[300] mb-4 text-[#c5b5b0] text-center text-[14px]">
              Sitemap
            </h3>
            <ul className="space-y-2 text-[20px] lg:text-[28px] transition-all  flex justify-center items-center flex-col">
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="flex-1">
            <h3 className="font-[300] mb-4 text-[#c5b5b0] text-center text-[14px]">
              Socials
            </h3>
            <ul className="space-y-2 text-[20px] lg:text-[28px] flex justify-center items-center flex-col">
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div className="flex-1">
            <h3 className="font-[300] mb-4 text-[#c5b5b0] text-center text-[14px]">
              More
            </h3>
            <ul className="space-y-2 text-[20px] lg:text-[28px] flex justify-center items-center flex-col">
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  License
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Grainient
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Inspirux
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d8bcb0] duration-500">
                  Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12  border-gray-200" />

        <div className="flex justify-center items-center text-sm text-gray-300">
          <span>© 2025, All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
