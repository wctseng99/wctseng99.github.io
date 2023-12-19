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

function Title({ onTitleClick }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1
          className="font-bold text-4xl z-20 text-zinc-950 hover:cursor-pointer hover:text-zinc-500"
          onClick={onTitleClick}
        >
          w.c. tseng
        </h1>
        <a
          className="font-mono mt-1 z-10 font-medium leading-tight tracking-tighter text-zinc-500 hover:text-zinc-950"
          href="mailto: wctseng99@gmail.com"
        >
          wctseng99@gmail.com
        </a>
        {/* lg:left-5 top-10 lg:top-1/2 */}
        <div className="absolute top-10 lg:top-20 lg:-translate-y-1/2">
          {/* lg:flex-col */}
          <ul className="flex items-center lg:items-start justify-center lg:justify-end ">
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group hover:cursor-pointer"
                onClick={onTitleClick}
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-mono hidden lg:flex text-base ml-1 bg-gradient-to-r from-zinc-700 to-zinc-300 bg-left-bottom group-hover:font-semibold bg-[length:0%_2.0px] bg-no-repeat group-hover:bg-[length:100%_2.0px] transition-all duration-200 ease-out">
                  Portfolio
                </p>
                <IoFolderOpenSharp className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group"
                href="https://github.com/wctseng99"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-mono hidden lg:flex text-base ml-1 bg-gradient-to-r from-zinc-700 to-zinc-300 bg-left-bottom group-hover:font-semibold bg-[length:0%_2.0px] bg-no-repeat group-hover:bg-[length:100%_2.0px] transition-all duration-200 ease-out">
                  GitHub
                </p>
                <BsGithub className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group"
                href="https://www.linkedin.com/in/wctseng/"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-mono hidden lg:flex text-base ml-1 bg-gradient-to-r from-zinc-700 to-zinc-300 bg-left-bottom group-hover:font-semibold bg-[length:0%_2.0px] bg-no-repeat group-hover:bg-[length:100%_2.0px] transition-all duration-200 ease-out">
                  LinkedIn
                </p>
                <BsLinkedin className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group"
                href="https://medium.com/@wctseng99"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-mono hidden lg:flex text-base ml-1 bg-gradient-to-r from-zinc-700 to-zinc-300 bg-left-bottom group-hover:font-semibold bg-[length:0%_2.0px] bg-no-repeat group-hover:bg-[length:100%_2.0px] transition-all duration-200 ease-out">
                  Medium
                </p>
                <FaMedium className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group"
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
              >
                {/* <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div> */}
                <p className="font-mono hidden lg:flex text-base ml-1 bg-gradient-to-r from-zinc-700 to-zinc-300 bg-left-bottom group-hover:font-semibold bg-[length:0%_2.0px] bg-no-repeat group-hover:bg-[length:100%_2.0px] transition-all duration-200 ease-out">
                  Resume
                </p>
                <BsPersonVcardFill className="ml-4 group-hover:-translate-y-1 transition-all" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Title;
