import React from "react";
import { Element } from "react-scroll";
import Home from "../Home/Home";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Portfolio = () => {
  return (
    <div className="scroll-smooth font-inter relative px-6 py-24 md:px-24 md:py-32 lg:py-0 lg:px-36 dark:bg-slate-900 bg-zinc-300 selection:bg-sky-200 selection:text-slate-900 dark:selection:bg-sky-200 dark:selection:text-slate-900">
      <div className="absolute top-5 right-4 md:right-10">
        <ThemeSwitcher />
      </div>
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-8">
        <Home />
        <div className="lg:w-1/2 lg:py-32 ">
          <Element name="about">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="350"
            >
              <About />
            </div>
          </Element>
          <Element name="experience">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="350"
            >
              <Experience />
            </div>
          </Element>
          <Element name="project">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="350"
            >
              <Project />
            </div>
          </Element>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
