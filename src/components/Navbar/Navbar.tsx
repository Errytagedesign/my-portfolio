"use client";

import { useState } from "react";
import Image from "next/image";

import { images } from "../exportImg";

const navLink = [
  {
    id: 1,
    name: "About",
    link: "#about",
  },
  {
    id: 2,
    name: "Experience",
    link: "#experience",
  },
  {
    id: 3,
    name: "Work",
    link: "#work",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

const glassPanel =
  "bg-[rgba(1,38,18,0.063)] backdrop-blur-[5px] backdrop-brightness-90";

const mobileGlassPanel =
  "max-md:bg-[rgba(1,38,18,0.063)] max-md:backdrop-blur-[5px] max-md:backdrop-brightness-90";

const barBase =
  "absolute block h-1 w-[70%] rounded-[9px] bg-pry transition-all duration-250 ease-in-out";

function Navbar() {
  const [closed, setClosed] = useState(true);

  const toggleNav = () => setClosed((current) => !current);

  return (
    <main className="relative">
      <nav
        className={`sticky top-0 z-2 mb-20 flex h-[100px] w-full flex-row items-center justify-between px-3 py-4 ${glassPanel}`}
      >
        <div data-aos="zoom-in" className="w-1/3">
          <Image
            className="h-auto w-1/2 md:w-1/6"
            src={images.logo.src}
            width={images.logo.width}
            height={images.logo.height}
            alt="Sodeeq Awoyemi Logo"
            priority
          />
        </div>

        <aside
          data-aos="fade-up"
          className={`w-1/2 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:z-2 max-md:flex max-md:h-screen max-md:w-full max-md:justify-end max-md:transition-all max-md:duration-1000 max-md:ease-in-out ${
            closed ? "max-md:left-full" : "max-md:left-0"
          } ${mobileGlassPanel}`}
        >
          <ul
            data-aos="zoom-in"
            data-aos-delay="300"
            className="m-0 flex w-full list-none flex-row items-center justify-around p-0 text-center max-md:h-screen max-md:w-3/4 max-md:flex-col max-md:bg-sec max-md:p-12 max-md:shadow-panel"
          >
            {navLink.map((item) => (
              <li key={item.id} onClick={toggleNav}>
                <a href={item.link} className="text-pry hover:text-white">
                  {" "}
                  {item.name}{" "}
                </a>
              </li>
            ))}

            <li>
              <a
                href="https://docs.google.com/document/d/1xsm9StZTrsSOXFAm_NqcTlTdUJYPiTn9qWPBFvDMGUI/edit"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-[5px] border-2 border-pry bg-transparent px-4 py-2 text-pry transition-all hover:scale-110 hover:text-white hover:shadow-glow"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                {" "}
                Resume{" "}
              </a>
            </li>
          </ul>
        </aside>

        {/* Hamburger icon */}
        <div
          onClick={toggleNav}
          aria-label={closed ? "Open navigation" : "Close navigation"}
          className="relative z-9 hidden h-[35px] w-[60px] cursor-pointer transition-all duration-500 ease-in-out max-md:flex"
        >
          <span
            className={`${barBase} left-0 ${
              closed ? "top-0" : "top-[18px] rotate-[135deg]"
            }`}
          />
          <span
            className={`${barBase} top-[12px] ${
              closed ? "left-0 opacity-100" : "left-[-60px] opacity-0"
            }`}
          />
          <span
            className={`${barBase} left-0 ${
              closed ? "top-[25px]" : "top-[18px] rotate-[-135deg]"
            }`}
          />
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
