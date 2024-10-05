import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { BsArrowUpRight, BsFileText } from "react-icons/bs";

const Portfolio = () => {
  return (
    <>
      <div className="sticky top-0 flex justify-between border-b border-slate-300 dark:border-slate-600 p-2 z-10 w-full backdrop-blur dark:bg-slate-900 bg-zinc-200 selection:bg-sky-200 selection:text-slate-900 dark:selection:bg-sky-200 dark:selection:text-slate-900">
        <div className="flex-grow">
          <Navbar />
        </div>
        <div className="flex items-center lg:px-4 px-2">
          <ThemeSwitcher />
        </div>
      </div>

      <div className="hidden text-slate-800 dark:text-slate-400 lg:flex lg:fixed lg:top-1/2 lg:left-12 lg:items-center lg:z-10 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 lg:rotate-90"></div>

      <div className="scroll-smooth font-sans relative px-6 py-24 md:px-24 md:py-32 lg:py-0 lg:px-36 dark:bg-slate-900 bg-zinc-200 selection:bg-sky-200 selection:text-slate-900 dark:selection:bg-sky-200 dark:selection:text-slate-900">
        <div
          className="lg:flex lg:flex-row lg:justify-between lg:gap-8"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className="lg:w-1/3">
            <Home />
          </div>
          <div className="lg:w-2/3 lg:py-16">
            <Element name="about">
              <div>
                <About />
              </div>
            </Element>
            <Element name="experience">
              <div>
                <Experience />
              </div>
            </Element>
            <Element name="project">
              <div>
                <Project />
              </div>
            </Element>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-6 right-6 flex items-center space-x-2 group">
        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="bg-gray-800 text-slate-300 dark:bg-slate-300 dark:text-gray-800 rounded px-2 py-1 text-sm">
            Resume
          </span>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 p-4 rounded-full shadow-lg bg-blue-600 hover:bg-blue-500"
          aria-label="Resume"
        >
          <BsFileText className="text-2xl" />
        </a>
      </div> */}
    </>
  );
};

export default Portfolio;
