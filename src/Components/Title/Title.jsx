import React, { useState } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsPersonVcardFill,
} from "react-icons/bs";
import { IoFolderOpenSharp, IoMenuOutline, IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Title({ onTitleClick }) {
  const navigate = useNavigate();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  const handleMenuToggle = () => {
    setSideMenuOpen((prevState) => !prevState);
    console.log("isSideMenuOpen");
  };

  return (
    <>
      <div className="flex flex-col items-center content-center justify-center h-screen z-10">
        <a className="flex justify-center" href="/">
          <h1 className="font-bold font-sans pb-1 text-2xl z-10 hover:cursor-pointer bg-clip-text text-blue-700 hover:text-blue-600">
            WEI CHUN TSENG
          </h1>
        </a>
        <a className="flex justify-center" href="/">
          <p className="font-sans mt-1 z-10 font-medium leading-tight tracking-tighter text-blue-700 hover:text-blue-600 ">
            ( JIM TSENG )
          </p>
        </a>

        {/* Side Menu for small screens */}
        <div className="lg:hidden z-10">
          <button
            onClick={handleMenuToggle}
            className="text-xl absolute top-10 left-10"
          >
            <IoMenuOutline className="text-4xl text-blue-700"></IoMenuOutline>
          </button>

          {isSideMenuOpen && (
            <div className="absolute inset-0 bg-white h-screen flex flex-col">
              <div className="flex items-center justify-between w-full border-b border-slate-300">
                <p className="text-2xl font-medium text-center flex-grow py-4 text-slate-700">
                  <span className="text-blue-600 pe-2">Jim</span>
                  <span>Tseng</span>
                </p>
                <button onClick={handleMenuToggle} className="text-5xl px-2">
                  <IoClose className="text-3xl"></IoClose>
                </button>
              </div>
              <ul className="flex-grow flex flex-col items-start py-10 px-5">
                <li className="mb-4">
                  <a
                    className="text-zinc-900 flex flex-row items-center group text-2xl cursor-pointer"
                    onClick={handlePortfolioClick}
                  >
                    <IoFolderOpenSharp className="mx-4 text-blue-600" />
                    <p className="hover-underline-animation left bottom-dis-2">
                      About
                    </p>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-zinc-900 flex flex-row items-center group text-2xl"
                    href="https://github.com/wctseng99"
                    target="_blank"
                    rel="noopener"
                  >
                    <BsGithub className="mx-4 text-blue-600" />
                    <p className="hover-underline-animation left bottom-dis-2">
                      GitHub
                    </p>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-zinc-900 flex flex-row items-center group text-2xl"
                    href="https://www.linkedin.com/in/wctseng/"
                    target="_blank"
                    rel="noopener"
                  >
                    <BsLinkedin className="mx-4 text-blue-600" />
                    <p className="hover-underline-animation left bottom-dis-2">
                      LinkedIn
                    </p>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-zinc-900 flex flex-row items-center group text-2xl"
                    href="https://medium.com/@wctseng99"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaMedium className="mx-4 text-blue-600" />
                    <p className="hover-underline-animation left bottom-dis-2">
                      Medium
                    </p>
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="text-zinc-900 flex flex-row items-center group text-2xl"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    <BsPersonVcardFill className="mx-4 text-blue-600" />
                    <p className="hover-underline-animation left bottom-dis-2">
                      Resume
                    </p>
                  </a>
                </li>
              </ul>
              <div className="text-xs py-4 border-t border-slate-300 flex items-center justify-center">
                <a
                  className="me-5 hover-underline-animation left bottom-0"
                  href="mailto: wctseng99@gmail.com"
                >
                  wctseng99@gmail.com
                </a>
                <span className="me-5">|</span>
                <span className="me-5">©2024 Jim Tseng.</span>
              </div>
            </div>
          )}
        </div>

        {/* Navbar for large screens */}
        <div className="absolute lg:top-20 hidden lg:block">
          <ul className="flex items-center lg:items-start justify-center lg:justify-end">
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 flex flex-row items-center group hover:cursor-pointer"
                onClick={handlePortfolioClick}
              >
                <p className="font-sans lg:flex text-base ml-1 group-hover:underline decoration-blue-600">
                  About
                </p>
                <IoFolderOpenSharp className="ml-4 group-hover:text-blue-700 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 flex flex-row items-center group"
                href="https://github.com/wctseng99"
                target="_blank"
                rel="noopener"
              >
                <p className="font-sans lg:flex text-base ml-1 group-hover:underline decoration-blue-600">
                  GitHub
                </p>
                <BsGithub className="ml-4 group-hover:text-blue-700 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 flex flex-row items-center group"
                href="https://www.linkedin.com/in/wctseng/"
                target="_blank"
                rel="noopener"
              >
                <p className="font-sans lg:flex text-base ml-1 group-hover:underline decoration-blue-600">
                  LinkedIn
                </p>
                <BsLinkedin className="ml-4 text-xl group-hover:text-blue-600 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900  flex flex-row items-center group"
                href="https://medium.com/@wctseng99"
                target="_blank"
                rel="noopener"
              >
                <p className="font-sans lg:flex text-base ml-1 group-hover:underline decoration-blue-600">
                  Medium
                </p>
                <FaMedium className="ml-4 group-hover:text-blue-600 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 flex flex-row items-center group"
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
              >
                <p className="font-sans lg:flex text-base ml-1 group-hover:underline decoration-blue-600">
                  Resume
                </p>
                <BsPersonVcardFill className="ml-4 group-hover:text-blue-600 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
          </ul>
        </div>

        <div className="absolute bottom-5 font-sans text-sm">
          <a
            className="me-5 hover-underline-animation left bottom-0"
            href="mailto: wctseng99@gmail.com"
          >
            wctseng99@gmail.com
          </a>
          <span className="me-5">|</span>
          <span className="me-5">©2024 Jim Tseng.</span>
        </div>
      </div>
    </>
  );
}

export default Title;
