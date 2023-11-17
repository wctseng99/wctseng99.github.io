import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

function Home() {
  return (
    <div className="font-serif relative lg:sticky w-full lg:w-1/2 lg:top-0 lg:max-h-screen lg:py-32 lg:flex lg:flex-col lg:content-between justify-between text-slate-700 dark:text-slate-400">
      <div className="mb-2 flex-col justify-between">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
          className="text-4xl md:text-5xl lg:text-4xl lg:pb-2 lg:pt-2 font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-12"
        >
          <a href="/">Wei Chun Tseng</a>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
          className="mt-4 mb-16 md:text-lg max-w-xs font-medium"
        >
          I am passionate about software development and data science.
        </p>

        <ul
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
          className="hidden lg:block mb-24"
        >
          <li>
            <Link
              to="about"
              spy={true}
              offset={-128}
              isDynamic={true}
              easing="easeLinear"
              className="cursor-pointer font-bold hover:dark:text-slate-200 hover:text-blue-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              offset={-50}
              isDynamic={true}
              easing="easeLinear"
              className="cursor-pointer font-bold hover:dark:text-slate-200 hover:text-blue-700"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              offset={-50}
              isDynamic={true}
              easing="easeLinear"
              className="cursor-pointer font-bold hover:dark:text-slate-200 hover:text-blue-700"
            >
              Project
            </Link>
          </li>
        </ul>

        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
          className="hover:dark:text-slate-200 hover:text-blue-700"
        >
          <a
            className="inline-flex items-center font-medium leading-tight tracking-tighter text-base md:text-lg"
            href="mailto: wctseng99@gmail.com"
          >
            <MdEmail className="mt-0.5 mr-2" />
            <span>wctseng99@gmail.com</span>
          </a>
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
        className="mb-16"
      >
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
