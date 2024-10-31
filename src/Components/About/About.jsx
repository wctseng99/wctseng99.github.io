import React, { useRef, useEffect, useState } from "react";
import Map from "../Map/Map";

function About() {
  return (
    <div className="mb-24 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="py-4 text-2xl text-slate-800 dark:text-slate-300">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 leading-loose">
          Back in 2023, I completed my Master's degree in Computer-Aided
          Engineering (CAE) at{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200 z-10 transition-all duration-300 ease-in-out">
            <a
              href="https://www.ntu.edu.tw/"
              target="_blank"
              rel="noopener"
              className="hover-underline-animation left"
            >
              National Taiwan University
            </a>
          </span>
          , where I gained in-depth knowledge of computer science and data
          science.
        </p>
        <p className="mb-4 leading-loose">
          During my time with the{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 ease-in-out">
            <a
              href="https://e3group.caece.net/"
              target="_blank"
              rel="noopener"
              className="hover-underline-animation left"
            >
              E3 research group
            </a>
          </span>{" "}
          , I focused on research related to energy, environment, and economics,
          while also participating in hackathons, publishing in international
          journals, presenting at various conferences, and serving as a teaching
          assistant.
        </p>
        <p className="mb-4 leading-loose">
          Currently, I am a software engineer on the global team at{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200 z-10 transition-all duration-300 ease-in-out">
            <a
              href="https://www.micron.com/"
              target="_blank"
              rel="noopener"
              className="hover-underline-animation left"
            >
              Micron Technology
            </a>
          </span>
          , where I am responsible for developing critical software solutions
          that serve our global clientele.
        </p>
        <p className="mb-4 leading-loose">
          I am interested in <u>data science</u>, <u>data visualization</u>,{" "}
          <u>software development</u>, and areas related to <u>energy</u>, the{" "}
          <u>environment</u>, and <u>economics</u>.
        </p>

        <div className="relative mt-8 svg-container max-w-xl mx-auto">
          {/* <img
            src="/map_bg.webp"
            alt="Background"
            className="w-full rounded-3xl shadow-lg"
          /> */}
          <Map />
          <div className="absolute right-0 bottom-4 bg-slate-700 bg-opacity-90 dark:bg-opacity-90 dark:bg-slate-200 text-slate-100 dark:text-slate-900 rounded-full py-2 px-4">
            <p className="font-bolder text-sm">Taipei, 台北</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
