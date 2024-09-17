import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative lg:sticky w-full lg:top-20 lg:max-h-screen lg:flex lg:flex-col lg:content-between justify-between text-slate-700 dark:text-slate-400">
      <div
        className="mb-2 flex-col items-start justify-between"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <img
          src="/jimtseng.jpg"
          alt="Jim Tseng"
          className="mb-8 w-44 h-44 rounded-full border border-slate-300 dark:border-slate-800 object-cover"
        />
        <h1 className="text-4xl md:text-5xl lg:text-5xl lg:pb-2 lg:pt-2 font-bold tracking-tight text-slate-800 dark:text-slate-200 mb-12">
          <a href="/portfolio">Jim Tseng</a>
        </h1>
        <p className="mt-4 mb-14 md:text-lg max-w-xs">
          <div className="mb-4 font-bold">Software Engineer</div>
          <div>I am passionate about software development and data</div>
          science.
        </p>

        {/* <ul className="hidden lg:block mb-24">
          <li>
            <Link
              to="about"
              spy={true}
              isDynamic={true}
              easing="easeLinear"
              className="group flex items-center cursor-pointer hover:dark:text-slate-200 hover:text-blue-700"
              activeClass="dark:text-slate-200 text-blue-700 nav-active"
            >
              <span className="bg-current h-px w-10 transition-all duration-300 group-[.nav-active]:w-20"></span>
              <span className="ml-2">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              isDynamic={true}
              easing="easeLinear"
              className="group flex items-center cursor-pointer hover:dark:text-slate-200 hover:text-blue-700"
              activeClass="dark:text-slate-200 text-blue-700 nav-active"
            >
              <span className="bg-current h-px w-10 transition-all duration-300 group-[.nav-active]:w-20"></span>
              <span className="ml-2">Experience</span>
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              isDynamic={true}
              easing="easeLinear"
              className="group flex items-center cursor-pointer hover:dark:text-slate-200 hover:text-blue-700"
              activeClass="dark:text-slate-200 text-blue-700 nav-active"
            >
              <span className="bg-current h-px w-10 transition-all duration-300 group-[.nav-active]:w-20"></span>
              <span className="ml-2">Projects</span>
            </Link>
            <div
              className="cursor-pointer hover:dark:text-slate-200 hover:text-blue-700"
              activeClass="dark:text-slate-200 text-blue-700"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener">
                Resume
              </a>
            </div>
          </li>
        </ul> */}
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
                href="mailto: wctseng99@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <MdEmail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
