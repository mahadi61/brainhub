"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const navLinks = [
    { linkName: "Services", linkRef: "/" },
    { linkName: "Technologies", linkRef: "/" },
    { linkName: "Industries", linkRef: "/" },
    { linkName: "portfolio", linkRef: "/" },
    { linkName: "insights", linkRef: "/" },
    { linkName: "about", linkRef: "/" },
  ];

  return (
    <nav className="w-11/12 mx-auto py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative">
      {/* brand */}
      <Link href="/" className="text-3xl uppercase font-bold text-white">
        Brainhub
      </Link>

      {/* navlist */}
      <div
        className={`w-full lg:w-auto lg:flex flex-col lg:flex-row items-start lg:items-center gap-3 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) => {
          return (
            <Link
              onClick={() => setIsOpen(!isOpen)}
              key={link.linkName}
              href={link.linkRef}
              className={`hover:text-[#49ffe6] text-white transition uppercase`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <p className="flex items-center justify-between gap-2">
                {link.linkName}
                <span
                  className={` ${
                    hover && "transform duration-300 hover:rotate-180"
                  }`}
                >
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5.64844L4.55078 5.19922L0.800781 1.44922L0.351562 1L1.25 0.121094L1.67969 0.570312L5 3.87109L8.30078 0.570312L8.75 0.121094L9.62891 1L9.17969 1.44922L5.42969 5.19922L5 5.64844Z"
                      fill="CurrentColor"
                    ></path>
                  </svg>
                </span>
              </p>
            </Link>
          );
        })}
      </div>

      {/* right site button */}
      <Link
        href={"https://brainhub.eu/contact"}
        className="px-9 py-3 text-white font-bold hidden lg:block  hover:bg-[#000000] bg-[#242933] uppercase "
      >
        <p className="flex items-center justify-between gap-4 ">
          Get a proposal
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6406 5.03906L7.26562 8.41406L6.75 8.95312L5.67188 7.875L6.21094 7.35938L8.29688 5.25H1.5H0.75V3.75H1.5H8.29688L6.21094 1.66406L5.67188 1.125L6.75 0.0703125L7.26562 0.609375L10.6406 3.98438L11.1797 4.5L10.6406 5.03906Z"
              fill="CurrentColor"
            ></path>
          </svg>
        </p>
      </Link>

      {/* humburger button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 top-[1.26rem] h-10 w-10 flex items-center justify-center  bg-[#242933]  text-2xl transition"
      >
        <div className="flex flex-col gap-1">
          <div className="border-b-2 w-7 border-b-white"></div>
          <div className="border-b-2 w-7 border-b-white"></div>
          <div className="border-b-2 w-7 border-b-white"></div>
          <div className="border-b-2 w-7 border-b-white"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
