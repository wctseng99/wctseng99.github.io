import React, { useRef, useEffect, useState } from "react";

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
              href="https://www.e3group.caece.net/"
              target="_blank"
              rel="noopener"
              className="hover-underline-animation left"
            >
              E3 research group
            </a>
          </span>{" "}
          (2021-2023), I focused on research related to energy, environment, and
          economics, while also participating in hackathons, publishing in
          international journals, presenting at various conferences, and serving
          as a teaching assistant.
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
          <img
            src="/map_bg.webp"
            alt="Background"
            className="w-full rounded-3xl shadow-lg"
          />
          <svg
            className="absolute"
            style={{
              top: "74%",
              left: "52%",
              transform: "translate(-50%, -50%)",
            }}
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g transform="translate(200,200)">
              <circle id="core" cx="0" cy="0" r="8"></circle>
              <circle id="radar" cx="0" cy="0" r="8"></circle>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
