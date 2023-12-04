import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import Footer from "./Components/Footer/Footer";
import Sphere from "./Components/Sphere/Sphere";
import Title from "./Components/Sphere/Title";

function App() {
  useEffect(() => {
    AOS.init();
    // window.scrollTo(0, 0);
  }, []);

  const [showSphere, setShowSphere] = useState(true);

  const handleTitleClick = () => {
    setShowSphere(false);
  };

  return (
    <>
      {showSphere ? ( //bg-zinc-300 
        <div className="bg-gradient-to-r from-zinc-300 to-zinc-300 h-screen w-screen">
          <Canvas
            style={{ position: "absolute" }} // , width: "100vw", height: "100vh"
          >
            <Sphere />
          </Canvas>
          <Title onTitleClick={handleTitleClick} />
        </div>
      ) : (
        <div
          // onMouseMove={handleMouseMove}
          className="scroll-smooth font-inter relative px-6 py-24 md:px-24 md:py-32 lg:py-0 lg:px-36 dark:bg-slate-900 bg-zinc-300 selection:bg-sky-200 selection:text-slate-900 dark:selection:bg-sky-200 dark:selection:text-slate-900"
        >
          {/* <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
          radial-gradient(
            1000px at ${mouseX}px ${mouseY}px,
            rgba(93, 93, 146, 0.15),
            transparent 80%
          )
        `,
          }}
        /> */}
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
                  data-aos-delay="400"
                >
                  <About />
                </div>
              </Element>
              <Element name="experience">
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <Experience />
                </div>
              </Element>
              <Element name="project">
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <Project />
                </div>
              </Element>
              <div
              // data-aos="fade-up"
              // data-aos-duration="500"
              // data-aos-delay="300"
              >
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
