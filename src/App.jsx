import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    // var delay = 0;
    // $("[data-aos]").each(function () {
    //   if ($(this).is(":visible")) {
    //     delay = delay + 500;
    //     $(this).attr("data-aos-delay", delay);
    //   }
    // });
    AOS.init();

    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="scroll-smooth font-sans relative px-6 py-24 md:px-24 md:py-32 lg:py-0 lg:px-36 dark:bg-slate-900 bg-[#eff2f2] selection:bg-sky-200 selection:text-slate-900 dark:selection:bg-sky-200 dark:selection:text-slate-900">
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
                data-aos-delay="2500"
              >
                <About />
              </div>
            </Element>
            <Element name="experience">
              <div data-aos="fade-up" data-aos-duration="500">
                <Experience />
              </div>
            </Element>
            <Element name="project">
              <div data-aos="fade-up" data-aos-duration="500">
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
}

export default App;
