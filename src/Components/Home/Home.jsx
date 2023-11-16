import React from "react";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

function Home() {
  return (
    <div className="relative lg:sticky w-full lg:w-1/2 lg:top-24 lg:max-h-screen lg:py-24 lg:flex lg:flex-col lg:content-between justify-between text-slate-700 dark:text-slate-400">
      <div className="mb-12 flex-col justify-between">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-12">
          <a href="/">Wei Chun Tseng</a>
        </h1>

        <p className="mt-4 mb-12 md:text-lg max-w-xs font-semibold">
          I am passionate about software development and data science.
        </p>

        <p className="hover:dark:text-slate-200 hover:text-blue-700">
          <a
            className="inline-flex items-center font-medium leading-tight text-base"
            href="mailto: wctseng99@gmail.com"
          >
            <MdEmail className="mr-2" />
            <span>Contact me: wctseng99@gmail.com</span>
          </a>
        </p>
      </div>
      <div className="mb-16">
        <ul className="ml-1 mt-8 flex items-center">
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700 hover:dark:text-slate-200"
              href="https://github.com/wctseng99"
              target="_blank"
              rel="noopener"
            >
              <BsGithub />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700 hover:dark:text-slate-200"
              href="https://www.linkedin.com/in/wctseng/"
              target="_blank"
              rel="noopener"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700 hover:dark:text-slate-200"
              href="https://medium.com/@wctseng99"
              target="_blank"
              rel="noopener"
            >
              <FaMedium />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700 hover:dark:text-slate-200"
              href="https://www.facebook.com/weijun.tseng/"
              target="_blank"
              rel="noopener"
            >
              <BsFacebook />
            </a>
          </li>
          <li className="mr-5 text-2xl">
            <a
              className="block hover:text-blue-700 hover:dark:text-slate-200"
              href="https://www.instagram.com/tseeng10/"
              target="_blank"
              rel="noopener"
            >
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
