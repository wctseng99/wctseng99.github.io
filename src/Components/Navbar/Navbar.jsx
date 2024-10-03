import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoFolderOpenSharp, IoMenuOutline, IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsPersonVcardFill,
} from "react-icons/bs";

const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setSideMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Navbar for large screens */}
      <div className="hidden lg:flex lg:items-stretch py-6 ps-40">
        <ul className="flex justify-start items-start gap-x-8 ">
          <li>
            <Link
              to="about"
              spy={true}
              easing="easeLinear"
              duration={500}
              isDynamic={true}
              offset={-100}
              className="group cursor-pointer dark:text-slate-200 flex hover-underline-animation left bottom-0"
              activeClass="text-blue-700 dark:text-cyan-300 nav-active"
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              easing="easeLinear"
              duration={200}
              isDynamic={true}
              offset={-100}
              className="group cursor-pointer dark:text-slate-200 flex hover-underline-animation left bottom-0"
              activeClass="text-blue-700 dark:text-cyan-300 nav-active"
            >
              <span>Experience</span>
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              easing="easeLinear"
              duration={500}
              isDynamic={true}
              offset={-100}
              className="group cursor-pointer dark:text-slate-200 flex hover-underline-animation left bottom-0"
              activeClass="text-blue-700 dark:text-cyan-300 nav-active"
            >
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="group cursor-pointer dark:text-slate-200 flex hover-underline-animation left bottom-0"
            >
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Side Menu for small screens */}
      <div className="lg:hidden z-10 flex items-center py-2 ps-2">
        <button onClick={handleMenuToggle} className="text-xl">
          <IoMenuOutline className="text-4xl text-slate-600 hover:text-blue-700 dark:text-slate-200"></IoMenuOutline>
        </button>
        <div
          className={`fixed inset-y-0 inset-x-0 z-10 bg-white dark:bg-slate-900 flex flex-col h-dvh transform transition-transform duration-300 ease-in-out ${
            isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between w-full border-b border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-4">
            <p className="text-2xl font-medium text-center flex-grow py-4 text-slate-700 dark:text-slate-200"></p>
            <button onClick={handleMenuToggle} className="text-5xl px-2">
              <IoClose className="text-3xl dark:text-slate-200"></IoClose>
            </button>
          </div>
          <ul className="flex-grow flex flex-col bg-white dark:bg-slate-900 items-start py-10 px-5">
            <li className="mb-4">
              <a
                className="text-zinc-500 flex flex-row items-center group text-2xl cursor-pointer"
                href="/"
              >
                <IoFolderOpenSharp className="mx-4 text-blue-600 dark:text-slate-200" />
                <p className="hover-underline-animation left bottom-dis-2 dark:text-slate-300">
                  About
                </p>
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-zinc-500 flex flex-row items-center group text-2xl"
                href="https://github.com/wctseng99"
                target="_blank"
                rel="noopener"
              >
                <BsGithub className="mx-4 text-blue-600 dark:text-slate-200" />
                <p className="hover-underline-animation left bottom-dis-2 dark:text-slate-300">
                  GitHub
                </p>
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-zinc-500 flex flex-row items-center group text-2xl"
                href="https://www.linkedin.com/in/wctseng/"
                target="_blank"
                rel="noopener"
              >
                <BsLinkedin className="mx-4 text-blue-600  dark:text-slate-200" />
                <p className="hover-underline-animation left bottom-dis-2 dark:text-slate-300">
                  LinkedIn
                </p>
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-zinc-500 flex flex-row items-center group text-2xl"
                href="https://medium.com/@wctseng99"
                target="_blank"
                rel="noopener"
              >
                <FaMedium className="mx-4 text-blue-600 dark:text-slate-200" />
                <p className="hover-underline-animation left bottom-dis-2 dark:text-slate-300">
                  Medium
                </p>
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-zinc-500 flex flex-row items-center group text-2xl"
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
              >
                <BsPersonVcardFill className="mx-4 text-blue-600 dark:text-slate-200" />
                <p className="hover-underline-animation left bottom-dis-2 dark:text-slate-300">
                  Resume
                </p>
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center text-xs py-4 border-t border-slate-300 dark:border-slate-600 bg-whit dark:bg-slate-900 dark:text-slate-300">
            <a
              className="me-5 hover-underline-animation left bottom-0 "
              href="mailto: wctseng99@gmail.com"
            >
              wctseng99@gmail.com
            </a>
            <span className="me-5">|</span>
            <span className="me-5">©2024 Jim Tseng.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
