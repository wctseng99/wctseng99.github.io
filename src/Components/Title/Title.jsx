import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsPersonVcardFill,
} from "react-icons/bs";
import { IoFolderOpenSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Title({ onTitleClick }) {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  return (
    <>
      <div className="flex flex-col items-center content-center justify-center h-screen">
        <div className="-translate-y-1/2 lg:-translate-y-0">
          <a href="/">
            <h1 className="font-bold font-sans pb-1 text-2xl z-20 hover:cursor-pointer bg-clip-text text-blue-800 hover:text-blue-600">
              WEI CHUN TSENG
            </h1>
          </a>
          <a className="flex justify-center" href="mailto: wctseng99@gmail.com">
            <p className="font-sans mt-1 z-10 font-medium leading-tight tracking-tighter bg-gradient-to-bl from-zinc-500 via-zinc-600 to-zinc-700 text-transparent bg-clip-text hover:text-blue-700">
              wctseng99@gmail.com
            </p>
          </a>
        </div>
        {/* lg:left-5 top-10 lg:top-1/2 */}
        <div className="absolute top-10 lg:top-20">
          {/* lg:flex-col */}
          <ul className="flex items-center lg:items-start justify-center lg:justify-end ">
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 hover:text-blue-700 flex flex-row items-center group hover:cursor-pointer"
                onClick={handlePortfolioClick}
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-sans hidden lg:flex text-base ml-1 hover-underline-animation left bottom-0">
                  Portfolio
                </p>
                <IoFolderOpenSharp className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 hover:text-blue-700 flex flex-row items-center group"
                href="https://github.com/wctseng99"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-sans hidden lg:flex text-base ml-1 hover-underline-animation left bottom-0">
                  GitHub
                </p>
                <BsGithub className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 hover:text-blue-700 flex flex-row items-center group"
                href="https://www.linkedin.com/in/wctseng/"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-sans hidden lg:flex text-base ml-1 hover-underline-animation left bottom-0">
                  LinkedIn
                </p>
                <BsLinkedin className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 hover:text-blue-700 flex flex-row items-center group"
                href="https://medium.com/@wctseng99"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-sans hidden lg:flex text-base ml-1 hover-underline-animation left bottom-0">
                  Medium
                </p>
                <FaMedium className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-900 hover:text-blue-700 flex flex-row items-center group"
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-sans hidden lg:flex text-base ml-1 hover-underline-animation left bottom-0">
                  Resume
                </p>
                <BsPersonVcardFill className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-5 font-sans text-sm">
          wctseng © 2024
        </div>
      </div>
    </>
  );
}

export default Title;
