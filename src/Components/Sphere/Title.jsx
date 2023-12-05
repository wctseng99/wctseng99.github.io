import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsPersonVcardFill,
} from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

function Title({ onTitleClick }) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen"
      >
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

        <div className="absolute z-10 lg:left-5 top-10 lg:top-1/2 lg:-translate-y-1/2">
          <ul className="flex items-center lg:items-start justify-center lg:justify-end lg:flex-col">
            <li className="mr-5 text-2xl lg:mb-6 lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group hover:cursor-pointer"
                onClick={onTitleClick}
              >
                <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div>
                <p className="font-mono hidden lg:flex text-base ml-1 group-hover:font-semibold">
                  Portfolio
                </p>
                <BsPersonVcardFill className="ml-4" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:mb-6 lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group"
                href="https://github.com/wctseng99"
                target="_blank"
                rel="noopener"
              >
                <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div>
                <p className="font-mono hidden lg:flex text-base ml-1 group-hover:font-semibold">
                  GitHub
                </p>
                <BsGithub className="ml-4" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:mb-6 lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group"
                href="https://www.linkedin.com/in/wctseng/"
                target="_blank"
                rel="noopener"
              >
                <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div>
                <p className="font-mono hidden lg:flex text-base ml-1 group-hover:font-semibold">
                  LinkedIn
                </p>
                <BsLinkedin className="ml-4" />
              </a>
            </li>
            <li className="mr-5 text-2xl lg:mb-6 lg:ml-10">
              <a
                className="text-zinc-600 hover:text-zinc-950 flex flex-row items-center group"
                href="https://medium.com/@wctseng99"
                target="_blank"
                rel="noopener"
              >
                <div className="hidden lg:flex border border-t-0 group-hover:border-t border-zinc-500 group-hover:border-zinc-600 w-8 group-hover:w-16 transition-all"></div>
                <p className="font-mono hidden lg:flex text-base ml-1 group-hover:font-semibold">
                  Medium
                </p>
                <FaMedium className="ml-4" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Title;
