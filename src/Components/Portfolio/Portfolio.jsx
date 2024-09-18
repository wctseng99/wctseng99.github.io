import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Portfolio = () => {
  return (
    <>
      <div className="hidden font-inter text-slate-800 dark:text-slate-400 lg:flex lg:fixed lg:top-1/2 lg:left-12 lg:items-center lg:z-10 lg:transform lg:-translate-y-1/2 lg:-translate-x-1/2 lg:rotate-90">
        <ul className="origin-center flex flex-row space-x-6">
          <li>
            <Link
              to="about"
              spy={true}
              easing="easeLinear"
              duration={500}
              isDynamic={true}
              offset={-50}
              className="group cursor-pointer hover:text-blue-700 hover:dark:text-slate-200"
              activeClass="text-blue-700 dark:text-cyan-300 nav-active"
            >
              <span className="transform -rotate-90">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              easing="easeLinear"
              duration={200}
              isDynamic={true}
              offset={-50}
              className="group cursor-pointer hover:text-blue-700 hover:dark:text-slate-200"
              activeClass="text-blue-700 dark:text-cyan-300 nav-active"
            >
              <span className="transform -rotate-90">Experience</span>
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              easing="easeLinear"
              duration={500}
              isDynamic={true}
              offset={-50}
              className="group cursor-pointer hover:text-blue-700 hover:dark:text-slate-200"
              activeClass="text-blue-700 dark:text-cyan-300 nav-active"
            >
              <span className="transform -rotate-90">Projects</span>
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-blue-700 hover:dark:text-slate-200"
            >
              <span className="transform -rotate-90">Resume</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="scroll-smooth font-inter relative px-6 py-24 md:px-24 md:py-32 lg:py-0 lg:px-36 dark:bg-slate-900 bg-zinc-300 selection:bg-sky-200 selection:text-slate-900 dark:selection:bg-sky-200 dark:selection:text-slate-900">
        <div className="absolute top-5 right-4 md:right-10">
          <ThemeSwitcher />
        </div>

        <div
          className="lg:flex lg:flex-row lg:justify-between lg:gap-8"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <div className="lg:w-1/3">
            <Home />
          </div>
          <div className="lg:w-2/3 lg:py-20">
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
    </>
  );
};

export default Portfolio;
